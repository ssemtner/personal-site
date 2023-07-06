import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<
    "submitting" | "success" | "failure" | "start"
  >("start");

  const [name, setName] = useState<string>("");

  const [email, setEmail] = useState<{ value: string; valid: boolean }>({
    value: "",
    valid: false,
  });

  const [message, setMessage] = useState<{ value: string; valid: boolean }>({
    value: "",
    valid: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (!email.valid || !message.valid) {
    //   return;
    // }

    setStatus("submitting");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email.value,
        message: message.value,
      }),
    });

    if (res.status === 200) {
      setStatus("success");

      setName("");
      setEmail({ value: "", valid: false });
      setMessage({ value: "", valid: false });
    } else {
      setStatus("failure");
    }

    return;
  };

  return (
    <div className="text-neutral-content">
      {status === "submitting" ? (
        <div className="text-center">
          <span className="loading loading-dots loading-lg text-primary"></span>
          <p className="text-2xl">Submitting...</p>
        </div>
      ) : status === "success" ? (
        <div className="flex flex-col items-center gap-2">
          <CheckCircleIcon className="h-12 w-12 text-success" />
          <p className="text-2xl">Message Sent!</p>
        </div>
      ) : status === "failure" ? (
        <div className="flex flex-col items-center gap-2">
          <XCircleIcon className="h-12 w-12 text-error" />
          <h2 className="text-2xl">Something went wrong.</h2>
          <p className="text-xl">
            Try again later or email me directly at:{" "}
            <a
              href="mailto:scottsemtner@gmail.com"
              target="_blank"
              className="link"
            >
              scottsemtner@gmail.com
            </a>
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="form-control"
          autoComplete="off"
        >
          <input
            placeholder="Your Name"
            className="input-bordered input-primary input join-item my-4 w-full bg-neutral-focus"
            type="text"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            placeholder="Your Email"
            className="input-bordered input-primary input mb-4 w-full bg-neutral-focus"
            type="email"
            required
            onChange={(e) => {
              setEmail({
                value: e.target.value,
                valid: e.target.validity.valid,
              });
            }}
          />
          <textarea
            placeholder="Your Message"
            className="textarea-primary textarea mb-4 resize-none bg-neutral-focus"
            cols={30}
            rows={10}
            required
            onChange={(e) => {
              setMessage({
                value: e.target.value,
                valid: e.target.validity.valid,
              });
            }}
          ></textarea>
          <button className="btn-primary btn w-full" type="submit">
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
