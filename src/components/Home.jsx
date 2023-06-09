import React, { useEffect, useState } from "react";
import propTypes from "prop-types";

export default function Home(props) {
  const [x, setX] = useState(props.x);
  const [y, setY] = useState(props.y);

  const boxWidth = window.innerWidth / 25;

  const boxes = [];

  for (let i = 0; i < 525; i++) {
    boxes.push(
      <div
        className="box"
        style={{ width: boxWidth, height: boxWidth }}
      ></div>
    );
  }

  let dots = (
    <>
      <div
        className="dot dot-1"
        style={{
          top: (y / window.innerHeight) + 25 + "%",
          left: (x / window.innerWidth )+ 25 + "%",
          transform: "translate(-25%, -25%)",
        }}
      >
        <div className="dottdiv"></div>
      </div>
      <div
        className="dot dot-2"
        style={{
          top: (y / window.innerHeight) + 20 + "%",
          left: (x / window.innerWidth )+ 80 + "%",
          transform: "translate(-80%, -30%)",
        }}
      >
        <div className="dottdiv"></div>
      </div>
      <div
        className="dot dot-3"
        style={{
          top: (y / window.innerHeight) + 65 + "%",
          left: (x / window.innerWidth )+ 40 + "%",
          transform: "translate(-65%, -40%)",
        }}
      >
        <div className="dottdiv"></div>
        <div className="dottdiv"></div>
      </div>
      <div
        className="dot dot-4"
        style={{
          top: (y / window.innerHeight) + 55 + "%",
          left: (x / window.innerWidth )+ 80 + "%",
          transform: "translate(-85%, -30%)",
        }}
      >
        <div className="dottdiv"></div>
      </div>
      <div
        className="dot dot-5"
        style={{
          top: (y / window.innerHeight) + 80 + "%",
          left: (x / window.innerWidth )+ 10 + "%",
          transform: "translate(-10%, -80%)",
        }}
      >
        <div className="dottdiv"></div>
      </div>
      <div
        className="dot dot-6"
        style={{
          top: (y / window.innerHeight) + 85 + "%",
          left: (x / window.innerWidth )+ 90 + "%",
          transform: "translate(-90%, -85%)",
        }}
      >
        <div className="dottdiv"></div>
        <div className="dottdiv"></div>
      </div>
    </>
  );

  useEffect(() => {
    setX(props.x);
    setY(props.y);
  }, [props]);

  return (
    <>
      <div className="main row">
        <div className="col-6">
          <h1>#> MAYANK KAPRI</h1>
        </div>
        <div className="col-6">
          <img src="/images/brand.jpg" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="roles">
            <div className="unit">
              <div className="number">001</div>
              <div className="role">Developer</div>
            </div>
            <div className="unit">
              <div className="number">002</div>
              <div className="role">Engineer</div>
            </div>
            <div className="unit">
              <div className="number">003</div>
              <div className="role">Musician</div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="description">
            MAYANK KAPRI IS A DEVELOPER, MUSICIAN, AND SOFTWARE ENGINEER
            CURRENTLY BASED IN KASHIPUR
          </div>
        </div>
      </div>
      <div className="location">
        <div className="note">WHERE ??</div>
        >> KASHIPUR, UTTARAKHAND >> AVAILABLE FOR FREELANCE
      </div>
      <div className="instruction">SCROLL TO BROWSE >></div>
      <div className="dots">{dots}</div>
      <div className="boxes">{boxes}</div>
    </>
  );
}
