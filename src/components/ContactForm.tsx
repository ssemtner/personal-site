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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-success"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-2xl">Message Sent!</p>
        </div>
      ) : status === "failure" ? (
        <div className="flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-error"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
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
        <form onSubmit={handleSubmit} className="form-control" autoComplete="off">
          <input
            placeholder="Your Name"
            className="input input-bordered input-primary bg-neutral-focus w-full join-item my-4"
            type="text"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            placeholder="Your Email"
            className="input input-bordered input-primary bg-neutral-focus w-full mb-4"
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
            className="textarea textarea-primary mb-4 bg-neutral-focus resize-none"
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
          <button className="btn w-full btn-primary" type="submit">
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
