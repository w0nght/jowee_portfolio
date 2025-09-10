import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HashScroll() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    return null;
}


