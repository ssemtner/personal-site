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
    <div className="m-16">
      {status === "submitting" ? (
        <div className="text-center">
          <p className="text-2xl">Submitting...</p>
        </div>
      ) : status === "success" ? (
        <div className="text-center">
          <p className="text-2xl">Message Sent!</p>
        </div>
      ) : status === "failure" ? (
        <div className="text-center text-white">
          <h2 className="text-2xl">Something went wrong.</h2>
          <p className="text-xl">
            Try again later or email me directly at:{" "}
            <a href="mailto:scottsemtner@gmail.com" target="_blank" className="link-primary">
              scottsemtner@gmail.com
            </a>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-control">
          <input
            placeholder="Your Name"
            className="input input-bordered input-primary max-w-xs w-full join-item my-4"
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            placeholder="Your Email"
            className="input input-bordered input-primary max-w-xs w-full my-4"
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail({
                value: e.target.value,
                valid: e.target.validity.valid,
              });
            }}
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-primary my-4"
            name="message"
            id="message"
            cols={30}
            rows={10}
            onChange={(e) => {
              setMessage({
                value: e.target.value,
                valid: e.target.validity.valid,
              });
            }}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
