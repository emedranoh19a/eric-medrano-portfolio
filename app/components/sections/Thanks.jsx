import Image from "next/image";
import BoxReveal from "../effects/BoxReveal";
import Text from "../ui/Text";

export default function Thanks() {
  return (
    <section id="thanks" className="relative pb-40">
      <div className="w-fit mx-auto">
        <BoxReveal className="relative w-full h-fit mx-auto mb-10">
          <Image
            alt="thank you message"
            // className="object-contain"
            src="/thank-you.png"
            width={600}
            height={300}
            // fill
          />
        </BoxReveal>
        <BoxReveal className="mx-auto">
          <Text className="text-center">
            Thank you for stopping by and taking the time to explore my work.
            Let’s stay connected and build something unforgettable.
          </Text>
        </BoxReveal>
      </div>
      <div className="w-full h-fit absolute bottom-0 text-neutral-500 -translate-y-full left-1/2 -translate-x-1/2 text-center">
        &copy; Eric Medrano
      </div>
    </section>
  );
}
//TODO: Fusilarse los textFields de Maikagura para este Proyecto.
//TODO: Manejar el Form submit en React Hook Form.
//TODO: Verificar que form submission funcione en Netlify.
//TODO: Verificar que form submission registre un API.
//TODO: Hacer una clase de feedback que indique proceso de envío.
