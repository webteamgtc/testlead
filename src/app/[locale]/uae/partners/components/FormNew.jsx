"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import { countryList } from "../../../context/useCountriesDetails";
import { useLocationDetail } from "../../../context/useLocationDetail";
import { toast } from "react-toastify";
import Select from "react-select";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { usePathname, useSearchParams } from "next/navigation";

// Blocked fake/temporary email domains
const BLOCKED_EMAIL_DOMAINS = [
  "yopmail.com",
  "yopmail.fr",
  "yopmail.net",
  "mailinator.com",
  "guerrillamail.com",
  "guerrillamailblock.com",
  "10minutemail.com",
  "tempmail.com",
  "throwaway.email",
  "temp-mail.org",
  "mohmal.com",
  "trashmail.com",
  "maildrop.cc",
  "tempail.com",
  "getnada.com",
  "mintemail.com",
  "mytrashmail.com",
  "sharklasers.com",
  "spamgourmet.com",
  "mailnesia.com",
  "meltmail.com",
  "mailcatch.com",
  "emailondeck.com",
  "fakeinbox.com",
  "dispostable.com",
  "emailfake.com",
  "getairmail.com",
  "mailin8r.com",
  "mailme.lv",
  "tempr.email",
  "tmpmail.org",
  "mail.tm",
  "emailnator.com",
];

// put above your return()
const selectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#fff",
    color: "#000",
    borderColor: state.isFocused ? "#666684" : "#d1d5db",
    boxShadow: "none",
    ":hover": { borderColor: "#666684" },
    minHeight: 42,
  }),
  valueContainer: (base) => ({ ...base, color: "#000" }),
  singleValue: (base) => ({ ...base, color: "#000" }),
  input: (base) => ({ ...base, color: "#000" }),
  placeholder: (base) => ({ ...base, color: "#6b7280" }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#fff",
    color: "#000",
    zIndex: 9999,
  }),
  menuList: (base) => ({ ...base, backgroundColor: "#fff" }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#e5e7eb"
      : state.isFocused
      ? "#f3f4f6"
      : "#fff",
    color: "#000",
    ":active": { backgroundColor: "#e5e7eb" },
  }),
  indicatorSeparator: (base) => ({ ...base, backgroundColor: "#e5e7eb" }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused ? "#666684" : "#9ca3af",
    ":hover": { color: "#666684" },
  }),
};

const NewPageForm = ({ zapierUrl, successPath, isPreAccount = false }) => {
  const { countryData } = useLocationDetail();
  const [phoneOtpLoading, setPhoneOtpLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpPhoneNumber, setOtpPhoneNumber] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const params = useSearchParams();
  const campaign = params.get("utm_source");
  const fbclid = params.get("fbclid");
  const path = usePathname();
  const router = useRouter();
  const t = useTranslations("home.form");
  const locale = useLocale();

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // prepare country options
  const options = countryList?.map((item) => ({
    value: item.alpha_2_code,
    label: (
      <div className="flex items-center gap-2">
        <img
          src={`https://flagcdn.com/w40/${item.alpha_2_code.toLowerCase()}.png`}
          alt={item.en_short_name}
          className="w-5 h-4 object-cover"
        />
        <span>{item.en_short_name}</span>
      </div>
    ),
  }));

  const getIso2ByCountryName = (name) => {
    const hit = countryList.find((c) => c.en_short_name === name);
    return hit?.alpha_2_code;
  };

  // formik setup
  const formik = useFormik({
    initialValues: {
      nickname: "",
      email: "",
      phone: "",
      country: "",
      otp: "",
      terms: false,
    },
    validationSchema: Yup.object({
      nickname: Yup.string().required(t("errors.firstNameRequired")),
      email: Yup.string()
        .email(t("errors.emailInvalid"))
        .required(t("errors.emailRequired"))
        .test(
          "no-plus-sign",
          "Email address cannot contain '+'",
          (value) => !value || !value.includes("+")
        )
        .test(
          "blocked-domain",
          "This email domain is not allowed. Please use a valid email address.",
          (value) => {
            if (!value) return true;
            const emailDomain = value.split("@")[1]?.toLowerCase();
            return !BLOCKED_EMAIL_DOMAINS.includes(emailDomain);
          }
        ),
      phone: Yup.string()
        .required(t("errors.phoneRequired"))
        .test("is-valid-e164", t("errors.phoneInvalid"), (value) => {
          if (!value) return false;
          return isValidPhoneNumber(value);
        })
        .test(
          "matches-selected-country",
          "Number doesn’t match selected country",
          function (value) {
            const selectedCountryName = this.parent.country;
            if (!value || !selectedCountryName) return true;
            const selectedIso2 = getIso2ByCountryName(selectedCountryName);
            if (!selectedIso2) return true;
            const pn = parsePhoneNumberFromString(value);
            if (!pn) return false;
            return pn.country === selectedIso2;
          }
        ),
      country: Yup.string().required(t("errors.countryRequired")),
      otp: Yup.string()
        .length(6, t("errors.otpLength"))
        .required(t("errors.otpRequired")),
      terms: Yup.bool().oneOf([true], t("errors.termsRequired")),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      // Check if OTP is verified before proceeding (state is set after server-side verification)
      if (!isOtpVerified) {
        toast.error(
          "Please verify your phone number with OTP before submitting."
        );
        setLoading(false);
        return;
      }

      try {
        // Send data to Zapier before email validation

        // Validate email first
        const validationResponse = await axios.post(`/api/validate-email`, {
          email: formik.values.email,
        });

        if (!validationResponse.data.valid) {
          toast.error(
            t("invalidEmail") ||
              "Invalid email address. Please use a valid email."
          );
          return;
        }

        try {
          await axios.post(
            "https://hooks.zapier.com/hooks/catch/16420445/uwaumm0/",
            JSON.stringify({
              ...values,
            })
          );
        } catch (zapierError) {
          console.error("Zapier webhook failed:", zapierError);
          // Continue even if Zapier fails, but log it
        }

        try {
          await axios.post(
            "/api/swap-email",
            JSON.stringify({
              name: values?.nickname,
              email: values?.email,
              locale,
            })
          );
        } catch (emailError) {
          console.error("Lucky draw email failed:", emailError);
          // Continue even if email fails, but log it
        }

        toast.success(t("thankYou1"));
        localStorage.setItem("user", JSON.stringify({ ...values }));
        router.push("/uae/partners/success");
        formik.resetForm();
        setIsOtpVerified(false); // Reset OTP verification after successful submission
      } catch (err) {
        console.error("Form submission error:", err);
        toast.error(
          err?.response?.data?.message || err?.message || "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    },
  });

  // Set country and invitation after formik is initialized
  useEffect(() => {
    if (countryData?.country) {
      const filterData = countryList.find(
        (item) =>
          item?.en_short_name == countryData.country ||
          item?.alpha_2_code == countryData.country
      );
      formik.setFieldValue(
        "country",
        filterData ? filterData?.alpha_2_code : ""
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryData?.country, countryList]);

  // Reset OTP verification when phone number changes
  useEffect(() => {
    if (
      otpPhoneNumber &&
      formik.values.phone &&
      formik.values.phone !== otpPhoneNumber
    ) {
      // Phone number changed after OTP was sent, reset OTP state
      setShowOtp(false);
      setIsOtpVerified(false); // Reset OTP verified status
      formik.setFieldValue("otp", "");
      setOtpPhoneNumber("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.phone, otpPhoneNumber]);

  const sendPhoneVerificationCode = () => {
    if (!formik.values.phone) {
      toast.error(t("errors.phoneRequired"));
      return;
    }
    if (!isValidPhoneNumber(formik.values.phone)) {
      toast.error(t("errors.phoneInvalid"));
      return;
    }
    setPhoneOtpLoading(true);
    axios
      .post(`/api/send-phone-otp`, {
        phone: formik.values.phone,
        first_name: formik.values.nickname,
        locale,
        channel: "whatsapp",
      })
      .then((res) => {
        if (res?.data?.success || res?.data?.message) {
          setShowOtp(true);
          formik.setFieldValue("otp", "");
          setIsOtpVerified(false); // Reset verification status when new OTP is sent
          // Store the phone number that OTP was sent to (for tracking changes)
          setOtpPhoneNumber(formik.values.phone);
          toast.success(t("otpSent"));
        } else {
          toast.error(res?.data?.message || t("otpFail"));
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(
          error?.response?.data?.message || error?.message || t("otpFail")
        );
      })
      .finally(() => setPhoneOtpLoading(false));
  };

  // Check if phone number is valid and complete
  const isPhoneValid =
    formik.values.phone && isValidPhoneNumber(formik.values.phone);

  // verify OTP server-side
  const verifyOtpCode = async (otp) => {
    if (!otp || otp.length !== 6) {
      return;
    }

    try {
      const res = await axios.post("/api/verify-otp", {
        phone: formik.values.phone,
        otp: otp,
      });

      if (res?.data?.success) {
        toast.success(t("otpSuccess") || "OTP verified successfully");
        setShowOtp(false);
        setIsOtpVerified(true); // Mark OTP as verified
      } else {
        toast.error(res?.data?.message || t("otpFail") || "Invalid OTP");
        setIsOtpVerified(false); // Ensure it's false on failure
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          t("otpFail") ||
          "Failed to verify OTP"
      );
      setIsOtpVerified(false); // Ensure it's false on error
    }
  };

  const color = isMobile ? "text-[#fff]" : "text-[#666684]";

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <input
        name="fbclid"
        className="hidden"
        type="text"
        onChange={formik.handleChange}
        value={
          !formik.values.fbclid || formik.values.fbclid === ""
            ? (formik.values.fbclid = fbclid)
            : (formik.values.fbclid = fbclid)
        }
      />
      <input
        name="utm_campain"
        className="hidden"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={
          !formik.values.utm_campain || formik.values.utm_campain === ""
            ? (formik.values.utm_campain = path)
            : (formik.values.utm_campain = path)
        }
      />
      <input
        name="utm_source"
        className="hidden"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={
          !formik.values.utm_source || formik.values.utm_source === ""
            ? (formik.values.utm_source = campaign)
            : (formik.values.utm_source = campaign)
        }
      />
      <div className="grid sm:grid-cols-1 gap-4">
        <div>
          <label className={`text-sm ${color} mb-1`}>{"Full Name"}</label>
          <input
            type="text"
            placeholder={"Full Name"}
            {...formik.getFieldProps("nickname")}
            className={`w-full border px-3 py-2 md:text-primary text-white ${
              isMobile ? "bg-[#33335b]" : ""
            } rounded-md ${
              formik.touched.nickname && formik.errors.nickname
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.nickname && formik.errors.nickname && (
            <p className="text-xs text-red-500">{formik.errors.nickname}</p>
          )}
        </div>
      </div>

      {/* Email + OTP */}
      <div>
        <label className={`text-sm ${color} mb-1`}>{"Email"}</label>
        <div className="relative">
          <input
            type="email"
            placeholder={"Email"}
            {...formik.getFieldProps("email")}
            className={`w-full border px-3 py-2 rounded-md md:text-primary text-white ${
              isMobile ? "bg-[#33335b]" : ""
            } ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {/* <button
                        type="button"
                        onClick={sendVerificationCode}
                        className={`absolute min-h-[41px] top-0 ${locale == "ar" ? "left-0" : "right-0"} bg-[#666684] text-white px-3 py-1 rounded-md text-xs`}
                    >
                        {otpLoading ? t("sending") : t("getCode")}
                    </button> */}
        </div>
        {formik.touched.email && formik.errors.email && (
          <p className="text-xs text-red-500">{formik.errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className={`text-sm ${color} mb-1`}>Enter WhatsApp Number</label>
        <div className="flex flex-col sm:flex-row gap-2">
          <PhoneInput
            international
            defaultCountry={
              countryData?.country_code || countryData?.country || "AE"
            }
            value={formik.values.phone}
            onChange={(phone) => formik.setFieldValue("phone", phone)}
            className={`flex-1 border px-3 md:text-primary text-white py-2 ${
              isMobile ? "bg-[#33335b]" : ""
            } rounded-md ${
              formik.touched.phone && formik.errors.phone
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          <button
            type="button"
            onClick={sendPhoneVerificationCode}
            disabled={phoneOtpLoading || !isPhoneValid}
            className="min-h-[41px] bg-[#B68756] whitespace-nowrap text-white px-4 py-2 rounded-md text-xs sm:text-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {phoneOtpLoading ? "Sending" : "Get Code"}
          </button>
        </div>
        {formik.touched.phone && formik.errors.phone && (
          <p className="text-xs text-red-500">{formik.errors.phone}</p>
        )}
      </div>

      {showOtp && (
        <div>
          <p className="text-sm mb-2 md:text-primary text-white">
            OTP has been sent to given Number
          </p>
          <div className=" flex gap-3 items-center">
            <OtpInput
              value={formik.values.otp}
              onChange={(otp) => {
                formik.setFieldValue("otp", otp);
                if (otp?.length == 6) {
                  verifyOtpCode(otp);
                }
              }}
              numInputs={6}
              containerStyle={{
                display: "flex",
                justifyContent: "space-between",
                gap: "3px",
              }}
              isInputNum
              renderInput={(props) => (
                <input
                  {...props}
                  type="tel" // Triggers number pad
                  inputMode="numeric" // Helps mobile keyboard detect numeric input
                  pattern="[0-9]*" // Optional: enforce numeric
                />
              )}
              inputStyle={{
                fontSize: "16px", // ✅ critical to stop iOS zoom
                borderRadius: "5px",
                paddingBottom: "10px",
                paddingTop: "10px",
                width: "15%",
                backgroundColor: "#fff",
                color: "#666684",
                fontWeight: "700",
                outlineColor: "#666684",
                border:
                  formik.touched.otp && formik.errors.otp
                    ? "1px solid red"
                    : "1px solid #666684",
              }}
            />
            {/* <button
                            type="button"
                            onClick={verifyOtpCode}
                            className=" bg-[#666684] text-white px-3 py-1 rounded-md text-sm"
                        >
                            {t("verifyCode")}
                        </button> */}
          </div>
        </div>
      )}

      {/* Country */}
      <div>
        <label className={`text-sm ${color} mb-1`}>{t("country")}</label>
        <Select
          name="country"
          options={options}
          styles={selectStyles}
          onChange={(opt, e) => {
            console.log({ opt, e });
            formik.setFieldValue("country", opt?.value);
          }}
          onBlur={() => formik.setFieldTouched("country", true)}
          value={options.find((opt) => opt.value === formik.values.country)}
        />
        {formik.touched.country && formik.errors.country && (
          <p className="text-xs text-red-500">{formik.errors.country}</p>
        )}
      </div>

      {/* Terms */}
      <div className="flex items gap-2">
        <input
          type="checkbox"
          id="terms"
          {...formik.getFieldProps("terms")}
          className="h-5 w-5"
        />
        <label htmlFor="terms" className="text-xs md:text-primary text-white ">
          By submitting your detailed information, you are agreeing to be
          contacted so that we can respond to your inquiries.
        </label>
      </div>
      {formik.touched.terms && formik.errors.terms && (
        <p className="text-xs text-red-500">{formik.errors.terms}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || !isOtpVerified}
        className={`w-full  ${
          isMobile ? "text-[#fff]" : "text-white"
        } py-3 rounded-full font-medium cursor-pointer text-sm disabled:opacity-50`}
        style={{
          background: isMobile ? "#3A72F5" : "#B68756",
        }}
      >
        {loading ? "Submitting.." : "Submit"}
      </button>
    </form>
  );
};

export default NewPageForm;
