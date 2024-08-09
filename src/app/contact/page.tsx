"use client";
import IconBox from "@/components/IconBox";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { z, ZodError } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Error 404: Name Not Found! Help us fix the glitch?")
    .max(
      100,
      "Woah!! Sorry, I didn't know a name could have more than 100 characters."
    ),
  email: z
    .string()
    .trim()
    .email("Please fix your email. Our carrier pigeon is confused!"),
  message: z.string().optional(),
});

interface CustomDivProps extends React.HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
  }

type FormErrors = {
  name?: any;
  email?: any;
  message?: any;
};

export default function Contact() {
  const successToast = () => toast.success("Message sent successfully.");
  const errorToast = () => toast.error("Message not delivered.");
  const initValues = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  useEffect(() => {
    console.log("Form Error data updated:", formErrors);
  }, [formErrors]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = contactSchema.safeParse(formData);
    console.log("result", result);

    if (!result.success) {
      console.log("Not success");

      setFormErrors(result.error.format());
      setIsSubmitting(false);
      return;
    } else {
      try {
        const res = await fetch(`/api/contact`, {
          method: "POST",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
        const sendMail = await res.json();

        if (res.status === 200) {
          successToast();
          setFormData(initValues);
        } else {
          errorToast();
        }
      } catch (err) {
        errorToast();
        console.error(err);
        return null;
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex flex-col ">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.98710530254!2d80.77769949830774!3d26.848902829067065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1722935563533!5m2!1sen!2sin"
          className="w-full min-h-72 filter grayscale invert contrast-[.8] rounded-2xl"
          loading="lazy"
        ></iframe>
      </div>
      <div className="py-7">
        <h2 className="font-bold text-primary-white text-2xl">Contact Form</h2>
        <form
          method="POST"
          className="md:grid md:grid-cols-2 flex flex-col gap-8 md:gap-6 py-4 justify-center text-primary-white"
        >
          <div className="flex flex-col">
            <input
              type="text"
              className={`px-4 py-3 bg-transparent border-2 border-separator rounded-xl ${
                formErrors?.name
                  ? "focus:outline-red-500"
                  : "focus:outline-primary-icon"
              } focus:outline-[0.2px]`}
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            {formErrors?.name && (
              <p className="text-red-500 text-sm mt-1 ml-2">
                {formErrors?.name._errors[0]}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              className={`px-4 py-3 bg-transparent border-2 border-separator rounded-xl ${
                formErrors?.email
                  ? "focus:outline-red-500"
                  : "focus:outline-primary-icon"
              }`}
              name="email"
              id="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            {formErrors?.email && (
              <p className="text-red-500 text-sm mt-1 ml-2">
                {formErrors?.email._errors[0]}
              </p>
            )}
          </div>
          <div className="flex flex-col  md:col-span-2">
            <textarea
              className={`px-4 py-3 bg-transparent border-2 border-separator rounded-xl ${
                formErrors?.message
                  ? "focus:outline-red-500"
                  : "focus:outline-primary-icon"
              } min-h-28`}
              name="message"
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            {formErrors?.message && (
              <p className="text-red-500 text-sm mt-1 ml-2">
                {formErrors?.message._errors[0]}
              </p>
            )}
          </div>
          <button
            type="submit"
            className={`md:w-[50%] text-primary-icon md:col-start-2  self-center md:place-self-end text-xl ${
              isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
            } `}
            onClick={(e) => handleSubmit(e)}
            disabled={isSubmitting}
          >
            <IconBox
              icon={faPaperPlane}
              text={"Send Message"}
              isDisabled={isSubmitting}
            />
          </button>
        </form>
      </div>
    </div>
  );
}
