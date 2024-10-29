// Import GSAP for smooth animations
import { useEffect } from "react";
import { gsap } from "gsap";

// Cursor Component
const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const moveCursor = (e: any) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    // Add mousemove event listener to the document
    document.addEventListener("mousemove", moveCursor);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;
