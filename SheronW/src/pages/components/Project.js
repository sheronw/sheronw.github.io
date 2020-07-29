import React, { Component } from "react";
import styles from "../styles.module.css";

export class Project extends Component {
  constructor(props) {
    super(props);
    this.info = props.info;
  }

  render() {
    return this.info ? (
      <div className={styles.projectContainer}>
        <div
          className={styles.square}
          style={{
            backgroundColor: this.info.color,
          }}
        ></div>
        <h2 className={styles.projectHeader}>{this.info.name}</h2>
        <p className={styles.projectDescription}>{this.info.description}</p>
        <div className={styles.projectURL}>
          <span>
            {this.info.links.map((link) => (
              <a href={link.link} target="_blank" key={link.label}>
                {link.label}
              </a>
            ))}
          </span>
          {this.info.time}
        </div>
      </div>
    ) : (
      <div></div>
    );
  }
}

export default Project;
