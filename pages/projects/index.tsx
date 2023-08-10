import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import ProjectWrapper from "@/components/ProjectWrapper/ProjectWrapper";
import { ProjectsProps } from "@/lib/types";

export async function getStaticProps() {
  const fileNames = fs.readdirSync("myProjects");
  // should return an array similar to [project-1, project-2, project-3]
  const projects = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    //removes .md from file name

    const fileContents = fs.readFileSync(`myProjects/${fileName}`, "utf-8");
    // reads the md file as a string
    console.log(fileContents)

    const { data: frontmatter } = matter(fileContents);
    // should parse the metadeta section

    // combines the data with the id... honestly I dont really get it but it works for data-fetching
    return {
      id,
      frontmatter,
    };
  });
  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>My Projects</title>
      </Head>
      {projects.map(({ id, frontmatter }) => (
        <ProjectWrapper key={id} id={id} frontmatter={frontmatter} />
      ))}
    </>
  );
}
