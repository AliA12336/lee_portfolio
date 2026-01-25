import { MoveDown, MoveUp } from "lucide-react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { Button } from "@/components/ui/button";
import Gallery from "@/components/ui/gallery";
import { galleryImages } from "@/scripts/convertImages";

export const PotpourriGallery = () => {
	const [index, setIndex] = useState(-1);

	const scrollAmount = 1500;

	return (
		<>
			<div className="relative">
				<Gallery images={galleryImages} setIndex={setIndex} />
				<Button
					className="hover:bg-transparent fixed bottom-11 right-12 -translate-x-1/2 bg-transparent p-3 hidden sm:block"
					onClick={() =>
						window.scrollBy({ top: -scrollAmount, behavior: "smooth" })
					}
				>
					<MoveUp className="!w-6 !h-6" />
				</Button>
				<Button
					className="hover:bg-transparent fixed bottom-4 right-12 -translate-x-1/2 bg-transparent p-3 hidden sm:block"
					onClick={() =>
						window.scrollBy({ top: scrollAmount, behavior: "smooth" })
					}
				>
					<MoveDown className="!w-6 !h-6" />
				</Button>
			</div>
			<Lightbox
				open={index >= 0}
				close={() => setIndex(-1)}
				index={index}
				slides={galleryImages.map((image) => ({
					src: image.src,
					alt: image.alt,
				}))}
				plugins={[Zoom]}
			/>
		</>
	);
};
