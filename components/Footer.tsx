import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";


const Footer: React.FC = () => {
    return (
        <div className="flex justify-between border-t-2 px-6 py-6 lg:px-12 lg:py-12">
            <h3 className='capitalize'>all rights reserved</h3>
            <div className='flex gap-5 text-2xl'>
                <Link href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}>
                    <BsGithub/>
                </Link>
                <Link href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}>
                    <BsLinkedin/>
                </Link>
            </div>
        </div>
    );
}

export default Footer