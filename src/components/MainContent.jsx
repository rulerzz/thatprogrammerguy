import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./Home"; 

gsap.registerPlugin(ScrollTrigger);

export default function Main(props) {
  const [x, setX] = useState(window.innerWidth / 2);
  const [y, setY] = useState(window.innerHeight / 2);

  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;
    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
    });
  }, []);

  const createParallaxScrollEffect = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  return (
    <>
        <div className="panel-container" ref={panelsContainer}>
          <section id="panel-1" className="panel panel-1" onMouseMove={createParallaxScrollEffect} ref={(e) => createPanelsRefs(e, 1)}>
            <Home x={x} y={y} />
          </section>
          <section id="panel-2" className="panel panel-2" ref={(e) => createPanelsRefs(e, 2)}>
            TWO
          </section>
          <section id="panel-3" className="panel panel-3" ref={(e) => createPanelsRefs(e, 3)}>
            THREE
          </section>
          <section id="panel-4" className="panel panel-4" ref={(e) => createPanelsRefs(e, 4)}>
            FOUR
          </section>
          <section id="panel-5" className="panel panel-5" ref={(e) => createPanelsRefs(e, 5)}>
            FIVE
          </section>
          <section id="panel-6" className="panel panel-5" ref={(e) => createPanelsRefs(e, 5)}>
            SIX
          </section>
        </div>
    </>
  );
}
