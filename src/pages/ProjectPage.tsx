import { useParams } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { projectRoute } from "@/router";

// grid
// text box on left
// image and model in center
// actual picture carousel on right

export const ProjectPage = () => {
	const { project } = useParams({ from: projectRoute.id });
};
