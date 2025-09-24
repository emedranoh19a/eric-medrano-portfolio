import StyleSetup from "./components/StyleSetup"
import Testimonial from "./components/Testimonial"
import { testimonials } from "./data/testimonials"

export default function page() {
    return (
        <StyleSetup>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-y-6">
                {testimonials.map((testimonial, index) => <Testimonial key={index} {...testimonial} />)}
            </div>

        </StyleSetup>
    )
}
