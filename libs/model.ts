// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const loadGLTFModel = (
  scene: any,
  glbPath: any,
  options = { receiveShadow: true, castShadow: true }
) => {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      (glbPath: any, gltf: any) => {
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child: any) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error: any) {
        reject(error)
      }
    )
  })
}
