import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Project from "./components/Project";
import Cube from "./components/Cube";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1>This is Sheron,</h1>
      <h2>just a random CS student @ Columbia SEAS.</h2>
    </div>
  );
};

const projects = [
  {
    name: "Seeing Epidemiology",
    color: "#D6EFFA",
    description:
      "Forked from Seeing Theory, this is a visualization for basic terms in epidemiology and my d3.js playground.",
    links: [
      {
        label: "Website",
        link:
          "https://sheronw.xyz/Seeing-Epidemiology/Measure-Disease-Frequency/",
      },
      {
        label: "Github",
        link: "https://github.com/sheronw/Seeing-Epidemiology",
      },
    ],
    time: "2020.06 - today",
  },
  {
    name: "六博出土地点可视化",
    color: "#ad8e7f",
    description:
      "A visual and educational website for the findspots of liubo (Chinese: 六博), an ancient Chinese board game.",
    links: [
      {
        label: "Github",
        link: "https://github.com/sheronw/liubo",
      },
    ],
    time: "2020.03 - today",
  },
];

function Home() {
  return (
    <Layout description="SheronW 的自留地">
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <Header />
          <div className={styles.subheaderContainer}>
            <h1>I build stuffs for fun,</h1>
            <h2>and for my interests in user interactions.</h2>
          </div>
          {projects.map((p) => (
            <Project info={p} key={p.name} />
          ))}
        </div>
        <Cube />
      </div>
    </Layout>
  );
}

export default Home;
