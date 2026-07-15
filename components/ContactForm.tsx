"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import PhoneInput from "react-phone-number-input";
import { request } from "../common/APIFunction";
import toast from "react-hot-toast";

import "react-phone-number-input/style.css";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const inputStyles =
  "w-full rounded-md border border-slate-200 bg-white/80 px-4 py-3 text-base text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500";

const labelStyles = "mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    const myPromise = request.post("contact/portfolio", data).then(() => reset());

    return toast.promise(myPromise, {
      loading: "Sending message",
      success: "Message sent",
      error: "Message was not sent",
    });
  };

  return (
    <form
      className="mt-8 flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="flex flex-col">
        <label className={labelStyles} htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          autoComplete="name"
          {...register("name", {
            required: "Your name is required",
            maxLength: {
              value: 30,
              message: "Your name must not exceed 30 characters",
            },
          })}
          placeholder="Enter your name"
          className={inputStyles}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => (
            <p className="mt-1 text-sm text-red-600">{message}</p>
          )}
        />
      </div>
      <div className="flex flex-col">
        <label className={labelStyles} htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          autoComplete="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i,
              message: "Invalid email address",
            },
            maxLength: {
              value: 50,
              message: "Your email must not exceed 50 characters",
            },
          })}
          placeholder="Enter your email address"
          className={inputStyles}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <p className="mt-1 text-sm text-red-600">{message}</p>
          )}
        />
      </div>
      <div className="flex flex-col">
        <label className={labelStyles} htmlFor="phone">
          Phone
        </label>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Phone number is required",
            maxLength: {
              value: 30,
              message: "Phone number cannot be over 30 characters",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              id="phone"
              value={value}
              onChange={(phoneValue) => onChange(phoneValue || "")}
              defaultCountry="BD"
              placeholder="Enter your phone number"
              className={inputStyles}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="phone"
          render={({ message }) => (
            <p className="mt-1 text-sm text-red-600">{message}</p>
          )}
        />
      </div>

      <div className="flex flex-col">
        <label className={labelStyles} htmlFor="message">
          Project details
        </label>
        <textarea
          placeholder="Tell me about your AI MVP, web app, or product idea"
          id="message"
          rows={4}
          className={`${inputStyles} resize-none`}
          {...register("message", {
            required: "Project details are required",
            maxLength: {
              value: 500,
              message: "Your message must not exceed 500 characters",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="message"
          render={({ message }) => (
            <p className="mt-1 text-sm text-red-600">{message}</p>
          )}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-sky-600 py-3 font-semibold uppercase tracking-wide text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
