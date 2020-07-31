import React, { useState } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Project from "./components/Project";
import Cube from "./components/Cube";

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

const stories = [
  {
    name: "夜隐千隙泯于明",
    color: "#787878",
    description:
      "拼命模仿却终究无法成为的那个人，是否也曾同样地向往着另一个无法企及的人生？",
    links: [
      {
        label: "Contents",
        link: "http://sheronw.xyz/docs/stories/yeyin",
      },
    ],
    time: "2013 - today",
  },
];

function Home() {
  const [lightOn, setlightOn] = useState(false);
  return (
    <Layout description="SheronW 的自留地">
      <div
        className={`${styles.mainContainer} ${
          lightOn ? styles.lightOnContainer : ""
        }`}
      >
        <img
          className={styles.light}
          alt="light off"
          src={lightOn ? useBaseUrl("img/on.svg") : useBaseUrl("img/off.svg")}
          onClick={() => setlightOn(!lightOn)}
        />
        {lightOn ? (
          <div className={styles.leftContainer}>
            <div className={styles.headerContainer}>
              <h1>This is Sheron,</h1>
              <h2>just a random dreamer & amateur Chinese storyteller.</h2>
            </div>
            <div className={styles.subheaderContainer}>
              <h1>I write stories for myself,</h1>
              <h2>and for stupid fantasies in my head while lying in bed.</h2>
            </div>
            {stories.map((p) => (
              <Project info={p} key={p.name} />
            ))}
          </div>
        ) : (
          <div className={styles.leftContainer}>
            <div className={styles.headerContainer}>
              <h1>This is Sheron,</h1>
              <h2>just a random CS student @ Columbia SEAS.</h2>
            </div>
            <div className={styles.subheaderContainer}>
              <h1>I build things for fun,</h1>
              <h2>and for my interests in user interactions.</h2>
            </div>
            {projects.map((p) => (
              <Project info={p} key={p.name} />
            ))}
          </div>
        )}
        <Cube />
      </div>
    </Layout>
  );
}

export default Home;
