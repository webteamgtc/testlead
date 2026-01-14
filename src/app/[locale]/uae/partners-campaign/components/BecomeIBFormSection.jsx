"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import { toast } from "react-toastify";
import { countryList } from "../../../context/useCountriesDetails";
import { useLocationDetail } from "../../../context/useLocationDetail";
import NaqdiIbOnboardingForm from "./HeroForm";

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

export default function BecomeIBFormSection() {
  const { countryData } = useLocationDetail();
  const [loading, setLoading] = useState(false);

  const options = countryList?.map((item) => ({
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

  const hearAboutOptions = [
    { value: "google", label: "Google" },
    { value: "facebook", label: "Facebook" },
    { value: "instagram", label: "Instagram" },
    { value: "referral", label: "Referral" },
    { value: "other", label: "Other" },
  ];

  const formik = useFormik({
    initialValues: {
      iAm: "",
      iWantToBecome: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      countryOfResidence: "",
      hearAbout: "",
      message: "",
      marketing: false,
      terms: false,
    },
    validationSchema: Yup.object({
      iAm: Yup.string().required("Please select an option"),
      iWantToBecome: Yup.string().required("Please select an option"),
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      countryOfResidence: Yup.string().required("Country is required"),
      hearAbout: Yup.string().required("Please select how you heard about us"),
      terms: Yup.bool().oneOf([true], "You must accept the terms"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // Send to Zapier
        await axios.post(
          "https://hooks.zapier.com/hooks/catch/16420445/uwaumm0/",
          values
        );
        toast.success("Application submitted successfully!");
        formik.resetForm();
      } catch (error) {
        console.error("Form submission error:", error);
        toast.error("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section className="w-full bg-gradient-to-t from-slate-50 via-gray-50 to-white pt-5 md:pb-20 pb-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <NaqdiIbOnboardingForm isIb={true}/>
      </div>
    </section>
  );
}
