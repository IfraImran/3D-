import { useState } from "react";

export default function ProductViewer() {
  const [color, setColor] = useState("orange");

  return (
    <>
      <mesh onClick={() => setColor(color === "orange" ? "blue" : "orange")}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
}
