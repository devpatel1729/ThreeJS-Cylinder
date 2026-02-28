import { OrbitControls, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { AmbientLight } from 'three'
import * as THREE from 'three'
import Scene from './Scene'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'

const App = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 35 }}>
        {/* <OrbitControls /> */}
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur // Enables or disables mipmap blur.
            intensity={2} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
          {/* <ToneMapping adaptive/> */}
        </EffectComposer>
      </Canvas>
      <div>Hello World</div>
    </>
  )
}

export default App