import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CursorTrailCanvas from "../components/CursorTrailCanvas";
const ToastWrapper = () => {
  const { theme } = useTheme();

  return (
    <ToastContainer
      position="top-right"
      // autoClose={5000}
      hideProgressBar={true}
      closeOnClick
      pauseOnHover
      draggable
      theme={theme === "dark" ? "dark" : "light"} // Use theme from context
      // className={`${
      //   theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      // }`}
      toastClassName={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      } border rounded-lg p-4 shadow-md`}
    />
  );
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 z-10 h-full w-full" />
      <Component {...pageProps} />
      <ToastWrapper />
    </ThemeProvider>
  );
}
