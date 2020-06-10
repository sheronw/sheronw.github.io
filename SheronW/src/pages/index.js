import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

function Home() {
  return (
    <Layout description="SheronW 的自留地">
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Sheron W</h1>
          <p className="hero__subtitle">CS student & DayDreamer</p>
          <p className="hero__subtitle">大学生，码民工，常写无用文字。</p>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
