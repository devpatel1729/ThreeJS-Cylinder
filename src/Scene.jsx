import { OrbitControls, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { AmbientLight } from 'three'
import * as THREE from 'three'

const Scene = () => {
    let tex = useTexture('./image.png')
    const cyl = useRef()
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta
    })
    return (
        <group rotation={[0, 1.4, 0.5]}>
            <mesh ref={cyl}>
                <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

export default Scene