"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ItemPerPage = 2;

  const hasPrev = ItemPerPage * (parseInt(page) - 1) > 0;
  const hasNext = ItemPerPage * (parseInt(page) - 1) + ItemPerPage < count;
  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Prev
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
