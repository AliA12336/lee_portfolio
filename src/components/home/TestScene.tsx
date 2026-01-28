import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree, } from "@react-three/fiber";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { type RefObject, Suspense, useRef, useState } from "react";
import furnitures from "../../images.json";

type FallingCubeProps = {
	initialPosition: [number, number, number];
	spawnHeight: number;
	groundPos: number;
	canvasRef: RefObject<HTMLDivElement | null>;
    glbPath: string;
};

function getRandomIntInclusive(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

const RANDOMMIN = -50;
    const RANDOMMAX = 50;

function Furniture({
	initialPosition,
	spawnHeight,
	groundPos,
	canvasRef,
    glbPath,
}: FallingCubeProps) {
    const [isDragging, setDragging] = useState(false);
	const ref = useRef<any>(null);;
	const gltf = useGLTF(glbPath);


	useFrame(({ camera }) => {
		if (!ref.current) return;

		const { y } = ref.current.translation();

		if (y < groundPos) {
			let width = 0;
			let height = 0;

			if (canvasRef.current) {
				const rect = canvasRef.current.getBoundingClientRect();
				width = rect.width;
				height = rect.height;
			}

			const distance = spawnHeight - camera.position.y;
			const fov = camera.fov;
			const aspect = width / height;
			const visibleHeight = 2 * distance * Math.tan((fov * Math.PI) / 180 / 2);
			const visibleWidth = visibleHeight * aspect;
			const randomX = (Math.random() - 0.5) * visibleWidth;

			ref.current.setTranslation(
				{
					x: randomX,
					y: spawnHeight,
					z: initialPosition[2],
				},
				true,
			);

			// Adding a little more spin factor for good measure
			ref.current.setLinvel(
				{ x: getRandomIntInclusive(RANDOMMIN, RANDOMMAX), y: 0, z: 0 },
				true,
			);
			ref.current.setAngvel(
				{
					x: Math.random() * 4 - 1,
					y: Math.random() * 4 - 1,
					z: Math.random() * 2 - 1,
				},
				true,
			);
			ref.current.wakeUp();
		}
	});

	return (
		<RigidBody
			ref={ref}
			// type="dynamic"
			// colliders="hull"
            colliders="cuboid"
			restitution={2}
			angularDamping={0.2}
			angularVelocity={[0.3, 0.3, 0]}
			position={initialPosition}
			onClick={(e) => {
				console.log("I was clicked!", e.object);
			}}
		>
			<primitive object={gltf.scene.clone()} />
             {/* <CuboidCollider args={[1,1,1]} /> */}
		</RigidBody>
	);
}

export const TestScene = () => {
	const projects = furnitures.map(({glb: [glb]}) => glb)
    // error with projects[4]
    console.log(projects[4])
	const canvasRef = useRef<HTMLDivElement>(null);

	const spawnHeight = 250;
	const groundPos = -1000;
    const gravity = getRandomIntInclusive(RANDOMMIN, RANDOMMAX);

	return (
		<div className="h-screen w-full" ref={canvasRef}>
			<Canvas camera={{ position: [0, 0, 300] }}>
				<ambientLight intensity={0.1} />
				<directionalLight color="#dfdedf" position={[0, 0, 5]} />
				<Suspense>
					<Physics gravity={[gravity, -20, 0]}>
                        {projects.map((project) => {
                            return (
                            <Furniture
							initialPosition={[getRandomIntInclusive(RANDOMMIN, RANDOMMAX), 250, 0]}
							spawnHeight={spawnHeight}
							groundPos={groundPos}
							canvasRef={canvasRef}
                            key={project}
                            glbPath={project}
						/>
                            )
                        })}
						
					</Physics>
				</Suspense>
			</Canvas>
		</div>
	);
};
