import { Canvas } from "@react-three/fiber"
import { softShadows, OrbitControls } from "@react-three/drei";

import Model from "./Coin-Model";

softShadows();


const CoinModelLayout = () => {
  return (
      <div style={{
        display: "flex",
        width: "50vw",
        height: "80vh",
      }}>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 60 }}
       >
        
        <ambientLight intensity={0.3} />
        
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
      <Model
      position={[0, 1, 0]}
      color='lightblue'
      args={[3, 2, 1]}
      speed={2}
      />
      <OrbitControls/>
      </Canvas>
        </div>
  );
};

export default CoinModelLayout;
