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
            <strong>React</strong> Front-End Developer located in NYC.
            Currently, my focus is on building React based applications that is
            visually appealing and provides exeptional user experience.
          </p>
        </AboutSection>
        <AboutSection imgSrc={brain}>
          <h2 className={style.sectionHead}>Skills and Experience</h2>
          <p>
            I&apos;ve been studying Front-End Development for
            a year now. It started as a hobby, but nowadays I&apos;m focused on
            turning my ideas into fully functional projects. Feel free to check
            out what I&apos;ve been working on!
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
          <h3>Meta Front End Development: </h3>
          <a
            href="/files/META_certificate.pdf"
            target="_blank"
            className={style.cert}
          >
            Certificate
          </a>
          <ul>
            <li className={style.list}>
              {" "}
              {/* ew */}
              Through the comprehensive course, I gained a strong foundation in
              the key aspects of web development, including HTML, CSS, and
              JavaScript. Additionally, I extended my knowledge by learning
              React, a popular JavaScript library for building dynamic user
              interfaces.
            </li>
            <br />
            <li className={style.list}>
              Provided me with valuable insights into the fundamental principles
              of UX design, covering crucial areas such as research,
              prototyping, and testing to create user-centered digital
              experiences
            </li>
          </ul>
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
