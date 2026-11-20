// Note: adjust the import paths to your folder layout
// import { Project } from "../Proyect.types";
// import { authors } from "@/data/authors";
// Note: assets left as placeholders, replace when you have the files
import { authors } from "@/app/data/authors/authors";
import { Project } from "@/app/data/projects/Proyect.types";
import designPreview from "./preview/design.jpg";
import mockupPreview from "./preview/mockup.png";
import pagePreview from "./preview/page.png";

export const chatAppCssIllustration: Project = {
  // Note: identity
  slug: "chat-app-css-illustration",
  title: {
    en: "Chat App Illustration",
    ja: "チャットアプリのイラスト",
    es: "Ilustración de app de chat",
  },
  description: {
    en: "Busy dog owners hate phone tag. This chat feature lets them message a trusted walker, share photos of their pup, and book a 30 or 60 minute walk with one tap, all in one conversation.",
    ja: "忙しい飼い主は、電話のやり取りが大変です。このチャット機能なら、信頼できる散歩スタッフにメッセージを送り、愛犬の写真を共有し、30分か1時間の散歩をワンタップで予約できます。",
    es: "Los dueños ocupados odian el ir y venir de llamadas. Este chat les permite escribir a un paseador de confianza, compartir fotos de su perro y reservar un paseo de 30 o 60 minutos con un toque.",
  },

  // Note: classification
  level: "newbie",
  category: "challenge",
  status: "completed",
  stack: [
    "html",
    "css",
    "typescript",
    "react",
    "next-js",
    "tailwind-css",
    "motion",
  ],
  tags: ["animation", "responsive"],
  pinAspect: "standard",
  previews: {
    design: designPreview,
    mockup: mockupPreview,
  },

  pages: [
    {
      title: { en: "Home", ja: "ホーム", es: "Inicio" },
      description: {
        en: "A phone chat built only with CSS shapes, with a staggered animation on load.",
        ja: "CSSの図形だけで作ったスマホのチャット画面。読み込み時にスタッガーアニメーションが動きます。",
        es: "Un chat de móvil hecho solo con formas CSS, con una animación escalonada al cargar.",
      },
      preview: pagePreview,
      links: {
        github: "https://github.com/emedranoh19a/eric-medrano-portfolio",
        live: null,
      },
    },
  ],

  challenges: [
    {
      en: "Translating shapes from Figma with less than one pixel of precision was new to me, and tiny parts like the back arrow took the most patience.",
      ja: "Figmaの図形を1px未満の精度で再現するのは初めてで、戻る矢印のような小さな部分に一番時間がかかりました。",
      es: "Traducir figuras de Figma con una precisión menor a un píxel fue nuevo para mí, y las partes diminutas como la flecha de regreso requirieron más paciencia.",
    },
    {
      en: "I ran out of time during my break, so the send icon in the message bar is a simple Japanese arrow (→) instead of a custom shape.",
      ja: "休憩時間が足りず、メッセージバーの送信アイコンは、専用の図形ではなくシンプルな日本語の矢印(→)にしました。",
      es: "Me quedé sin tiempo en mi descanso, así que el icono de envío de la barra de mensajes es una simple flecha japonesa (→) en lugar de una figura propia.",
    },
  ],

  learned: [
    {
      text: {
        en: "transform-origin works like a door hinge. Set the pivot first, and a rotation becomes a precise curve. I used it to draw the back arrow from two halves.",
        ja: "transform-originはドアの蝶番のようなものです。先に回転の軸を決めると、回転が正確な曲線になります。これで2つの半分から戻る矢印を描きました。",
        es: "transform-origin funciona como la bisagra de una puerta. Defines primero el pivote y la rotación se vuelve una curva precisa. Lo usé para dibujar la flecha de regreso con dos mitades.",
      },
      snippet: {
        language: "tsx",
        code: `// Style: each half pivots from its own edge
const iconTopHalf = cn(
  "bg-white rounded-t-full absolute h-[150%] w-1/2",
  "rotate-25 origin-top top-0 right-0",
)
const iconBottomHalf = cn(
  "bg-white rounded-b-full absolute h-[150%] w-1/2",
  "-rotate-25 origin-bottom bottom-0 right-0",
)`,
      },
    },
    {
      text: {
        en: "A stagger can be nested. The dog row is a child of the chat and a parent of its own photos, so the photos pop one after another inside the bigger sequence.",
        ja: "スタッガーは入れ子にできます。犬の写真の行は、チャットの子であり、写真たちの親でもあるので、大きな流れの中で写真が1枚ずつ飛び出します。",
        es: "Un stagger se puede anidar. La fila de perros es hija del chat y madre de sus propias fotos, así que las fotos aparecen una tras otra dentro de la secuencia mayor.",
      },
      snippet: {
        language: "tsx",
        code: `// Logic: the dog row is a child AND a parent
const dogRow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};`,
      },
    },
    {
      text: {
        en: "Each bubble can grow from its own corner. Motion's originX and originY make my messages pop out from the side of whoever sent them.",
        ja: "吹き出しは、自分の角から広がるようにできます。MotionのoriginXとoriginYで、メッセージが送り主の側から飛び出します。",
        es: "Cada burbuja puede crecer desde su propia esquina. originX y originY de Motion hacen que los mensajes salgan del lado de quien los envía.",
      },
      snippet: {
        language: "tsx",
        code: `// Note: bubbles pop out from their own corner
<motion.div
  variants={pop}
  style={{ originX: variant === "us" ? 0 : 1, originY: 1 }}
/>`,
      },
    },
    {
      text: {
        en: "Tailwind accepts tiny values. A nudge like translate-y-[0.1px] fixes seams between two shapes that look fine at a normal zoom.",
        ja: "Tailwindは小さな値も使えます。translate-y-[0.1px]のような微調整で、通常のズームでは気づかない図形のつなぎ目を直せます。",
        es: "Tailwind acepta valores diminutos. Un ajuste como translate-y-[0.1px] arregla las uniones entre dos figuras que se ven bien con el zoom normal.",
      },
      snippet: {
        language: "tsx",
        code: `// Style: sub-pixel nudges close the gap between halves
"translate-y-[0.1px] translate-x-[0.4px]"
"-translate-y-[0.1px] translate-x-[0.4px]"`,
      },
    },
  ],

  nextSteps: [
    {
      en: "Design motion graphics from scratch, not only follow a stagger recipe. I want to plan the timing like a video editor.",
      ja: "スタッガーのレシピをなぞるだけでなく、ゼロからモーショングラフィックスを設計したいです。動画編集者のようにタイミングを組み立てたいと思います。",
      es: "Diseñar gráficos en movimiento desde cero, y no solo seguir una receta de stagger. Quiero planear los tiempos como un editor de video.",
    },
    {
      en: "Come back and draw the missing send icon with CSS.",
      ja: "戻ってきて、足りていない送信アイコンをCSSで描きます。",
      es: "Volver y dibujar con CSS el icono de envío que falta.",
    },
  ],

  credits: [
    {
      author: authors.frontEndMentor,
      work: "Front End Mentor challenge",
      url: "https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY",
      thanks: {
        en: "For a small brief that taught me precision.",
        ja: "精度を教えてくれた、小さくて良い課題をありがとう。",
        es: "Por un reto pequeño que me enseñó precisión.",
      },
    },
    {
      author: authors.claude,
      work: "Help with the Framer Motion staggered animation",
      //   url: "https://claude.ai/",
      thanks: {
        en: "For explaining parent and child variants step by step.",
        ja: "親と子のvariantsを、一歩ずつ説明してくれてありがとう。",
        es: "Por explicarme los variants de padre e hijo paso a paso.",
      },
    },
    {
      author: authors.tailwindCSSDocs,
      work: "Transform Origin docs page",
      url: "https://tailwindcss.com/docs/transform-origin",
      thanks: {
        en: "For the page that helped me build the tiny icons.",
        ja: "小さなアイコン作りを助けてくれたページをありがとう。",
        es: "Por la página que me ayudó a crear los iconos pequeños.",
      },
    },
  ],
};
