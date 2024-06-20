import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between border-t-2 px-6 py-6 lg:px-12 lg:py-12">
      <h3 className="capitalize">all rights reserved</h3>
      <div className="flex gap-5 text-2xl">
        <Link
          href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
          legacyBehavior
          passHref
        >
          <a target="_blank" className="hover:text-blue-400">
            <BsGithub />
          </a>
        </Link>
        <Link
          href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
          legacyBehavior
          passHref
        >
          <a target="_blank" className="hover:text-blue-400">
            <BsLinkedin />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
