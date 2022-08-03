import { Html } from "@react-three/drei";
export default function Sphere({ size, amount, color, text, ...props }) {
  return (
    <mesh {...props} scale={1}>
      <Html center={true}>
        <span>{text}</span>
      </Html>
      <sphereGeometry args={[size, 64, 64]} />
      <meshPhysicalMaterial
        roughness={0}
        color={color}
        envMapIntensity={0.2}
      />
    </mesh>
  );
}