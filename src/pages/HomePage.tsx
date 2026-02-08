// import { Canvas } from "@react-three/fiber";
// import { Scene } from "@/components/home/Scene";
// import { Physics } from "@react-three/cannon";
// import { Furniture, Furnitures } from "@/components/home/Furnitures";
// import images from "../images.json"
// import { Suspense } from "react";

import { TestScene } from "@/components/home/TestScene";

export const HomePage = () => {
	// const image = images[0].glb[0]
	return (
		// 		<Canvas
		// 			camera={{ position: [0, 6, 12], fov: 50 }}
		// 			style={{ width: "100vw", height: "100vh" }}
		// 		>
		// 			<Suspense>
		// 				 {/* <Physics gravity={[0, -1, 0]}>
		// 				<Furnitures /> */}

		// 			<Scene />
		// 			 {/* <ambientLight intensity={1} />

		//     <Furniture url={image} index={0} /> */}
		//   {/* </Physics>  */}
		//   </Suspense>
		// 		</Canvas>
		<TestScene />
	);
};
