/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const fogStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(255,255,255,0.9), rgba(0,0,0,0.6));
  z-index: 9999;
  pointer-events: none;
  animation: ${fadeIn} 1.5s forwards;
`;

export const AnimatedFog = () => {
  const [show, setShow] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShow(true); 
    const timer = setTimeout(() => setShow(false), 1500); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return show ? <div css={fogStyle} /> : null;
};
