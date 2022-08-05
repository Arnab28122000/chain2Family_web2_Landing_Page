/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

import { useFrame} from "@react-three/fiber";

// import { MeshWobbleMaterial } from "@react-three/drei";

export default function Model({ position, color, speed, args , ...props }) {
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => {
    mesh.current.rotation.y = mesh.current.rotation.y += 0.01
    // mesh.current.rotation.x = mesh.current.rotation.x += 0.02
  });

  //Basic expand state
  const [expand, setExpand] = useState(false);
 
  const { nodes, materials } = useGLTF('/chain2Final_blue_white.glb')
  return (
    <>
    <group>
    <mesh
            rotation={[-Math.PI / 1.6, -1.6, -1.8]}
            // rotation={[-Math.PI / 1.6, -1.6, -1.8]}
            position={[0, -2, 0]}
            receiveShadow
            >
        <planeBufferGeometry attach='geometry' args={[100, 100]} />
        <shadowMaterial attach='material' opacity={0.3} />
        </mesh>
      <mesh
      position={position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={4}
      castShadow
      geometry={nodes.Cylinder.geometry} material={materials['Material.001']} />
      
    </group>
    </>
  )
}

useGLTF.preload('/chain2Family_sunset_logo.glb')
