import React from "react";
import style from "./TableOfContents.module.scss";

export default function TableOfContents({ contents }: { contents: string[] }) {
  function handleClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className={style.tableOfContents}>
      <h2>Table of Contents</h2>
      <ul className={style.contents}>
        {contents.map((content) => (
          <li key={content}>
            <a
              href={`#${content}`}
              className={style.tableContent}
              onClick={(event) => handleClick(event, content)}
            >
              {content} {/*content in refernece to tableofCONTENTS*/}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
