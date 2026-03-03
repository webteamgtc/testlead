/**
 * TikTok Pixel (ttq) helpers for identify and standard events.
 * Use on pages where PII/events are available. PII must be hashed with SHA-256 on the client.
 */

const ALGO = "SHA-256";

/** Hash a string with SHA-256 (hex). Returns empty string if not in browser or crypto unavailable. */
export async function hashSha256(str) {
  if (typeof window === "undefined" || !str || typeof str !== "string")
    return "";
  try {
    const enc = new TextEncoder();
    const buf = await crypto.subtle.digest(ALGO, enc.encode(str.trim().toLowerCase()));
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  } catch {
    return "";
  }
}

/**
 * Call before event code on pages where PII is available. Hashes values with SHA-256.
 * @param {{ email?: string, phone_number?: string, external_id?: string }} payload
 */
export async function identify(payload) {
  if (typeof window === "undefined" || !window.ttq) return;
  const p = {};
  if (payload.email) p.email = await hashSha256(payload.email);
  if (payload.phone_number) p.phone_number = await hashSha256(payload.phone_number);
  if (payload.external_id) p.external_id = await hashSha256(payload.external_id);
  if (Object.keys(p).length) window.ttq.identify(p);
}

/** Standard event payload shape: contents array + optional value/currency */
function basePayload(options = {}) {
  const { content_id, content_type, content_name, value, currency } = options;
  const contents = [];
  if (content_id || content_type || content_name) {
    contents.push({
      content_id: content_id || "",
      content_type: content_type || "product_group",
      content_name: content_name || "",
    });
  }
  const payload = contents.length ? { contents } : {};
  if (value != null && value !== "") payload.value = Number(value);
  if (currency) payload.currency = currency;
  return payload;
}

export function trackViewContent(options = {}) {
  if (typeof window !== "undefined" && window.ttq)
    window.ttq.track("ViewContent", basePayload(options));
}

export function trackSearch(options = {}) {
  if (typeof window !== "undefined" && window.ttq) {
    const p = basePayload(options);
    if (options.search_string != null) p.search_string = options.search_string;
    window.ttq.track("Search", p);
  }
}

export function trackContact(options = {}) {
  if (typeof window !== "undefined" && window.ttq)
    window.ttq.track("Contact", basePayload(options));
}

export function trackClickButton(options = {}) {
  if (typeof window !== "undefined" && window.ttq)
    window.ttq.track("ClickButton", basePayload(options));
}

export function trackAddToWishlist(options = {}) {
  if (typeof window !== "undefined" && window.ttq)
    window.ttq.track("AddToWishlist", basePayload(options));
}

export function trackCompleteRegistration(options = {}) {
  if (typeof window !== "undefined" && window.ttq)
    window.ttq.track("CompleteRegistration", basePayload(options));
}

export function trackLead(options = {}) {
  if (typeof window !== "undefined" && window.ttq)
    window.ttq.track("Lead", basePayload(options));
}
