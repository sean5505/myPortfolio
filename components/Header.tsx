import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/components/Header.module.scss";
import { useRouter } from "next/router";

type navProps = {
  title: string;
  path: string;
};

const navLinks: navProps[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Contact", path: "/contact" },
];

export default function Header() {
  const [toggleNavBar, setToggleNavBar] = useState(true);
  const router = useRouter();

  const showNavBar = () => {
    setToggleNavBar(!toggleNavBar);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Link href="/" className={styles.logo}>
          &lt;/stevenG&gt;
        </Link>
      </div>
      <nav>
        <ul className={toggleNavBar ? styles.navBar : styles.resNavBar}>
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.path}
                passHref
                onClick={() => showNavBar()}
                className={
                  router.pathname === link.path
                    ? styles.navLinkActive
                    : styles.navLink
                }
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.navBtn} onClick={() => showNavBar()}>
        {toggleNavBar ? <FaBars /> : <FaTimes />}
      </button>
    </header>
  );
}
