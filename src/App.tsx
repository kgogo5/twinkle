/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import styled from "styled-components";

import Wave from "./images/wave.svg";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
  overflow: hidden;
`;

const TwinkleBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Twinkle = styled(motion.h1)`
  font-size: 5em;
  background: url("https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80");
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  text-shadow: 0 0 1.5em #00c4ff;
`;

const Button = styled(motion.button)`
  margin-top: 1em;
  display: block;
  width: 5em;
  height: 5em;
  font-size: 20px;
  border: 0;
  border-radius: 0;
  background-color: #015871;
`;

const Waves = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #015871;
  & > div {
    background-image: url(${Wave});
    background-repeat: repeat-x;
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 198px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
    & + div {
      top: -175px;
      animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
        swell 7s ease -1.25s infinite;
      opacity: 1;
    }
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }

  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }
`;

const App = () => {
  return (
    <Wrapper>
      <TwinkleBox>
        <Twinkle
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 10,
          }}
          // whileHover={{ scale: [1, 1.3, 1.2] }}
        >
          TWINKLE
        </Twinkle>

        <Button
          initial={{
            color: "#1c95b9",
            scale: 0.2,
            borderRadius: "100%",
          }}
          animate={{
            color: "#1c95b9",
            scale: 0.3,
            backgroundColor: "#1c95b9",
          }}
          whileHover={{
            marginTop: 30,
            color: "#fff",
            scale: 1.2,
            rotate: 0,
            backgroundColor: "#1c95b9",
          }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          ENTER
        </Button>
      </TwinkleBox>
      <Waves>
        <div></div>
        <div></div>
      </Waves>
    </Wrapper>
  );
};

export default App;
