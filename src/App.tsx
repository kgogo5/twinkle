import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

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
`;

const Twinkle = styled(motion.h1)`
  font-size: 5em;
`;

function App() {
  return (
    <Wrapper>
      <TwinkleBox>
        <Twinkle
          animate={{
            scale: [1.2, 1],
            rotate: [-5, 0],
          }}
          transition={{
            ease: "spring",
            stiffness: 700,
            damping: 30,
            duration: 0.5,
          }}
          whileHover={{ scale: [1, 1.3, 1.2] }}
        >
          TWINKLE
        </Twinkle>
      </TwinkleBox>
    </Wrapper>
  );
}

export default App;
