export default function Batu({ position = [0, 0, 0], size = 0.25 }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <dodecahedronGeometry args={[size, 0]}/>
      <meshStandardMaterial color="#888" flatShading={true}/>
    </mesh>
  )
}
