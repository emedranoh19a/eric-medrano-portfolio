import { authors } from "@/app/data/authors/authors";
import { Project } from "@/app/data/projects/Proyect.types";
import devicesArtwork from "./previews/devices-artwork.png";
import devicesHome from "./previews/devices-home.png";
import fullDesign from "./previews/full-design.jpg";
import preview from "./previews/preview.jpg";

// Note: first slug segment is the route: /projects/intermediate/galleria-slideshow-site
export const galleriaSlideshowSite = {
  // Note: identity
  slug: "galleria-slideshow-site",
  title: {
    en: "Galleria Slideshow Site",
    ja: "美術ギャラリーサイト",
    es: "Sitio de galería de arte",
  },
  description: {
    en: "Galleria is an online art gallery that lets visitors wander through 15 famous paintings like a guided museum tour. Browse a wall of artworks, open one, step through the slideshow, and zoom into any painting in a full-screen lightbox.",
    ja: "Galleriaは、名画15点をオンラインで巡れる美術ギャラリーです。作品が並ぶ壁から1点を選び、スライドショーで順に鑑賞し、全画面のライトボックスで細部まで楽しめます。",
    es: "Galleria es una galería de arte en línea donde se recorren 15 pinturas famosas como en una visita guiada. Se explora un muro de obras, se abre una, se avanza en el slideshow y se amplía en un lightbox a pantalla completa.",
  },

  // Note: classification
  level: "intermediate",
  category: "challenge",
  status: "ongoing",
  stack: ["next-js", "typescript", "react", "tailwind-css", "motion"],
  tags: ["responsive", "animation"],
  pinAspect: "giraffe",
  previews: {
    design: fullDesign,
    mockup: preview,
  },

  // Note: one entry per route
  pages: [
    {
      title: { en: "Home", ja: "ホーム", es: "Inicio" },
      description: {
        en: "A masonry wall with every painting. Each card shows the title and the artist over a soft gradient.",
        ja: "全作品が並ぶマソンリー壁。各カードに、グラデーション付きでタイトルと作者名が出ます。",
        es: "Un muro tipo masonry con todas las pinturas. Cada tarjeta muestra el título y el artista sobre un degradado suave.",
      },
      preview: devicesHome,
      links: { github: null, live: null },
    },
    {
      title: { en: "Artwork", ja: "作品ページ", es: "Obra" },
      description: {
        en: "One painting at a time, with its story, a link to the source, a progress bar, and a lightbox to see the image large.",
        ja: "1度に1作品を表示。解説、出典リンク、進行バー、大きく見るためのライトボックスがあります。",
        es: "Una pintura a la vez, con su historia, un enlace a la fuente, una barra de progreso y un lightbox para verla en grande.",
      },
      preview: devicesArtwork,
      links: { github: null, live: null },
    },
  ],

  // Note: same goals as the brief, in first person
  challenges: [
    {
      en: "I can see the best layout for each screen size.",
      ja: "画面の大きさに合った、最適なレイアウトで見られます。",
      es: "Puedo ver el mejor diseño para cada tamaño de pantalla.",
    },
    {
      en: "I can see hover states on every interactive element.",
      ja: "操作できる全ての要素で、ホバー時の見た目を確認できます。",
      es: "Puedo ver el estado hover en cada elemento interactivo.",
    },
    {
      en: "I can move through the slideshow and open each painting in a lightbox.",
      ja: "スライドショーを進め、各作品をライトボックスで開けます。",
      es: "Puedo avanzar por el slideshow y abrir cada pintura en un lightbox.",
    },
  ],

  // Note: new patterns only. Each one is real code from this project.
  lessons: [
    {
      text: {
        en: "A compound Dialog: one Context shares the open state, so the trigger and the window are separate pieces that never pass props to each other. Like a TV and its remote: two parts, one signal.",
        ja: "複合コンポーネントのDialog。Contextで開閉状態を共有するので、ボタンと窓は別部品のまま、propsを渡し合いません。テレビとリモコンのように、2つの部品が1つの信号でつながります。",
        es: "Un Dialog compuesto: un Context comparte el estado abierto, así el botón y la ventana son piezas separadas que no se pasan props. Como un televisor y su control remoto: dos partes, una sola señal.",
      },
      snippet: {
        language: "tsx",
        code: `// State
const DialogContext = createContext<DialogContextValue | null>(null);

export default function Dialog({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

// JSX
<Dialog>
  <DialogTrigger />
  <DialogWindow>{/* big image */}</DialogWindow>
</Dialog>`,
      },
    },
    {
      text: {
        en: "A portal sends the lightbox to a root node outside the page flow, so no parent can clip it or trap its z-index.",
        ja: "ポータルでライトボックスをページの流れの外にあるルートへ送ります。親要素に切り取られたり、z-indexに邪魔されたりしません。",
        es: "Un portal envía el lightbox a un nodo raíz fuera del flujo de la página, así ningún padre lo recorta ni limita su z-index.",
      },
      snippet: {
        language: "tsx",
        code: `// Logic
return !isOpen ? null : createPortal(
  <div className="fixed top-0 left-0 z-20 h-screen w-screen">
    {children}
  </div>,
  overlayRoot
);`,
      },
    },
    {
      text: {
        en: "A tiny custom hook to close the lightbox when I click outside. It adds a listener and cleans it up, like turning off the lights when I leave a room.",
        ja: "外側をクリックしたらライトボックスを閉じる、小さな自作フック。リスナーを足して、最後に片付けます。部屋を出るときに電気を消すのと同じです。",
        es: "Un hook propio muy pequeño que cierra el lightbox al hacer clic fuera. Agrega un listener y lo limpia, como apagar la luz al salir de un cuarto.",
      },
      snippet: {
        language: "js",
        code: `// Logic
export function useClickOutside(ref, callback) {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) callback();
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });
}`,
      },
    },
    {
      text: {
        en: "Tailwind v4 lets me turn the design system into tokens in CSS. Font size, line height and weight live together, so a class like text-heading-1 carries the whole style.",
        ja: "Tailwind v4なら、デザインシステムをCSSのトークンにできます。文字サイズ、行間、太さをまとめて持つので、text-heading-1 の1クラスで全部決まります。",
        es: "Tailwind v4 me deja convertir el sistema de diseño en tokens dentro del CSS. Tamaño, interlineado y peso viven juntos, así una clase como text-heading-1 trae todo el estilo.",
      },
      snippet: {
        language: "css",
        code: `/* Style */
@theme {
  --text-heading-1: 56px;
  --text-heading-1--line-height: 64px;
  --text-heading-1--font-weight: 700;

  --text-link-1: 12px;
  --text-link-1--letter-spacing: 2px;
}`,
      },
    },
    {
      text: {
        en: "A masonry wall with only CSS columns. No library: break-inside-avoid keeps each card whole, like not cutting a photo when I paste it in an album.",
        ja: "CSSのcolumnsだけでマソンリー壁を作りました。ライブラリは不要です。break-inside-avoidでカードが途中で切れません。アルバムに貼る写真を切らないのと同じです。",
        es: "Un muro masonry solo con columnas CSS. Sin librería: break-inside-avoid evita que una tarjeta se parta, como no cortar una foto al pegarla en un álbum.",
      },
      snippet: {
        language: "tsx",
        code: `// JSX
<div className="columns-1 sm:columns-2 lg:columns-4 gap-6 sm:gap-10">
  {artworks.map((artwork) => (
    <ArtworkLink key={artwork.slug} className="break-inside-avoid mb-6 sm:mb-10" />
  ))}
</div>`,
      },
    },
    {
      text: {
        en: "Prev, next and the progress bar all come from one number: the index of the current slug in the data. One source of truth, no extra state.",
        ja: "前へ、次へ、進行バーは、データ内の現在のslugの位置という1つの数字から決まります。情報源が1つなので、追加のstateは要りません。",
        es: "Anterior, siguiente y la barra de progreso salen de un solo número: la posición del slug actual en los datos. Una sola fuente de verdad, sin estado extra.",
      },
      snippet: {
        language: "tsx",
        code: `// Logic
const { artworkSlug } = useParams<{ artworkSlug: string }>();
const index = artworks.findIndex((a) => a.slug === artworkSlug);

const isFirst = index === 0;
const isLast = index === artworks.length - 1;
const progress = (index / (artworks.length - 1)) * 100;

// JSX
<motion.div style={{ width: progress + "%" }} transition={{ duration: 0.4, ease: "easeInOut" }} />`,
      },
    },
    {
      text: {
        en: "A full-width line inside a narrow container. The pseudo-element is as wide as the screen and shifts back by half of it, so the line touches both edges.",
        ja: "幅の狭いコンテナの中に、画面いっぱいの線を引く方法です。疑似要素を画面幅にして、半分だけ戻すので、線が両端に届きます。",
        es: "Una línea de ancho completo dentro de un contenedor angosto. El pseudo-elemento mide lo que la pantalla y se corre la mitad hacia atrás, así toca ambos bordes.",
      },
      snippet: {
        language: "tsx",
        code: `// Style
const containerStyles = cn(
  "sticky top-0 flex justify-between items-center bg-white",
  "before:absolute before:bottom-0 before:h-px before:w-screen before:bg-[#E5E5E5]",
  "before:left-1/2 before:translate-x-[-50vw]"
);`,
      },
    },
  ],

  nextSteps: [
    {
      en: "Make the dialog safe for server rendering: read the overlay root after mount, not during render.",
      ja: "ダイアログをサーバー描画でも安全にする。overlay-rootは描画中ではなく、マウント後に取得する。",
      es: "Hacer el dialog seguro para el render en servidor: leer el overlay root después del montaje, no durante el render.",
    },
    {
      en: "Add keyboard support: close the lightbox with Esc, and keep the focus inside it.",
      ja: "キーボード対応を足す。Escでライトボックスを閉じ、フォーカスを中に保つ。",
      es: "Agregar soporte de teclado: cerrar el lightbox con Esc y mantener el foco dentro.",
    },
    {
      en: "Load only the hero image that the screen needs, and write a real alt text for each painting.",
      ja: "画面に必要なヒーロー画像だけを読み込み、作品ごとに適切なaltテキストを書く。",
      es: "Cargar solo la imagen hero que la pantalla necesita y escribir un alt real para cada pintura.",
    },
    {
      en: "Add an auto-play mode with play and pause, so the slideshow can run on its own.",
      ja: "再生と停止ができる自動再生モードを追加し、スライドショーを自動で進める。",
      es: "Agregar un modo automático con play y pausa, para que el slideshow avance solo.",
    },
  ],

  credits: [
    {
      author: authors.frontEndMentor,
      work: "Galleria slideshow site challenge",
      url: "https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6",
      thanks: {
        en: "For the design, the assets and a brief that tests layout, slideshow logic and a lightbox in one project.",
        ja: "デザインとアセット、そしてレイアウト、スライドショーの仕組み、ライトボックスを1つで試せる課題をいただきました。",
        es: "Por el diseño, los assets y un reto que pone a prueba el layout, la lógica del slideshow y un lightbox en un solo proyecto.",
      },
    },
  ],
} satisfies Project;
