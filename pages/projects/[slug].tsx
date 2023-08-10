import { useRouter } from "next/router";
import fs from "fs";
import matter from "gray-matter";
import { Frontmatter } from "@/lib/types";
import Head from "next/head";
import Image from "next/image";
import style from "./Projects.module.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import { FaArrowLeft } from "react-icons/fa";

type Props = {
  frontmatter: Frontmatter;
  content: string;
};

type Params = {
  params: {
    slug: string;
  };
};

{
  /*https://dev.to/anuraggharat/how-to-create-a-blog-using-nextjs-and-markdown-3j9o*/
}
export async function getStaticPaths() {
  const files = fs.readdirSync("myProjects");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: Params) {
  const fileName = fs.readFileSync(`myProjects/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function Page({ frontmatter, content }: Props) {
  const router = useRouter();

  const backToProjects = () => {
    router.push("/projects");
  };

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>

      <div className={style.projectContainer}>
        <h2 className={style.title}>{frontmatter.title}</h2>
        <button className={style.backButton} onClick={backToProjects}>
          <FaArrowLeft/> Back
        </button>
        <Image
          width={600}
          height={300}
          alt={frontmatter.title}
          className={style.thumbnail}
          src={`/${
            frontmatter.animatedThumbnail
              ? frontmatter.animatedThumbnail
              : frontmatter.thumbnail
          }`}
        />
        <div className={style.buttons}>
          <a href={frontmatter.siteUrl} target="_blank">
            <button>Demo</button> {/*gonna want to restyle these later}*/}
          </a>
          <a href={frontmatter.codeUrl} target="_blank">
            <button>Code</button> {/*gonna want to restyle these later}*/}
          </a>
        </div>
        <ul className={style.technologies}>
          {frontmatter.technologies.map((tech) => (
            <li key={tech} className={style.technology}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <TableOfContents contents={frontmatter.toc} />
      <div className={style.projectInfo}>
        <ReactMarkdown
          components={{
            //adds an id to every h2 tag
            h2: ({ children }) => <h2 id={children.toString()}>{children}</h2>,
            //add target_blank to every a tag
            a: ({ node, ...props }) => <a {...props} target="_blank" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
      <div className={style.buttons}>
        <a href={frontmatter.siteUrl} target="_blank">
          <button>Demo</button> {/*gonna want to restyle these later}*/}
        </a>
        <a href={frontmatter.codeUrl} target="_blank">
          <button>Code</button> {/*gonna want to restyle these later}*/}
        </a>
        <button onClick={backToProjects}>Back To Projects</button>
      </div>
    </>
  );
}
