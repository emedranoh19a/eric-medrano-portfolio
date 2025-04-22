import Image from "next/image";

export default function BlogImage() {
  return (
    <div className="relative rounded-xl overflow-hidden h-60 w-full">
      <Image
        className="object-cover"
        fill
        src="/projects/newbie/blog-preview-card/images/illustration-article.svg"
      />
    </div>
  );
}

/* Inside auto layout */
