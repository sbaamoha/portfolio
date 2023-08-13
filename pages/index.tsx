import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <div className="font-dm-sans bg-primary-color dark:bg-slate-800 dark:text-white">
      <Head>
        <title>Mohamed's Portfolio</title>
        <meta name="description" content="Mohamed's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="portfolio, web development, react , design, projects"
        />
        <meta property="og:title" content="Mohamed Sba - Portfolio" />
        <link rel="icon" href="/icon.jpg" />
        <meta property="og:image" content="URL_to_your_featured_image.jpg" />
        <meta
          property="og:description"
          content="A fullstack developer with experience building web apps."
        />
      </Head>

      <header className="z-10 bg-transparent sticky top-0 w-full">
        <Navbar />
      </header>

      <main className="flex flex-col gap-10 lg:gap-16">
        <Header />
        <About />
        <Portfolio />
        <ContactUs />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
