/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
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
            color: "#fff",
            scale: 0.2,
            rotate: 90,
          }}
          whileHover={{ color: "#000", scale: 1.2, rotate: 0 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          ENTER
        </Button>
      </TwinkleBox>
    </Wrapper>
  );
};

export default App;
