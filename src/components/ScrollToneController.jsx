import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ScrollToneController() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.get();
    smoother?.scrollTo(0, false);
    if (!smoother) window.scrollTo(0, 0);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return undefined;

    let context;
    const frame = window.requestAnimationFrame(() => {
      context = gsap.context(() => {
        gsap.utils.toArray("[data-scroll-tone]").forEach((element) => {
          gsap.fromTo(
            element,
            { color: "#5e5e66" },
            {
              color: "#e8e6e1",
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                end: "top 58%",
                scrub: 0.6,
              },
            },
          );
        });
        ScrollTrigger.refresh();
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      context?.revert();
    };
  }, [pathname]);

  return null;
}
