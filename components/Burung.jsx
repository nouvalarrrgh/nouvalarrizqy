import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Burung({ startX = -3, endX = 3, speed = 1, height = 2, delay = 0 }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * speed + delay) % 2
    if (ref.current) {
      // Gerak bolak-balik
      const x = startX + (endX - startX) * ((t < 1) ? t : (2 - t));
      ref.current.position.x = x
      ref.current.position.y = height + Math.sin(clock.getElapsedTime() * 2 + delay) * 0.2
    }
  })
  return (
    <group ref={ref}>
      {/* Badan */}
      <mesh>
        <sphereGeometry args={[0.12, 16, 8]} />
        <meshStandardMaterial color="#333"/>
      </mesh>
      {/* Sayap kiri */}
      <mesh position={[-0.13, 0, 0]}>
        <boxGeometry args={[0.18, 0.022, 0.04]}/>
        <meshStandardMaterial color="#444"/>
      </mesh>
      {/* Sayap kanan */}
      <mesh position={[0.13, 0, 0]}>
        <boxGeometry args={[0.18, 0.022, 0.04]}/>
        <meshStandardMaterial color="#444"/>
      </mesh>
    </group>
  )
}
