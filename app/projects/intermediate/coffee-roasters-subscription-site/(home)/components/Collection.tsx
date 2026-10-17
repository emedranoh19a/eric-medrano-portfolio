import Image from "next/image"
import { homeImagePiccollo } from "../../assets/assetIndex"

const colletion = []
// our collection
// Gran Espresso
// Planalto
// Piccollo
// Danche
// Light and flavorful blend with cocoa and black pepper for an intense experience.
// Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.
// Mild and smooth blend featuring notes of toasted almond and dried cherry.
// Ethiopian hand-harvested blend densely packed with vibrant fruit notes.
export default function Collection() {
    return <section className="mb-30 sm:mb-36 lg:mb-50">
        <h2 className="heading-2 text-grey relative z-0 text-center md:text-[96px] xl:title-alternate">
            our collection
            <span className="w-full h-full bg-linear-to-b from-transparent to-light-cream absolute -bottom-1/3 left-0 inline-block z-10 " />
        </h2>
        <ul className="flex flex-col xl:grid xl:grid-cols-4 gap-12 z-0">
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
        </ul>
    </section>
}

function CollectionItem() {
    return <li className="text-dark-grey-blue list-none flex flex-col sm:flex-row xl:flex-col sm:justify-center items-center gap-6 sm:gap-8.75 lg:gap-[71.74px]">
        <div className=" aspect-square w-50 h-37.75 sm:w-63.75 sm:h-48.25 relative">
            <Image fill className="object-contain" src={homeImagePiccollo} alt="" />
        </div>
        <div className="text-center sm:text-left">
            <h3 className="heading-4 mb-4 sm:mb-6 ">Gran espresso</h3>
            <p className="body max-w-70.5">Light and Flaborful blend with cocoa and black pepper for an intense experience </p>
        </div>
    </li>
}
