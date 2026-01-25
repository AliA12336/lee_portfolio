import type { Dispatch, SetStateAction } from "react";
import { Button } from "./button";

type GalleryImage = {
	src: string;
	alt: string;
};

const Gallery = ({
	images,
	setIndex,
}: {
	images: GalleryImage[];
	setIndex: Dispatch<SetStateAction<number>>;
}) => {
	return (
		<section className="py-4 lg:py-24">
			<div className="flex flex-wrap justify-center gap-6">
				{images.map((image, i) => (
					<Button
						key={image.alt}
						onClick={() => setIndex(i)}
						className="h-32 md:h-64 w-auto bg-transparent hover:bg-transparent"
					>
						<img
							key={image.alt}
							src={image.src}
							alt={image.alt}
							className="h-32 md:h-64 w-auto object-contain"
						/>
					</Button>
				))}
			</div>
		</section>
	);
};

export default Gallery;
