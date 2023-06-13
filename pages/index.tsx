import { useContext } from "react";
import { HookContext } from "@/context/HookContext";
import Hook from "@/components/Hook";
import Skills from "@/components/Skills";
import Link from "next/link";
import style from "@/styles/pages/Home.module.scss";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  let incrementalDelay = 0.7;
  const { isHookLoaded, setIsHookLoaded } = useContext(HookContext);

  const hookControl = () => {
    setIsHookLoaded(true);
  };

  const commonProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <>
      <Head>
        <title>stevenG</title>
      </Head>

      <section className={style.homeContainer}>
      {!isHookLoaded && (
            <button className={style.skipButton} onClick={() => hookControl()}>
              Skip 
            </button> /*need to work on positioning */
          )}
        <div className={style.initialHookContainer}>
          <Hook hookControl={hookControl} isHookLoaded={isHookLoaded} />
         
        </div>
        {isHookLoaded && (
          <motion.section
            {...commonProps}
            transition={{ duration: 1, delay: incrementalDelay }}
            className={style.myInfoContainer}
          >
            <div>
              <motion.p {...commonProps} transition={{ duration: 1 }}>
                Hello, my name is <strong>Steven Gibson</strong>, a React Front
                End Developer based in NYC. As an avid learner, I constantly
                stay updated with the latest industry trends. My current focus
                is on leveraging the power of React to craft inventive and
                scalable solutions that enhance user satisfaction. I am deeply
                committed to the continuous development and expansion of my
                skillset.
              </motion.p>
              <motion.div
                {...commonProps}
                transition={{ duration: 1, delay: (incrementalDelay += 0.5) }}
                className={style.buttonContainer}
              >
                <Link href="/projects">
                  <button className={style.linkButton}>
                    My Projects <FaArrowRight />
                  </button>
                </Link>
                <Link href="/about">
                  <button>
                    About Me <FaArrowRight />
                  </button>
                </Link>
              </motion.div>
            </div>
            <div>
              <motion.div
                {...commonProps}
                transition={{ duration: 1, delay: (incrementalDelay += 0.5) }}
                className={style.skillsContainer}
              >
                <Skills />
              </motion.div>
            </div>
          </motion.section>
        )}
      </section>
    </>
  );
}
