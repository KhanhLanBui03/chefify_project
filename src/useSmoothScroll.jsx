import { useEffect } from "react";

function useSmoothScroll() {
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      window.scrollTo({
        top: window.scrollY + event.deltaY,
        behavior: "smooth", // Kích hoạt hiệu ứng cuộn mượt
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
}

export default useSmoothScroll;
