import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className={styles.head_container}>
      <div className={styles.inner_head_container}>
        <Link href="/">Home</Link>
        <div className="d-flex gap-2 gap-md-3">
          <Link href="/signup">Sign up</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
