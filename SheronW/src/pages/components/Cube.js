import React, { Component } from "react";
import styles from "../styles.module.css";
import * as THREE from "three";

export class Cube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: 200,
      mouseY: 200,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  componentWillUnmount() {
    this.canvas.parentElement.removeEventListener(
      "mousemove",
      this.onMouseMove
    );
  }

  componentDidMount() {
    // create 3D
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.lookAt(0, 0, 0);
    camera.position.setZ(200);
    renderer.setSize(800, 800);
    this.canvas.appendChild(renderer.domElement);

    // draw cubes
    const drawCube = (x, y, z, n) => {
      const geometry = new THREE.BoxGeometry(n, n, n, 0, 0, 0);
      const wireframe = new THREE.WireframeGeometry(geometry);
      const line = new THREE.LineSegments(
        wireframe,
        new THREE.LineBasicMaterial({
          color: 0x535953,
        })
      );
      line.position.set(x, y, z);
      scene.add(line);
    };

    drawCube(0, 0, 0, 50);
    drawCube(0, 0, 50, 50);
    drawCube(0, 50, 0, 50);
    drawCube(50, 0, 0, 50);
    drawCube(0, 0, 100, 50);
    drawCube(0, 100, 0, 50);
    drawCube(100, 0, 0, 50);
    drawCube(0, 50, 50, 50);
    drawCube(50, 50, 0, 50);
    drawCube(50, 0, 50, 50);

    this.canvas.parentElement.addEventListener("mousemove", this.onMouseMove);

    // animate mouse effect
    const animate = () => {
      requestAnimationFrame(animate);
      // required if controls.enableDamping or controls.autoRotate are set to true
      camera.position.x = this.state.mouseX;
      camera.position.y = this.state.mouseY;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();
  }

  onMouseMove(event) {
    const x = this.state.mouseX;
    const y = this.state.mouseY;
    this.setState({
      mouseX: x + event.movementX * 0.4 * -1,
      mouseY: y + event.movementY * 0.8,
    });
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
