import Card from "./components/Card"
import CardContent from "./components/CardContent"
import FoodImage from "./components/FoodImage"
import Ingredients from "./components/Ingredients"
import Instructions from "./components/Instructions"
import Nutrition from "./components/Nutrition"
import Overview from "./components/Overview"
import StylesSetup from "./components/StylesSetup"

export default function Page() {
    return <StylesSetup>
        <Card>
            <FoodImage />
            <CardContent>
                <Overview />
                <Ingredients />
                <Instructions />
                <Nutrition />
            </CardContent>
        </Card>
    </StylesSetup>
}
