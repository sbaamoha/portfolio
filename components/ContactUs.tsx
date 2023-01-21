import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import * as emailjs from "emailjs-com";
import { useState } from "react";
const ContactUs = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const template_params = {
      to_email: email,
      from_name: name,
      message: message,
    };
    const service_id = "service_z9e5g9f";
    const template_id = "template_qpqxue4";
    emailjs
      .send(service_id, template_id, template_params, "eKMTuVxoTrFA8pNI9")
      .then((res) => console.log(res));
  };
  return (
    <div className="md:flex flex-col md:justify-between gap-6 p-12 capitalize rounded-md shadow-md">
      <h2 className="uppercase text-4xl text-center pb-12">
        contact <p className="text-secondary-color inline">me</p>
      </h2>
      {/* <div className="hidden md:flex flex-1 bg-secondary-color text-white p-6 rounded-sm">
        <h2 className="text-2xl text-center md:text-start mb-6">about me</h2>
        <p className="my-2">phone : +213664512005</p>
        <p>country : Algeria</p>
        <div className="flex justify-end mt-6 gap-2 text-lg ">
          <Link href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}>
            <BsGithub />
          </Link>
          <Link href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}>
            <BsLinkedin />
          </Link>
        </div>
      </div> */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-1 justify-start flex-col gap-1"
      >
        <label>name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your name"
          className="rounded-md p-2"
          onChange={(e) => setName(e.target.value)}
        />
        <label>email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your email"
          className="rounded-md p-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>message</label>
        <textarea
          placeholder="Enter Your message"
          className="rounded-md p-2"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-sm bg-secondary-color text-white capitalize py-2 mt-3"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
