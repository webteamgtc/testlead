"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import { countryList } from "../../context/useCountriesDetails";
import { useLocationDetail } from "../../context/useLocationDetail";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Select from "react-select";
import { useTranslations, useLocale } from "next-intl";

const InvestingForm = ({ zapierUrl, successPath, page = "" }) => {
    const { countryData } = useLocationDetail();
    const [otpLoading, setOtpLoading] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [storedOtp, setStoredOtp] = useState("");
    const [isDisable, setIsDisable] = useState(true);
    const [showPwd, setShowPwd] = useState(false);
    const [showConfirmPwd, setShowConfirmPwd] = useState(false);
    const router = useRouter();
    const isPartnerPage =
        typeof window !== "undefined" && window.location?.pathname?.includes("partner");

    const t = useTranslations("partner.form");
    const locale = useLocale();

    const options = countryList.map((item) => ({
        value: item.en_short_name,
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

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        formik.setFieldValue("utm_source", params.get("utm_source") || "");
        formik.setFieldValue("utm_medium", params.get("utm_medium") || "");
        formik.setFieldValue("utm_campaign", params.get("utm_campaign") || "");
        formik.setFieldValue("utm_id", params.get("utm_id") || "");
        formik.setFieldValue("utm_term", params.get("utm_term") || "");
        formik.setFieldValue("utm_content", params.get("utm_content") || "");
        formik.setFieldValue("fbclid", params.get("fbclid") || "");
        formik.setFieldValue("gclid", params.get("gclid") || "");
    }, []);

    useEffect(() => {
        if (countryData?.country) {
            const filterData = countryList.find(
                (item) => item?.alpha_2_code == countryData.country
            );
            formik.setFieldValue("country", filterData ? filterData?.en_short_name : "");
        }
    }, [countryData?.country]);

    const sendVerificationCode = () => {
        setOtpLoading(true);
        axios
            .post(`/api/trade-otp`, {
                email: formik?.values?.email,
                first_name: formik?.values?.nickname,
                type: "0",
                locale: locale,
            })
            .then((res) => {
                if (res?.data?.message) {
                    setShowOtp(true);
                    setStoredOtp(res?.data?.message?.slice(4, -3));
                    toast.success(t("otpSent"));
                } else {
                    toast.error(res?.data?.message);
                    setShowOtp(false);
                }
            })
            .catch(() => setShowOtp(false))
            .finally(() => setOtpLoading(false));
    };

    const generatePassword = (length = 12) => {
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    };

    const sendDataToDb = async (data) => {
        axios
            .post(
                `/api/trade-gold`,
                JSON.stringify({ ...data, locale: locale, isPartnerPage: isPartnerPage })
            )
            .then(() => {
                toast.success(t("thankYou1"));
                formik.resetForm();
                setLoading(false);
                localStorage.setItem("user", JSON.stringify(data));
                const targetLocale = locale === "ar" ? `/ar${successPath}` : successPath;
                router.push(targetLocale);
                setShowOtp(false);
            })
            .catch((err) => {
                toast.error("Error inserting data: " + (err?.response?.data?.error || "Unknown"));
                setLoading(false);
            })
            .finally(() => setLoading(false));
    };

    const sendDataPostBack = async (data) => {
        setLoading(true);
        try {
            const res = await fetch("/api/investing-postback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nickname: data?.nickname }),
            });
            if (!res.ok) throw new Error(await res.text());

            toast.success(t("thankYou1"));
            formik.resetForm();
            localStorage.setItem("user", JSON.stringify(data));
            const targetLocale = locale === "ar" ? `/ar${successPath}` : successPath;
            router.push(targetLocale);
            setShowOtp(false);
        } catch (err) {
            toast.error("Error inserting data: " + (err?.message || "Unknown error"));
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: generatePassword(),
            confirm_password: "",
            country: "",
            otp: "",
            terms: false,
            utm_source: "",
            utm_medium: "",
            utm_campaign: "",
            utm_id: "",
            utm_term: "",
            utm_content: "",
            fbclid: "",
            gclid: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email(t("errors.emailInvalid")).required(t("errors.emailRequired")),
            country: Yup.string().required(t("errors.countryRequired")),
            otp: Yup.string().length(6, t("errors.otpLength")).required(t("errors.otpRequired")),
            // 🔐 Password rules
            password: Yup.string()
                .min(8, t("errors.passwordMin") || "Password must be at least 8 characters")
                .required(t("errors.passwordRequired") || "Password is required"),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password")], t("errors.passwordsMustMatch") || "Passwords must match")
                .required(t("errors.confirmPasswordRequired") || "Confirm your password"),
            terms: Yup.bool().oneOf([true], t("errors.termsRequired")),
        }),
        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.post(zapierUrl, JSON.stringify(values));
            } catch (_e) {
                /* ignore */
            } finally {
                if (page === "investing") {
                    sendDataPostBack(values);
                } else {
                    sendDataToDb(values);
                }
            }
        },
    });

    const verifyOtpCode = async () => {
        if (formik.values.otp == storedOtp) {
            toast.success(t("otpSuccess"));
            setShowOtp(false);
            setIsDisable(false);
        } else {
            toast.error(t("otpFail"));
        }
    };

    return (
        <div className="relative max-w-xl mx-auto">
            <form
                onSubmit={formik.handleSubmit}
                className="relative text-sm rounded-3xl md:p-0 mx-auto form-setting ltr:text-left rtl:text-right text-white"
            >
                {/* Hidden UTM fields */}
                <input type="hidden" name="utm_source" value={formik.values.utm_source} />
                <input type="hidden" name="utm_medium" value={formik.values.utm_medium} />
                <input type="hidden" name="utm_campaign" value={formik.values.utm_campaign} />
                <input type="hidden" name="utm_id" value={formik.values.utm_id} />
                <input type="hidden" name="utm_term" value={formik.values.utm_term} />
                <input type="hidden" name="utm_content" value={formik.values.utm_content} />
                <input type="hidden" name="fbclid" value={formik.values.fbclid} />
                <input type="hidden" name="gclid" value={formik.values.gclid} />

                {/* Email + OTP */}
                <div className="grid grid-cols-1 gap-3 mb-3">
                    <div className="relative">
                        <div className="text-sm mb-2">
                            <label>{t("email")}</label>
                        </div>
                        <input
                            type="email"
                            className={`w-full bg-[#1A1A47] px-4 py-3 pl-3 text-base border-[.5px] border-[#ccccd679] rounded-md border-opacity-30 ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-[#ffffff1a]"
                                } focus:outline-none focus:bg-none`}
                            {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 pt-1 ltr:text-left rtl:text-right">{formik.errors.email}</p>
                        )}
                        <div
                            className="absolute top-9 bg-primary ltr:right-3 rtl:left-3 rounded-md cursor-pointer text-white py-1.5 px-2"
                            onClick={sendVerificationCode}
                        >
                            {otpLoading ? t("sending") : t("getCode")}
                        </div>

                        {showOtp && (
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                    <p className="my-2 ltr:text-left rtl:text-right pt-1">{t("otp")}</p>
                                    <OtpInput
                                        value={formik.values.otp}
                                        onChange={(otp) => formik.setFieldValue("otp", otp)}
                                        numInputs={6}
                                        containerStyle={{ justifyContent: "space-around", alignItems: "center", gap: "10px" }}
                                        renderInput={(props) => (
                                            <input {...props} type="tel" inputMode="numeric" pattern="[0-9]*" />
                                        )}
                                        isInputNum
                                        inputStyle={{
                                            fontSize: "16px",
                                            borderRadius: "5px",
                                            paddingBottom: "10px",
                                            paddingTop: "10px",
                                            width: "20%",
                                            backgroundColor: "#1A1A47",
                                            color: "#fff",
                                            fontWeight: "700",
                                            outlineColor: "#f9c617",
                                            border: formik.touched.otp && formik.errors.otp ? "1px solid red" : "1px solid #ffffff1a",
                                        }}
                                    />
                                    {formik.touched.otp && formik.errors.otp && (
                                        <p className="text-red-500 text-sm mt-2">{formik.errors.otp}</p>
                                    )}
                                </div>
                                <div
                                    className="bg-primary right-0 rounded-md cursor-pointer text-white py-2 px-2 text-center mt-2 border border-[#ffffff1a]"
                                    onClick={verifyOtpCode}
                                >
                                    {t("verifyCode")}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Country */}
                <div className="relative mb-3">
                    <div className="text-sm mb-2">
                        <label>{t("country")}</label>
                    </div>
                    <Select
                        name="country"
                        options={options}
                        classNamePrefix="react-select"
                        onChange={(opt) => formik.setFieldValue("country", opt?.value)}
                        onBlur={() => formik.setFieldTouched("country", true)}
                        value={options.find((opt) => opt.value === formik.values.country)}
                        className="text-white cpountry"
                        styles={{
                            control: (base) => ({
                                ...base,
                                backgroundColor: "#1A1A47",
                                borderColor:
                                    formik.touched.country && formik.errors.country ? "red" : "#ccccd679",
                                color: "white",
                            }),
                            singleValue: (base) => ({ ...base, color: "white" }),
                            menu: (base) => ({ ...base, backgroundColor: "#1A1A47", color: "white" }),
                            option: (base, state) => ({
                                ...base,
                                backgroundColor: state.isFocused ? "#b68756" : "#1A1A47",
                                color: state.isFocused ? "#fff" : "white",
                                cursor: "pointer",
                            }),
                        }}
                    />
                    {formik.touched.country && formik.errors.country && (
                        <p className="text-red-500 text-sm">{formik.errors.country}</p>
                    )}
                </div>

                {/* 🔐 Password + Confirm Password */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-3 mb-3">
                    {/* Password */}
                    <div className="relative">
                        <div className="text-sm mb-2">
                            <label>{t("password") || "Password"}</label>
                        </div>
                        <div className="relative">
                            <input
                                type={showPwd ? "text" : "password"}
                                autoComplete="new-password"
                                className={`w-full px-4 bg-[#1A1A47] py-3 pl-3 pr-12 text-base border-[.5px] rounded-md border-opacity-10 ${formik.touched.password && formik.errors.password
                                    ? "border-red-500"
                                    : " border-[#ffffff1a]"
                                    } focus:outline-none`}
                                {...formik.getFieldProps("password")}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPwd((v) => !v)}
                                className="absolute inset-y-0 right-3 my-auto h-8 w-8 grid place-items-center rounded-md hover:bg-white/10"
                                aria-label={showPwd ? "Hide password" : "Show password"}
                            >
                                {showPwd ? (
                                    // eye-off
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 3l18 18" stroke="#fff" strokeWidth="2" />
                                        <path d="M10.6 10.6a3 3 0 104.24 4.24" stroke="#fff" strokeWidth="2" />
                                        <path d="M9.88 5.09A9.84 9.84 0 0121 12c-1.8 3.5-5.4 6-9.6 6-1.1 0-2.2-.17-3.2-.5" stroke="#fff" strokeWidth="2" />
                                        <path d="M6.3 6.3A9.84 9.84 0 003 12c1.8 3.5 5.4 6 9.6 6 .7 0 1.3-.05 1.9-.16" stroke="#fff" strokeWidth="2" />
                                    </svg>
                                ) : (
                                    // eye
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="#fff" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="2" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 pt-1 ltr:text-left rtl:text-right">{formik.errors.password}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <div className="text-sm mb-2">
                            <label>{t("confirmPassword") || "Confirm Password"}</label>
                        </div>
                        <div className="relative">
                            <input
                                type={showConfirmPwd ? "text" : "password"}
                                autoComplete="new-password"
                                className={`w-full px-4 bg-[#1A1A47] py-3 pl-3 pr-12 text-base border-[.5px] rounded-md border-opacity-10 ${formik.touched.confirm_password && formik.errors.confirm_password
                                    ? "border-red-500"
                                    : " border-[#ffffff1a]"
                                    } focus:outline-none`}
                                {...formik.getFieldProps("confirm_password")}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPwd((v) => !v)}
                                className="absolute inset-y-0 right-3 my-auto h-8 w-8 grid place-items-center rounded-md hover:bg-white/10"
                                aria-label={showConfirmPwd ? "Hide password" : "Show password"}
                            >
                                {showConfirmPwd ? (
                                    // eye-off
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 3l18 18" stroke="#fff" strokeWidth="2" />
                                        <path d="M10.6 10.6a3 3 0 104.24 4.24" stroke="#fff" strokeWidth="2" />
                                        <path d="M9.88 5.09A9.84 9.84 0 0121 12c-1.8 3.5-5.4 6-9.6 6-1.1 0-2.2-.17-3.2-.5" stroke="#fff" strokeWidth="2" />
                                        <path d="M6.3 6.3A9.84 9.84 0 003 12c1.8 3.5 5.4 6 9.6 6 .7 0 1.3-.05 1.9-.16" stroke="#fff" strokeWidth="2" />
                                    </svg>
                                ) : (
                                    // eye
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="#fff" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="2" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {formik.touched.confirm_password && formik.errors.confirm_password && (
                            <p className="text-red-500 pt-1 ltr:text-left rtl:text-right">
                                {formik.errors.confirm_password}
                            </p>
                        )}
                    </div>
                </div>

                {/* Terms */}
                <div className="mb-5">
                    <label
                        className={`block text-sm pb-2 ${formik.touched.terms && formik.errors.terms ? "text-red-500" : ""
                            }`}
                        htmlFor="terms"
                    >
                        {formik.touched.terms && formik.errors.terms ? formik.errors.terms : t("termsLabel")}
                    </label>
                    <div className="flex items-start gap-1">
                        <input
                            type="checkbox"
                            name="terms"
                            id="terms"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value="checked"
                            className="h-5 w-5"
                        />
                        <p className="inline text-xs md:text-[13px] leading-normal">
                            {t("termsText")}
                            <a
                                className="text-secondary underline"
                                href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("clientAgreement")}
                            </a>{" "}
                            & the{" "}
                            <a
                                href={
                                    {
                                        ar: "/ar/privacy-policy",
                                        ru: "/ru/privacy-policy",
                                        cn: "/cn/privacy-policy",
                                        vi: "/vi/privacy-policy",
                                        es: "/es/privacy-policy",
                                        pt: "/pt/privacy-policy",
                                    }[locale] || "/privacy-policy"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary underline ml-1"
                            >
                                {t("privacyPolicy")}
                            </a>
                            , {t("conset")}.
                        </p>
                    </div>
                </div>

                {/* Submit */}
                <div className="text-center">
                    <button
                        disabled={isDisable}
                        type="submit"
                        className="bg-secondary cursor-pointer mb-10 text-white w-full font-bold py-4 px-8 rounded-md border border-[#ffffff1a]"
                    >
                        {loading ? t("submitting") : t("submit")}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InvestingForm;
