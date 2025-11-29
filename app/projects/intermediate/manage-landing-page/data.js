import { IconFacebook, IconInstagram, IconPinterest, IconTwitter, IconYoutube } from "./components/ui/Icons"
import { avatarAli, avatarAnisha, avatarRichard, avatarShanai } from "./imageIndex"

export const navigationLinks = ["Pricing", "Product", "About Us", "Careers", "Community"]

export const footerIcons = [
    { title: "Facebook", icon: IconFacebook },
    { title: "Youtube", icon: IconYoutube },
    { title: "Twitter", icon: IconTwitter },
    { title: "Pinterest", icon: IconPinterest },
    { title: "Instagram", icon: IconInstagram }]

export const features = [
    {
        title: "Track company-wide progress",
        description: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
    },
    {
        title: "Advanced built-in reports",
        description: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
    },
    {
        title: "Everything you need in one place",
        description: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
    }]
export const links = [
    { label: "Home", className: "" },
    { label: "Pricing", className: "" },
    { label: "Products", className: "" },
    { label: "About Us", className: "" },
    { label: "Careers", className: "" },
    { label: "Community", className: "" },
    { label: "Privacy Policy", className: "" },
]

export const testimonials = [
    { name: "Anisha Li", avatar: avatarAnisha, quote: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated." },
    { name: "Ali Bravo", avatar: avatarAli, quote: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused." },
    { name: "Richard Wats", avatar: avatarRichard, quote: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!" },
    { name: "Shai Walter", avatar: avatarShanai, quote: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated." }
]
