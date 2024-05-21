import AboutSection from "@/components/AboutSection/AboutSection";
import siteImg from "@/public/assets/siteImage.png";
import brain from "@/public/assets/brainExplosion.png";
import Certificate from "@/public/assets/edu.gif";
import style from "./About.module.scss";
import Skills from "@/components/Skills/Skills";
import Link from "next/link";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className={style.container}>
        {" "}
        {/* */}
        <AboutSection imgSrc={siteImg}>
          <h2>Steven Gibson</h2>
          <p>
            <strong>Front-End Developer</strong> based in NYC. Currently, my
            focus is on building dynamic applications that are, not only
            visually appealing, but provides exceptional user experience.
          </p>
        </AboutSection>
        <AboutSection imgSrc={brain}>
          <h2 className={style.sectionHead}>Skills and Experience</h2>
          <p>
            I&apos;ve been focusing on the field of Front-End Development for
            over a year now. It started as a hobby, but nowadays I&apos;m
            focused on turning my ideas into fully functional projects. Feel
            free to check out what I&apos;ve been working on!
            <br />
          </p>
          <Link href="/projects">
            <button>
              PROJECTS <FaArrowRight />
            </button>
          </Link>
          <Skills />
        </AboutSection>
        <AboutSection imgSrc={Certificate}>
          <h2 className={style.sectionHead}>Education</h2>
          <div>
            <h3>
              <a href="/files/META_certificate.pdf" target="_blank">
                Meta Front End Development
              </a>
            </h3>
            <ul>
              <li className={style.list}>
                {" "}
                {/* ew */}
                Through the comprehensive course, I gained a strong foundation
                in the key aspects of web development, including HTML, CSS, and
                JavaScript. Additionally, I extended my knowledge by learning
                React, a popular JavaScript library for building dynamic user
                interfaces.
              </li>
              <br />
              <li className={style.list}>
                Provided me with valuable insights into the fundamental
                principles of UX design, covering crucial areas such as
                research, prototyping, and testing to create user-centered
                digital experiences. Through the use of tools such as Figma, I
                gained hands on experience in translating design concepts into
                interactive prototypes.
              </li>
            </ul>
          </div>
          <div>
            <h3>
              <a href="/files/GoogleDataAnalytics.pdf" target="_blank">
                Google Data Analytics
              </a>
            </h3>
            <ul>
              <li className={style.list}>
                {" "}
                {/* ew */}
                Online course offered by Google introduced me to the field of
                Data Analytics. From the course, I gained a comprehensive
                understanding of data analysis techniques, learned to use tools
                like Spreadsheets, SQL, and Tableau, and developed the skills to gather,
                clean, and visualize data effectively. This foundational
                knowledge has equipped me to make data-driven decisions and
                pursue further learning in the field of analytics.
              </li>
            </ul>
          </div>
        </AboutSection>
        <AboutSection>
          <h2 className={style.sectionHead}>Get in Touch</h2>
          <p>
            If you would like to gain further insight into my background and
            experience, please don&apos;t hesitate to reach out.
          </p>

          <Link href="/contact">
            <button>
              CONTACT <FaArrowRight />
            </button>
          </Link>
        </AboutSection>
      </div>
    </>
  );
}
