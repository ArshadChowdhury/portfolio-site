"use client";

import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import PhoneInput from "react-phone-number-input";
import { request } from "../common/APIFunction";
import toast from "react-hot-toast";

import "react-phone-number-input/style.css";

const ContactForm = () => {
  const { register, handleSubmit, formState, reset, control } = useForm();
  const { errors } = formState;

  const onSubmit = (data: any) => {
    const myPromise = request
      .post("contact/portfolio", data)
      .then(() => reset())
      .catch((error: any) => {
        console.log(error.data);
      });

    return toast.promise(myPromise, {
      loading: "Sending message",
      success: "Message sent !!",
      error: "Message was not sent",
    });
  };

  return (
    <form
      className="mt-8 flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="flex flex-col">
        <input
          type="text"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "Your name is required",
            },
            maxLength: {
              value: 30,
              message: "Your name must not exceed 30 characters",
            },
          })}
          placeholder={"Enter your name"}
          className="w-full px-5 py-3 rounded-sm placeholder:font-montserrat text-lg custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-black dark:text-slate-100"
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p className="text-red-500">{message}</p>}
        />
      </div>
      <div className="flex flex-col">
        <input
          type="email"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i,
              message: "Invalid email address",
            },
            maxLength: {
              value: 50,
              message: "Your email must not exceed 50 characters",
            },
          })}
          placeholder={"Enter your Email adress"}
          className="w-full px-5 py-3 rounded-sm placeholder:font-montserrat text-lg custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-black dark:text-slate-100"
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p className="text-red-500">{message}</p>}
        />
      </div>
      <div className="flex flex-col">
        <Controller
          {...register("phone", {
            required: {
              value: true,
              message: "Phone number is required",
            },

            maxLength: {
              value: 30,
              message: "Phone number cannot be over 30 characters",
            },
          })}
          name="phone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              value={value}
              onChange={onChange}
              defaultCountry="BD"
              placeholder={"Enter your phone number"}
              className="my-phone-input bg-blue w-full px-5 py-3 rounded-sm placeholder:font-montserrat text-lg custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-black dark:text-slate-100"
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="phone"
          render={({ message }) => <p className="text-red-500">{message}</p>}
        />
      </div>

      <div className="flex flex-col">
        <textarea
          placeholder={"Enter your message here"}
          id="message"
          cols={30}
          rows={3}
          className="resize-none w-full px-5 py-3 rounded-sm placeholder:font-montserrat text-lg custom-shadow bg-white bg-opacity-10 placeholder:text-gray-400 outline-none text-black dark:text-slate-100"
          {...register("message", {
            required: {
              value: true,
              message: "Description is required",
            },
            maxLength: {
              value: 500,
              message: "Your message must not exceed 500 characters",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="message"
          render={({ message }) => <p className="text-red-500">{message}</p>}
        />
      </div>
      <button
        type="submit"
        className="w-full text-gray-900 dark:text-white rounded-sm py-2 font-montserrat uppercase bg-transparent dark:bg-blue-500 border border-sky-900"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
