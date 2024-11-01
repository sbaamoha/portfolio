import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className="font-dm-sans overflow-hidden bg-primary-color dark:bg-slate-800 dark:text-white">
      <Head>
        <title>Mohamed&apos;s Portfolio</title>
        <meta name="description" content="Mohamed's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="portfolio, web development, react , design, projects"
        />
        <meta property="og:title" content="Mohamed Sba - Portfolio" />
        <link rel="icon" href="/bag.png" />

        <meta
          property="og:description"
          content="A Software developer with experience building web apps."
        />
        <meta
          name="google-site-verification"
          content="ietZuXf8j4Yw1TtotYWAT7hv9ooHl_jIaWshp8ebPC8"
        />
      </Head>

      <header className="z-10 bg-transparent sticky top-0 w-full px-3">
        <Navbar />
      </header>

      <main className="flex flex-col gap-10 lg:gap-16">
        <Header />
        {/* <About /> */}
        <Experience />
        <Portfolio />
        <ContactUs />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
