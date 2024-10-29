import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CursorTrailCanvas from "../components/CursorTrailCanvas";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 z-10 h-full w-full" />
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  );
}
