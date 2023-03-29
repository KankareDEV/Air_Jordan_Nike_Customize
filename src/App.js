import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { HexColorPicker } from "react-colorful"
import { proxy, useSnapshot } from "valtio"
import html2canvas from "html2canvas"

const state = proxy({
  current: null,
  items: {
    side: "#e3e3e3",
    back_flipper: "#ffffff",
    front_down: "#e3e3e3",
    slashes: "#191a11",
    mini_flaps: "#3d3d3d",
    side_flaps: "#af1a2b",
    back_flip: "#af1a2b",
    logo: "#3a3a3a",
    upper_side: "#ad1b29",
    upper_soft: "#3a3a3a",
    softy: "#0e0f10",
    big_front: "#0e0f10",
    upper_bottom_bottom: "#d7d2d1",
    bottooom: "#7c1013",
    bottom_logo: "#3a3a3a",
    middle_sides: "#b01826",
    front_side: "#b31929",
  },
})

function Shoe() {
  const ref = useRef()
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF("jordan_shoe.glb")
  const [hovered, set] = useState(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
    ref.current.position.y = (0.04 + Math.sin(t / 2)) / 10
  })

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="0" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
      return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`)
    }
  }, [hovered])

  return (
    <group
      ref={ref}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}>
      <group position={[0, -0.51, 0.29]} rotation={[Math.PI / 2, 0, -1.61]} scale={0.61}>
        <mesh receiveShadow castShadow geometry={nodes.Object001_4.geometry} material={materials.side} material-color={snap.items.side} />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_5.geometry}
          material={materials.back_flipper}
          material-color={snap.items.back_flipper}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_6.geometry}
          material={materials.front_down}
          material-color={snap.items.front_down}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_7.geometry}
          material={materials.slashes}
          material-color={snap.items.slashes}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_8.geometry}
          material={materials.mini_flaps}
          material-color={snap.items.mini_flaps}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_9.geometry}
          material={materials.front_side}
          material-color={snap.items.front_side}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_10.geometry}
          material={materials.side_flaps}
          material-color={snap.items.side_flaps}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_11.geometry}
          material={materials.back_flip}
          material-color={snap.items.back_flip}
        />
        <mesh receiveShadow castShadow geometry={nodes.Object001_12.geometry} material={materials.logo} material-color={snap.items.logo} />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_15.geometry}
          material={materials.middle_sides}
          material-color={snap.items.middle_sides}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_13.geometry}
          material={materials.upper_side}
          material-color={snap.items.upper_side}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_14.geometry}
          material={materials.upper_soft}
          material-color={snap.items.upper_soft}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_16.geometry}
          material={materials.softy}
          material-color={snap.items.softy}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_17.geometry}
          material={materials.big_front}
          material-color={snap.items.big_front}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_18.geometry}
          material={materials.upper_bottom_bottom}
          material-color={snap.items.upper_bottom_bottom}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_19.geometry}
          material={materials.bottooom}
          material-color={snap.items.bottooom}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Object001_20.geometry}
          material={materials.bottom_logo}
          material-color={snap.items.bottom_logo}
        />
      </group>
    </group>
  )
}

function Picker() {
  const snap = useSnapshot(state)
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
      <h1>{snap.current}</h1>
    </div>
  )
}

export default function App() {
  const handleDownload = () => {
    const canvas = canvasRef.current

    const dataURL = canvas.toDataURL()
    const link = document.createElement("a")
    link.href = dataURL
    link.download = "screenshot.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Shoe />
        <Environment files="light.hdr" />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.45} scale={15} blur={1.5} far={0.9} color="white" />
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 1} enableZoom={true} enablePan={false} />
      </Canvas>
      <Picker />
    </>
  )
}
