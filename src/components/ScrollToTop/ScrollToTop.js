import { BiUpArrow } from "react-icons/bi";
import { useState, useEffect } from "react";

import "./ScrollToTop.css";

const ScrollToTop = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="goToTop">
            {showBtn && (<BiUpArrow className="to-top" onClick={goToTop} />)}
        </div>
    );
}

export default ScrollToTop;