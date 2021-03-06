import React, { Component } from "react";
import styles from "../styles.module.css";
import * as THREE from "three";

export class Torus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0,
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
    camera.position.set(250, 250, 170);
    renderer.setSize(700, 700);
    this.canvas.appendChild(renderer.domElement);

    // draw cubes
    const drawCube = (x, y, z) => {
      const geometry = new THREE.TorusKnotGeometry(65, 8, 14, 4, 11, 7);
      const wireframe = new THREE.WireframeGeometry(geometry);
      const line = new THREE.LineSegments(
        wireframe,
        new THREE.LineBasicMaterial({
          color: 0xffffff,
        })
      );
      line.position.set(x, y, z);
      scene.add(line);
    };

    drawCube(0, 0, 0);

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
    this.setState({
      mouseX: this.state.mouseX + event.movementX * 0.1,
      mouseY: this.state.mouseY + event.movementY * 0.2,
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

export default Torus;
