"use client";
import { FC } from "react";
import styles from "./Sidebar.module.scss";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import { sidebarMenu } from "./Sidebar.data";

const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <Navigation list={sidebarMenu} />
    </aside>
  );
};

export default Sidebar;
