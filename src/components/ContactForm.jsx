import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    phoneNumber: "",
    businessName: "",
    businessMail: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.fullName.trim())
      newErrors.fullName = "Full name is required";
    if (!formValues.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formValues.businessName.trim())
      newErrors.businessName = "Business name is required";
    if (!formValues.businessMail.trim())
      newErrors.businessMail = "Business mail is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.businessMail))
      newErrors.businessMail = "Invalid email address";
    else if (phoneNumber.length != 10)
      newErrors.phoneNumber = "Invalid Phone Number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formValues);

      setFormValues({
        fullName: "",
        phoneNumber: "",
        businessName: "",
        businessMail: "",
      });
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 w-full max-w-2xl mb-8 mr-20 ml-20">
      <h2 className="text-lg font-bold mb-4 pr-20 mr-28">
        Leave your contacts and we will call you back within 30 minutes
      </h2>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <Label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full name
          </Label>
          <Input
            id="fullName"
            type="text"
            className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.fullName ? "border-red-500" : "focus:border-indigo-500"
            }`}
            placeholder="My Name"
            value={formValues.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>
        <div>
          <Label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone number
          </Label>
          <Input
            id="phoneNumber"
            type="text"
            className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.phoneNumber ? "border-red-500" : "focus:border-indigo-500"
            }`}
            placeholder="+91 0000000000"
            value={formValues.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
          )}
        </div>
        <div>
          <Label
            htmlFor="businessName"
            className="block text-sm font-medium text-gray-700"
          >
            Business name
          </Label>
          <Input
            id="businessName"
            type="text"
            className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.businessName ? "border-red-500" : "focus:border-indigo-500"
            }`}
            placeholder="ABC Technologies PVT LTD"
            value={formValues.businessName}
            onChange={handleChange}
          />
          {errors.businessName && (
            <p className="text-red-500 text-sm">{errors.businessName}</p>
          )}
        </div>
        <div>
          <Label
            htmlFor="businessMail"
            className="block text-sm font-medium text-gray-700"
          >
            Business mail
          </Label>
          <Input
            id="businessMail"
            type="email"
            className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.businessMail ? "border-red-500" : "focus:border-indigo-500"
            }`}
            placeholder="demoaccount@gmail.com"
            value={formValues.businessMail}
            onChange={handleChange}
          />
          {errors.businessMail && (
            <p className="text-red-500 text-sm">{errors.businessMail}</p>
          )}
        </div>
        <div className="sm:col-span-2 flex justify-end">
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Get consultation
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
