import * as T from 'three'

// Suggested code may be subject to a license. Learn more: ~LicenseLog:4171366704.
function renderScene(element: HTMLElement) {
  const scene = new T.Scene()
  // scene.background = new T.Color('#fff')

  // Objects
  const geometry = new T.BoxGeometry(1, 1, 1)
  const material = new T.MeshStandardMaterial({})
  const cube = new T.Mesh(geometry, material)

  scene.add(cube)

  // Camera
  const sizes = {
    width: 500,
    height: 500
  }

  const camera = new T.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
  )
  camera.position.z = 3
  camera.position.x = 0

  scene.add(camera)

  // Lights
  // const light = new T.AmbientLight('#dede', 0.5)
  // scene.add(light)

  const pointLight = new T.PointLight('red', 10)
  pointLight.position.x = 0
  pointLight.position.y = 0
  pointLight.position.z = 4
  pointLight.lookAt(cube.position)
  scene.add(pointLight)

  // Renderer
  const renderer = new T.WebGLRenderer({
    canvas: element
  })
  renderer.setSize(sizes.width, sizes.height)

  function animate() {
    // Renders the scene and the camera
    renderer.render(scene, camera)

    // Rotates the cube
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
  }

  renderer.setAnimationLoop(animate)
}

export default renderScene
