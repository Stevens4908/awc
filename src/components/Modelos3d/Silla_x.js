/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Silla_x(props) {
  const { nodes, materials } = useGLTF('/silla_x.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.BezierCurve.geometry} material={materials['BLACK STOOL']} position={[1.15, 0.06, 1.94]} rotation={[0, Math.PI / 2, 0]} scale={0.5} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['BLACK STOOL']} position={[2.11, 0.07, 1.94]} rotation={[0, Math.PI / 2, 0]} scale={[0.17, 0.08, 0.17]} />
      <mesh geometry={nodes.BezierCurve001.geometry} material={materials['BLACK STOOL']} position={[1.08, 6.68, -2.31]} rotation={[0, Math.PI / 2, 0]} scale={0.5} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['BLACK STOOL']} position={[2.11, 0.07, -1.78]} rotation={[0, Math.PI / 2, 0]} scale={[0.17, 0.08, 0.17]} />
      <mesh geometry={nodes.BezierCurve002.geometry} material={materials['BLACK STOOL']} position={[-0.78, 6.68, -1.23]} rotation={[0, -1.57, 0]} scale={0.5} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['BLACK STOOL']} position={[-1.87, 0.06, -1.76]} rotation={[0, -1.57, 0]} scale={[0.17, 0.08, 0.17]} />
      <mesh geometry={nodes.BezierCurve003.geometry} material={materials['BLACK STOOL']} position={[-0.76, 6.68, 1.39]} rotation={[0, -1.57, 0]} scale={0.5} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials['BLACK STOOL']} position={[-1.87, 0.06, 1.96]} rotation={[0, -1.57, 0]} scale={[0.17, 0.08, 0.17]} />
      <mesh geometry={nodes.BezierCurve004.geometry} material={materials['BLACK STOOL']} position={[1.77, 2.39, 0.27]} rotation={[0, Math.PI / 2, 0]} scale={0.5} />
      <mesh geometry={nodes.BezierCurve005.geometry} material={materials['BLACK STOOL']} position={[-1.54, 2.39, 0.27]} rotation={[0, Math.PI / 2, 0]} scale={0.5} />
      <mesh geometry={nodes.BezierCurve006.geometry} material={materials['BLACK STOOL']} position={[-0.56, 2.39, -1.57]} rotation={[Math.PI, 0, Math.PI]} scale={[0.77, 0.5, 0.5]} />
      <mesh geometry={nodes.BezierCurve007.geometry} material={materials['BLACK STOOL']} position={[-0.56, 2.39, 1.74]} rotation={[Math.PI, 0, Math.PI]} scale={[0.77, 0.5, 0.5]} />
      <mesh geometry={nodes.BezierCurve008.geometry} material={materials['BLACK STOOL']} position={[0.55, 8.16, 0.15]} rotation={[Math.PI / 2, 1.46, -Math.PI / 2]} scale={[1.07, 1.09, 1.09]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['FOR STOOL ']} position={[-0.45, 8.91, 0.09]} rotation={[-Math.PI / 2, 1.02, Math.PI / 2]} scale={[2.16, 0.05, 0.04]} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials['BLACK STOOL']} position={[0.1, 8.41, 1.11]} rotation={[Math.PI / 2, 0, -1.55]} scale={0.1} />
      <mesh geometry={nodes.Cylinder005.geometry} material={materials['BLACK STOOL']} position={[0.1, 8.41, -0.9]} rotation={[Math.PI / 2, 0, -1.55]} scale={0.1} />
    </group>
  )
}

useGLTF.preload('/silla_x.gltf')
