import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Burung from './Burung'
import Batu from './Batu'

function Pohon({ position }) {
  return (
    <group position={position}>
      {/* Batang */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.08, 0.16, 1, 16]} />
        <meshStandardMaterial color="#8B5A2B" />
      </mesh>
      {/* Daun */}
      <mesh position={[0, 1.1, 0]}>
        <coneGeometry args={[0.5, 1.4, 16]} />
        <meshStandardMaterial color="#227c2b" />
      </mesh>
    </group>
  )
}

function SceneFlores({ sceneType = "pantai" }) {
  return (
    <group>
      {/* Pantai */}
      {sceneType === "pantai" && (
        <>
          {/* Pasir */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[5, 0.2, 2.2]} />
            <meshStandardMaterial color="#edc988" />
          </mesh>
          {/* Laut */}
          <mesh position={[0, 0.07, 0.95]}>
            <boxGeometry args={[5, 0.15, 1.2]} />
            <meshStandardMaterial color="#7cf4fe" transparent opacity={0.85} />
          </mesh>
          {/* Batu & burung */}
          <Batu position={[-2, 0.13, 1.6]} size={0.42}/>
          <Batu position={[-0.9, 0.13, 0.6]} size={0.25}/>
          <Batu position={[1.7, 0.13, 1.3]} size={0.33}/>
          <Burung startX={-2.5} endX={2.5} height={2.3} speed={0.6}/>
          <Burung startX={1} endX={-2.2} height={2.7} speed={0.8} delay={0.7}/>
        </>
      )}
      {/* Hutan */}
      {sceneType === "hutan" && (
        <>
          {/* Tanah & rumput */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[5, 0.2, 2.5]} />
            <meshStandardMaterial color="#70d47b"/>
          </mesh>
          {/* Pohon */}
          <Pohon position={[-1.7, 0.15, -0.7]}/>
          <Pohon position={[-0.7, 0.15, -0.5]}/>
          <Pohon position={[1.3, 0.15, -0.2]}/>
          <Pohon position={[-2.2, 0.15, 1.5]}/>
          <Burung startX={-2.5} endX={2.5} height={2.4} speed={0.65}/>
        </>
      )}
      {/* Tebing */}
      {sceneType === "tebing" && (
        <>
          {/* Tebing */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2, 0.5, 3]} />
            <meshStandardMaterial color="#bbb7a2" />
          </mesh>
          {/* Batu besar/semak */}
          <Batu position={[-1, 0.35, 1]} size={0.7}/>
          <Batu position={[1.2, 0.33, 0.6]} size={0.5}/>
          <Burung startX={-2.5} endX={2.5} height={2.8} speed={0.7}/>
        </>
      )}
      {/* Air Terjun */}
      {sceneType === "airterjun" && (
        <>
          {/* Tanah */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3, 0.12, 2]} />
            <meshStandardMaterial color="#aad3ab"/>
          </mesh>
          {/* Air terjun */}
          <mesh position={[0, 0.7, 0.2]}>
            <boxGeometry args={[0.35, 1.2, 0.18]} />
            <meshStandardMaterial color="#69d6fa" transparent opacity={0.77}/>
          </mesh>
          <Batu position={[-0.8, 0.13, -0.2]} size={0.25}/>
          <Burung startX={1.3} endX={-1.2} height={2.6} speed={0.8}/>
        </>
      )}
    </group>
  )
}

export default function Hero3DFlores({ sceneType = "pantai" }) {
  return (
    <div style={{ width: "100%", height: "350px" }}>
      <Canvas camera={{ position: [3.7, 3, 6] }} shadows>
        <ambientLight intensity={0.8}/>
        <directionalLight position={[2, 7, 2]} intensity={0.6}/>
        <Environment preset="sunset" />
        <SceneFlores sceneType={sceneType}/>
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI/2.15}/>
      </Canvas>
    </div>
  )
}
