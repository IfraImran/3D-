import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ProductViewer from "./ProductViewer";

export default function App() {
  return (
    <Canvas camera={{ position: [2, 2, 4] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <ProductViewer />
      <OrbitControls />
    </Canvas>
  );
}
