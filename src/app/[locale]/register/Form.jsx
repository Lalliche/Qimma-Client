"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import GradientContainer from "./GradientContainer";
import Toast from "@/components/Toast";

// Input field component
const InputWithLabel = ({
  label,
  type = "text",
  value,
  onChange,
  valid = true,
  warning,
}) => {
  return (
    <div
      className="flex flex-col gap-[0.5em] w-full"
      style={{ fontFamily: "var(--font-subtitle)" }}
    >
      <label className="text-[#111020] text-[1em] font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`px-[1em] py-[0.5em] rounded-[0.75em] border-2 ${
          valid ? "border-[#A1D0EC]" : "border-red-400"
        } focus:outline-none`}
      />
      {!valid && <p className="text-[0.875em] text-red-500">{warning}</p>}
    </div>
  );
};

// Form content layout
const FormLayout = ({ t, formData, handleChange, handleSubmit, validity }) => {
  const Title = ({ className }) => {
    return (
      <div className={`flex flex-col gap-[0.5em] ${className} `}>
        <p className="text-[2em] font-semibold bg-gradient-to-b from-[#111020] to-[#1E3771] bg-clip-text text-transparent">
          {t("title")}
        </p>
        <p style={{ fontFamily: "var(--font-subtitle)" }}>{t("subtitle")}</p>
      </div>
    );
  };
  return (
    <div className="relative z-[1] p-[2em] flex sm:flex-row  flex-col-reverse gap-[2em] md:gap-[4em] justify-between items-center w-full">
      <div className="flex flex-col justify-center items-start gap-[4em]   flex-1 w-full sm:min-w-[40%]">
        <Title className="sm:!block !hidden " />

        <div className="flex flex-col w-full gap-[1.5em]">
          <InputWithLabel
            label={t("inputs.firstName")}
            value={formData.firstName}
            onChange={handleChange("firstName")}
            valid={validity.firstName}
            warning={t("warning")}
          />
          <InputWithLabel
            label={t("inputs.lastName")}
            value={formData.lastName}
            onChange={handleChange("lastName")}
            valid={validity.lastName}
            warning={t("warning")}
          />
          <InputWithLabel
            label={t("inputs.email")}
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            valid={validity.email}
            warning={t("warning")}
          />
          <InputWithLabel
            label={t("inputs.phoneNumber")}
            value={formData.phoneNumber}
            onChange={handleChange("phoneNumber")}
            valid={validity.phoneNumber}
            warning={t("warning")}
          />
        </div>
        <div className="w-full ">
          <Button
            text={t("cta")}
            onClick={handleSubmit}
            className="!w-fit md:!text-[1em] !text-[0.875em] "
          />
        </div>
      </div>

      <div className="relative  w-full  ">
        <GradientContainer />
      </div>
      <Title className="sm:!hidden !block " />
    </div>
  );
};

// Main form component
const Form = () => {
  const t = useTranslations("Register");

  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [validity, setValidity] = useState({
    firstName: true,
    lastName: true,
    email: true,
    phoneNumber: true,
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isValidPhone = /^0[2-3-4-5-6-7]\d{8}$/.test(formData.phoneNumber);

    const newValidity = {
      firstName: !!formData.firstName.trim(),
      lastName: !!formData.lastName.trim(),
      email: isValidEmail,
      phoneNumber: isValidPhone,
    };

    setValidity(newValidity);

    const isFormValid = Object.values(newValidity).every(Boolean);

    if (isFormValid) {
      console.log("✅ Form submitted:", formData);

      fetch("/api/register", {
        method: "POST",

        body: JSON.stringify(formData),
        mode: "no-cors",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("✅ Form submitted successfully");
          setShowToast(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
          });
        })
        .catch((err) => {
          console.error("❌ Submission error:", err);
          // You can show an error message here
        });
    }
  };

  return (
    <>
      {showToast && (
        <Toast
          message={t("successMessage")}
          onClose={() => setShowToast(false)}
        />
      )}
      <div
        className="relative w-full rounded-[1.5em] overflow-hidden"
        style={{
          boxShadow: "0px 0px 44px rgba(30, 55, 113, 0.07)",
        }}
      >
        <div
          className="absolute inset-0 z-[0] backdrop-blur-md"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(207,241,255,0.3) 100%)",
          }}
        />
        <FormLayout
          t={t}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          validity={validity}
        />
      </div>
    </>
  );
};

export default Form;
