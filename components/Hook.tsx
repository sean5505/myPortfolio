// optimize in the future...

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

type Props = {
  hookControl: CallableFunction;
  isHookLoaded: boolean;
};
export default function Hook({ hookControl, isHookLoaded }: Props) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {!isHookLoaded ? (
          <div>
            <Typewriter
              options={{
                deleteSpeed: 1,
                delay: 25,
                cursor: " ",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome!<br/>")
                  .pauseFor(750)
                  .typeString("Are you looking for a <br/>")
                  .pauseFor(250)
                  .typeString("<strong>Front End Developer?</strong><br/>")
                  .pauseFor(500)
                  .typeString(
                    "or someone who can handle your janitor work?<br/>"
                  )
                  .pauseFor(500)
                  .deleteChars(44)
                  .pauseFor(500)
                  .typeString("You've come to the right place.")
                  .pauseFor(300)
                  .callFunction(() => {
                    hookControl();
                  })
                  .start();
              }}
            />
          </div>
        ) : (
          <div style={{ textAlign: "start" }}>
            <motion.h4
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Are you looking for a <br />
              <strong>
                Front End Developer? <br />
              </strong>
            </motion.h4>
          </div>
        )}
      </div>
    </>
  );
}
