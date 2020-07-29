import React, { Component } from "react";
import styles from "../styles.module.css";
import * as THREE from "three";

export class Cube extends Component {
  constructor(props) {
    super(props);
    this.info = props.info;
  }

  componentDidMount() {
    // create 3D
    /*
    const renderer = new THREE.WebGLRenderer();
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1c1c1c);
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.lookAt(0, 0, 0);
    camera.position.set(3, 3, 3);
    renderer.setSize(300, 300);
    this.canvas.appendChild(renderer.domElement);

    // add control
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.update();
    const animate = () => {
      requestAnimationFrame(animate);
      // required if controls.enableDamping or controls.autoRotate are set to true
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    */
  }

  render() {
    return (
      <div
        className={styles.canvasContainer}
        ref={(ref) => (this.canvas = ref)}
      ></div>
    );
  }
}

export default Cube;
