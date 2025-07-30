import Image from "next/image"
import Button from "./components/Button"
import StyleSetup from "./components/StyleSetup"
import Text from "./components/Text"
import { productDesktop, productMobile } from "./imageIndex"

export default function Page() {
  return <StyleSetup>
    <div className=" bg-white max-w-[350px] sm:max-w-[600px] grid grid-cols-1 sm:grid-cols-2 grid-rows-[2fr_3fr] sm:grid-rows-1 rounded-lg overflow-hidden">
      <div className="sm:hidden relative w-full h-auto md:aspect-auto">
        <Image
          src={productMobile}
          alt="Preview image for Gabrielle Essence Eau De Parfum"
          fill
          className="object-cover"
        />
      </div>
      <div className="hidden sm:block relative w-full h-auto md:aspect-auto">
        <Image
          src={productDesktop}
          alt="Preview image for Gabrielle Essence Eau De Parfum"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-8 flex flex-col gap-6">
        <Text as="h2" preset={4} className="text-[var(--grey)] uppercase">Perfume</Text>
        <Text as="h1" preset={1} className="text-[var(--black)]">Gabrielle Essence Eau De Parfum</Text>
        <Text preset={3} className="text-[var(--grey)]"> A floral, solar and voluptuous interpretation composed by Olivier polge, Perfumer-Creator for the House of CHANEL</Text>
        <div className="flex flex-row gap-4 items-center">
          <Text as="span" preset={1} className="text-[var(--green-500)]">149.99</Text>
          <Text as="span" preset={5} className="text-[var(--grey)]">$169.99</Text>
        </div>
        <Button />
      </div>
    </div>
  </StyleSetup>
}
