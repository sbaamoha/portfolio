import * as emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "react-toastify";
const ContactUs = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.length || !email.length || !message.length) {
      toast.error("fill the data");
      return;
    }
    const template_params = {
      from_email: email,
      from_name: name,
      to_email: "sbaamohe@gmail.com",
      message: message,
    };
    const service_id = "service_z9e5g9f";
    const template_id = "template_qpqxue4";
    return emailjs
      .send(service_id, template_id, template_params, "eKMTuVxoTrFA8pNI9")
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        window.scrollTo(0, 0);
        toast.success("Email send successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("can't send email");
      });
  };
  return (
    <div className="w-[50%] m-auto my-6 md:flex flex-col md:justify-between gap-6 p-12 capitalize rounded-md shadow-md">
      <h2 className="uppercase text-4xl text-center pb-12">
        contact <p className="text-secondary-color inline">me</p>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-1 justify-start flex-col gap-1"
      >
        <label>name</label>
        <input
          type="text"
          value={name}
          required
          placeholder="Enter Your name"
          className="rounded-md p-2"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>email</label>
        <input
          type="email"
          value={email}
          required
          placeholder="Enter Your email"
          className="rounded-md p-2"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>message</label>
        <textarea
          placeholder="Enter Your message"
          className="rounded-md p-2"
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          disabled={name.length === 0 || email.length === 0}
          className="rounded-sm bg-secondary-color text-white capitalize py-2 mt-3"
        >
          send email
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
