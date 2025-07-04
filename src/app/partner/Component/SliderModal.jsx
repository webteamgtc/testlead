import { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";

const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    country: Yup.string().required("Required"),
});

const SliderModal = ({ isOpen, onClose }) => {
    const initialValues = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        country: "",
    };

    return (
        <div
            className={`fixed inset-0 z-[99] transition-all duration-700 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Sliding Panel */}
            <div
                className={`absolute top-0 right-0 h-full w-full bg-[#0F1035] text-white shadow-lg transition-transform duration-700 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className=" container flex-col mx-auto flex justify-center items-center h-full w-full">
                    <div className="flex justify-end w-full p-4">
                        <button className="text-white text-2xl cursor-pointer"
                            onClick={onClose}
                        >
                            <img src="/close.svg" alt="Close" className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <img src="/Logo.svg" alt="GTC Logo" className="mx-auto w-32 md:w-44 py-2 pt-3" />

                        <h2 className="text-center text-3xl font-medium mb-8 mt-4">Register Now</h2>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={RegisterSchema}
                            onSubmit={(values) => {
                                console.log("Submitted Values:", values);
                            }}
                        >
                            {({ values, touched, errors, setFieldValue }) => (
                                <Form className="flex flex-col gap-5">
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label
                                                htmlFor="firstName"
                                                className="block mb-1 text-sm text-gray-300"
                                            >
                                                First Name
                                            </label>
                                            <Field
                                                name="firstName"
                                                id="firstName"
                                                className={`w-full rounded-md px-4 py-2 placeholder-gray-300 bg-transparent border ${values.firstName
                                                        ? "border-white text-white"
                                                        : "border-gray-500 text-gray-300"
                                                    }`}
                                                placeholder="First Name (e.g., Ashok)"
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <label
                                                htmlFor="lastName"
                                                className="block mb-1 text-sm text-gray-300"
                                            >
                                                Last Name
                                            </label>
                                            <Field
                                                name="lastName"
                                                id="lastName"
                                                className={`w-full rounded-md px-4 py-2 placeholder-gray-300 bg-transparent border ${values.lastName
                                                        ? "border-white text-white"
                                                        : "border-gray-500 text-gray-300"
                                                    }`}
                                                placeholder="Last Name (e.g., Kumar)"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block mb-1 text-sm text-gray-300">
                                            Mobile Number
                                        </label>
                                        <div className="flex items-center">
                                            <div className="w-full relative react-phone-container">
                                                <PhoneInput
                                                    international
                                                    defaultCountry="IN"
                                                    name="phone"
                                                    id="phone"
                                                    value={values.phone}
                                                    onChange={(value) => setFieldValue("phone", value)}
                                                    className="custom-phone-input"
                                                />
                                            </div>
                                        </div>
                                        {touched.phone && errors.phone && (
                                            <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                                        )}
                                    </div>

                                    {/* <div>
        <label
          htmlFor="phone"
          className="block mb-1 text-sm text-gray-300"
        >
          Mobile Number
        </label>
        <div className="flex gap-2 items-center">
          <div className="flex items-center px-4 py-2 border border-gray-500 rounded-md bg-transparent">
            🇮🇳 +91
          </div>
          <Field
            name="phone"
            id="phone"
            className={`flex-1 rounded-md px-4 py-2 placeholder-gray-300 bg-transparent border ${
              values.phone
                ? "border-white text-white"
                : "border-gray-500 text-gray-300"
            }`}
            placeholder="98765 43210"
          />
        </div>
      </div> */}

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-1 text-sm text-gray-300"
                                        >
                                            Email
                                        </label>
                                        <Field
                                            name="email"
                                            id="email"
                                            className={`w-full rounded-md px-4 py-2 placeholder-gray-300 bg-transparent border ${values.email
                                                    ? "border-white text-white"
                                                    : "border-gray-500 text-gray-300"
                                                }`}
                                            placeholder="example@mail.com"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="country"
                                            className="block mb-1 text-sm text-gray-300"
                                        >
                                            Country of Residence
                                        </label>
                                        <Field
                                            as="select"
                                            name="country"
                                            id="country"
                                            className={`w-full rounded-md px-4 py-2 bg-transparent border ${values.country
                                                    ? "border-white text-white"
                                                    : "border-gray-500 text-gray-300"
                                                }`}
                                        >
                                            <option value="" disabled>
                                                Select Country
                                            </option>
                                            <option value="India">India</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="UAE">UAE</option>
                                        </Field>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-white mt-4 text-black rounded-md py-3 w-full text-center hover:bg-gray-200 transition"
                                    >
                                        Get 80% RevShare →
                                    </button>
                                </Form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderModal;
