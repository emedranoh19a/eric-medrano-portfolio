import Image from "next/image";

export default function Card({ author, title, contentPreview, img }) {
  return (
    <div className="group cursor-pointer bg-white rounded-lg overflow-hidden">
      <div className="w-full h-[200px] relative">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="py-6 px-8">
        <span className="mb-4 block preset-8 text-gray-600">{author}</span>
        <h3 className="mb-2 preset-6 text-blue-950 group-hover:text-green-400 transition-colors">
          {title}
        </h3>
        <p className="preset-7-regular text-gray-600">{contentPreview}</p>
      </div>
    </div>
  );
}
