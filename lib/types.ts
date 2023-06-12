export type Frontmatter = {
    title: string;
    thumbnail: string;
    animatedThumbnail? :string;
    description: string;
    siteUrl: string;
    codeUrl: string;
    technologies: string[];
    toc: string[];
  };
  
  export type Project = {
    id: string;
    frontmatter: Frontmatter
  };
  
  export type ProjectsProps = {
    projects: Project[];
  };