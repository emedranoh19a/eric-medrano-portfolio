
"use client";

import {
    natoursImage,
    nexterImage,
    omnifoodImage,
    reactQuizImage,
    theWildOasisImage,
    trilloImage,
    usePopcornImage
} from "@/app/projects/tutorials";
import DesignSystem from "../ui/DesignSystem";
import Pin from "./components/Pin";

//TODO: Create a development helper that shows the same project previews in all the formats (To select one)
//A pin is esentially, a project. It might be good to reduce the information for the masonry, and expand it on the details page.
const pins = [
    { image: natoursImage, variant: "wide", title: "Natours", description: "A modern banking app interface with balance overview, recent transactions and a clean, responsive design." },
    { image: natoursImage, variant: "landscape", title: "Natours", description: "A modern banking app interface with balance overview, recent transactions and a clean, responsive design." },
    { image: natoursImage, variant: "square", title: "Natours", description: "A modern banking app interface with balance overview, recent transactions and a clean, responsive design." },
    { image: natoursImage, variant: "video", title: "Natours", description: "A modern banking app interface with balance overview, recent transactions and a clean, responsive design." },
    { image: natoursImage, variant: "standard", title: "Natours", description: "A modern banking app interface with balance overview, recent transactions and a clean, responsive design." },
    { image: natoursImage, variant: "giraffe", title: "Natours", description: "A modern banking app interface with balance overview, recent transactions and a clean, responsive design." },
    { image: nexterImage, variant: "landscape", title: "Nexter", description: "A simple profile card with social links and a clean, centered layout." },
    { image: omnifoodImage, variant: "square", title: "Omnifood", description: "A product preview card with image carousel and a clean design." },
    { image: reactQuizImage, variant: "standard", title: "The React Quiz", description: "A fully functional todo app with add, remove and filter options, built with modern JavaScript." },
    { image: theWildOasisImage, variant: "video", title: "The Wild Oasis", description: "A landing page for a gaming brand with a bold design and smooth interactions" },
    { image: trilloImage, variant: "landscape", title: "Trillo", description: "A testimonials section with a slider and clean, minimal design." },
    { image: usePopcornImage, variant: "square", title: "usePopcorn", description: "A landing page for an interior design consultant with a modern and elegant layout" },
    { image: usePopcornImage, variant: "square", title: "Galleria Slidehow Site with Accordion component", description: "A landing page for an interior design consultant with a modern and elegant layout" },
];

//Note: Change the value along side with the grid-columns. The Pin component uses this constant as well.
export const COLUMN_WIDTH = 260;

export default function Projects() {
    return (
        <DesignSystem className="container mx-auto px-4">
            <div
                className="grid auto-rows-1 gap-4 justify-center"
                style={{ gridTemplateColumns: `repeat(auto-fill,${COLUMN_WIDTH}px)` }}
            >
                {/* a pin, is essentially a project */}
                {pins.map((pin, i) => (
                    <Pin
                        key={i}
                        image={pin.image}
                        // ratio={pin.ratio}
                        variant={pin.variant}
                        text={i + 1}
                        title={pin.title}
                        description={pin.description}
                        level="intermediate"
                    />
                ))}
            </div>
        </DesignSystem>
    );
}

