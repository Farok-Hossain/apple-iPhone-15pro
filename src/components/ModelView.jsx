import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import IPhone from "./IPhone";
import * as THREE from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2} ? "right-[-100%] :''`}
    >
      {/* Ambient light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE()}
      />
      <group
        ref={groupRef}
        name={`${index === 1} ? "small" : "large"`}
        position={[0, 0, 0]}
      >
        <Suspense
          fallback={
            <Html>
              {" "}
              <div>Loading</div>
            </Html>
          }
        >
          <IPhone />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
