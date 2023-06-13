import { Frontmatter } from "@/lib/types";
import Image from "next/image";
import React from "react";
import style from "@/styles/components/ProjectWrapper.module.scss";
import Link from "next/link";
import InView from "./InView";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  id: string;
  frontmatter: Frontmatter;
};

export default function ProjectWrapper({ id, frontmatter }: Props) {
  console.log(id);
  return (
    <>
      <InView>
        <section className={style.projectContainer}>
          <h2 className={style.title}>{frontmatter.title}</h2>
          <div className={style.container}>
            <div className={style.leftContainer}>
              <Image
                width={1300}
                height={900}
                alt={frontmatter.title}
                className={style.projectImg}
                src={`/${frontmatter.thumbnail}`}
              />
            </div>
            <div className={style.rightContainer}>
              <p className={style.projectDesc}>
                <span className={style.subTitle}>Description:</span>{" "}
                {frontmatter.description}
              </p>
              <div className={style.buttons}>
                <a href={frontmatter.siteUrl} target="_blank">
                  <button>Demo</button> {/*gonna want to restyle these later}*/}
                </a>
                <a href={frontmatter.codeUrl} target="_blank">
                  <button>Code</button> {/*gonna want to restyle these later}*/}
                </a>
                <Link href={`/projects/${id}`}>
                  <button>In-Depth Study<FaArrowRight/></button>
                </Link>
              </div>
            </div>
          </div>
          <footer>
            <ul className={style.technologies}>
              {frontmatter.technologies.map((tech) => (
                <li key={tech} className={style.technology}>
                  {tech}
                </li>
              ))}
            </ul>
          </footer>
        </section>
      </InView>
    </>
  );
}
