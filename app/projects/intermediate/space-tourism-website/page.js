import StylesSetup from "./components/StylesSetup"
import Text from "./components/Text"

export default function Page() {
    return <div>
        <Text preset={1} as="h1">EARTH</Text>
        <Text preset={2} as="h2">VENUS</Text>
        <Text preset={3} as="span">
            Jupiter and Saturn
        </Text>
        <Text preset={4}>uranus, neptune & pluto</Text>
        <Text preset={5}>haumea, sedna, eris, & ceres</Text>
        <Text preset={6}>384,400 km</Text>
        <Text preset={7}>AVG. distance</Text>
        <Text preset={8}>europa</Text>
        <Text preset={9}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </Text>
    </div>
}
