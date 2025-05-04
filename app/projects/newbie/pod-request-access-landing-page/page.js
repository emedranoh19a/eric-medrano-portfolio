import Image from "next/image"
import Logo from "./components/Logo"
import StylesSetup from "./components/StylesSetup"
import Text from "./components/Text"
//Review: set the transition colors with TailwindCSS.
export default function Page() {
    return <StylesSetup className="grid place-items-center relative p-9 z-0" >
        <div className="flex flex-col">
            <div className="absolute w-full h-full sm:hidden -z-10 opacity-10">
                <Image
                    src="/projects/newbie/pod-request-access-landing-page/mobile/image-host.jpg"
                    fill
                    className="object-cover"
                />
            </div>
            <Logo />
            <div className="self-start flex flex-col gap-4">

                <Text className="text-white uppercase">
                    <span className="text-[var(--green)]">
                        Publish your Podcasts
                    </span> everywhere
                </Text>
                <Text preset={2} className="text-[var(--blue-300)]">
                    Upload your audio to Pod with a single click.
                    We&apos;ll then distribute your podcast to Spotify,
                    Apple Podcasts, Google Podcasts, Pocket Casts and more!
                </Text>
            </div>
            <Logos />
            {/* <Text preset={1}>A piece of text to test typography.</Text>
        <Text preset={2}>A piece of text to test typography.</Text>
        <Text preset={3}>A piece of text to test typography.</Text>
        <Logo />
        <Button text="Button" />
        <Form /> */}
            {/* <TextField /> */}
        </div>
    </StylesSetup>
}
const logos = [
    {
        title: "Spotify",
        url: "/projects/newbie/pod-request-access-landing-page/desktop/spotify.svg"
    },
    {
        title: "Apple Podcast",
        url: "/projects/newbie/pod-request-access-landing-page/desktop/apple-podcast.svg"
    },
    {
        title: "Google Podcasts",
        url: "/projects/newbie/pod-request-access-landing-page/desktop/google-podcasts.svg"
    },
    {
        title: "Pocket Casts",
        url: "/projects/newbie/pod-request-access-landing-page/desktop/pocket-casts.svg"
    },
]
function Logos() {
    return <div className="w-full flex justify-between items-end gap-3 h-10">
        {logos.map((item, i) => <div key={i} className="relative h-full w-full">
            <Image src={item.url} alt={`Logo of ${item.title}`} fill className="object-contain" />
        </div>)}

    </div>
}

