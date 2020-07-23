import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Home() {
  return (
    <Layout description="SheronW 的自留地">
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>This is Sheron,</h1>
        <p>
          a developer, a amateur Chinese storyteller and a student @ Columbia
          SEAS.
        </p>
        <h1>I build stuffs,</h1>
        <p>TBA</p>
        <h1>I write Chinese stories,</h1>
        <p>TBA</p>
      </div>
    </Layout>
  );
}

export default Home;
