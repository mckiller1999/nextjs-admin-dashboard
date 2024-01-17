"use client";
import React from "react";
import Link from "next/link";
import styles from "./menulink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const patchName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        patchName === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
