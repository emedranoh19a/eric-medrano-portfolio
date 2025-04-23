import Card from "./components/Card"
import CardContent from "./components/CardContent"
import FoodImage from "./components/FoodImage"
import Ingredients from "./components/Ingredients"
import Instructions from "./components/Instructions"
import Nutrition from "./components/Nutrition"
import Overview from "./components/Overview"
import StylesSetup from "./components/StylesSetup"
//TODO: Aventarse toda la tipografía.
//TODO: Establecer espaciado vertical.
//TODO: Agregar colores del fondo.
//TODO: Agregar la imagen.
//TODO: Espaciado de padding vs
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








