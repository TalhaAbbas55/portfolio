import React, { useRef, useEffect } from "react";

import { useGLTF, useAnimations } from "@react-three/drei";
import PlaneScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(PlaneScene);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
