import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import {
	Box3,
	Color,
	type Group,
	type Mesh,
	type Object3D,
	Vector3,
} from "three";

import { cn } from "@/lib/utils";

type ModelViewerProps = {
	url: string;
	autoRotate?: boolean;
	className?: string;
};

function NormalizedModel({ url }: { url: string }) {
	const { scene } = useGLTF(url);
	const ref = useRef<Group>(null);
	const [scale, setScale] = useState(1);
	const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);

	const rgb = "rgb(89, 89, 97)";
	const [r, g, b] = rgb.match(/\d+/g)!.map((v) => parseInt(v) / 255);

	useEffect(() => {
		if (ref.current) {
			const box = new Box3().setFromObject(ref.current);
			const size = new Vector3();
			const center = new Vector3();
			box.getSize(size);
			box.getCenter(center);

			const maxDim = Math.max(size.x, size.y, size.z);

			setScale(1 / maxDim);

			setPosition([-center.x / maxDim, -center.y / maxDim, -center.z / maxDim]);
			ref.current?.traverse((child: Object3D) => {
				// @ts-expect-error
				if ((child as Mesh).isMesh && child.material?.color) {
					// @ts-expect-error
					child.material = child.material.clone();
					// @ts-expect-error
					child.material.color = new Color(r, g, b);
				}
			});
		}
	}, [r, g, b]);

	return (
		<primitive
			ref={ref}
			object={scene}
			scale={scale}
			position={position as any}
		/>
	);
}

export const ModelViewer = ({
	url,
	autoRotate = false,
	className,
}: ModelViewerProps) => {
	return (
		<div className={cn("w-full h-[70vh", className)}>
			<Canvas camera={{ position: [0, 0, 2], fov: 45 }}>
				<ambientLight intensity={0.6} />
				<directionalLight position={[5, 5, 5]} intensity={1} />
				<NormalizedModel url={url} />
				<OrbitControls
					enablePan={false}
					enableZoom={true}
					enableRotate={true}
					autoRotate={autoRotate}
					autoRotateSpeed={0.3}
				/>
			</Canvas>
		</div>
	);
};
