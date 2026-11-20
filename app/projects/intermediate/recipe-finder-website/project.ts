import { Project } from "@/app/data/projects/Proyect.types";
// Note: adjust these import paths to where this file lives in your portfolio.
// Suggested home: projects/front-end-mentor/intermediate/recipe-finder-website/project.ts
// import { authors } from "../../../../data/authors";

// Note: assets are left blank on purpose. Add the real files, then remove the TODOs.
// import aboutPreview from "./assets/about.png"; // TODO
// import designPreview from "./assets/design.jpg"; // TODO
// import homePreview from "./assets/home.png"; // TODO
// import mockupPreview from "./assets/mockup.jpg"; // TODO
// import recipeDetailPreview from "./assets/recipe-detail.png"; // TODO
// import recipesPreview from "./assets/recipes.png"; // TODO

const GITHUB = "https://github.com/emedranoh19a/recipe-finder-website";

export const recipeFinderWebsite: Project = {
  // Identity
  slug: "recipe-finder-website",
  title: {
    en: "Recipe Finder Website",
    ja: "レシピファインダー",
    es: "Buscador de recetas",
  },
  description: {
    en: "Healthy cooking shouldn't eat your whole evening. This recipe finder helps busy people browse quick, whole-food dishes, cut the list by prep and cook time, and open a clear step-by-step page in seconds.",
    ja: "ヘルシーな料理に、夜の時間を丸ごと使う必要はありません。このレシピファインダーは、忙しい人が手早く作れる自然食のレシピを探し、準備時間と調理時間で絞り込み、わかりやすい手順ページをすぐに開けるようにします。",
    es: "Cocinar sano no debería llevarse toda tu noche. Este buscador de recetas ayuda a personas ocupadas a explorar platos rápidos y naturales, filtrar por tiempo de preparación y cocción, y abrir una guía clara paso a paso en segundos.",
  },

  // Classification
  level: "intermediate",
  category: "challenge",
  // Note: "ongoing" because the search bar is not wired yet. Switch to "completed" once it is.
  status: "ongoing",
  stack: ["typescript", "react", "next-js", "tailwind-css"],
  tags: ["filter", "responsive"],
  pinAspect: "standard",
  previews: {
    design: designPreview,
    mockup: mockupPreview,
  },

  // Pages
  pages: [
    {
      title: { en: "Home", ja: "ホーム", es: "Inicio" },
      description: {
        en: "A warm landing page with a hero, the key benefits, a real-life section and a call to action.",
        ja: "ヒーロー、主な特長、日常のシーン、行動を促すセクションを備えた、あたたかいトップページです。",
        es: "Una página de inicio cálida con portada, beneficios clave, una sección de vida real y una llamada a la acción.",
      },
      preview: homePreview,
      links: { github: `${GITHUB}/blob/main/app/page.tsx`, live: null },
    },
    {
      title: { en: "About", ja: "私たちについて", es: "Acerca de" },
      description: {
        en: "Tells the mission, the reason the site exists and the food philosophy behind every recipe.",
        ja: "サイトの使命、存在する理由、そしてすべてのレシピに込めた食の考え方を伝えます。",
        es: "Cuenta la misión, la razón de ser del sitio y la filosofía de comida detrás de cada receta.",
      },
      preview: aboutPreview,
      links: { github: `${GITHUB}/tree/main/app/about`, live: null },
    },
    {
      title: { en: "Recipes", ja: "レシピ一覧", es: "Recetas" },
      description: {
        en: "A grid of eight recipes with select menus to set a max prep time and a max cook time.",
        ja: "8つのレシピをグリッドで表示し、最大準備時間と最大調理時間を選んで絞り込めます。",
        es: "Una cuadrícula de ocho recetas con menús para elegir un tiempo máximo de preparación y de cocción.",
      },
      preview: recipesPreview,
      links: { github: `${GITHUB}/tree/main/app/recipes`, live: null },
    },
    {
      title: { en: "Recipe Detail", ja: "レシピ詳細", es: "Detalle de receta" },
      description: {
        en: "Shows the photo, cooking stats, ingredients and steps, plus three more recipes to keep exploring.",
        ja: "写真、調理データ、材料、手順に加えて、次に見たい3つのレシピを紹介します。",
        es: "Muestra la foto, los datos de cocina, los ingredientes y los pasos, más tres recetas para seguir explorando.",
      },
      preview: recipeDetailPreview,
      links: {
        github: `${GITHUB}/tree/main/app/recipes/%5Bslug%5D`,
        live: null,
      },
    },
  ],

  // Process
  challenges: [
    {
      en: "I wanted to build the home, about, recipes index and recipe detail pages.",
      ja: "ホーム、私たちについて、レシピ一覧、レシピ詳細の4ページを作りたいと考えました。",
      es: "Quería construir las páginas de inicio, acerca de, índice de recetas y detalle de receta.",
    },
    {
      en: "I wanted users to search for recipes by name or ingredient.",
      ja: "ユーザーが名前や材料でレシピを検索できるようにしたいと考えました。",
      es: "Quería que las personas pudieran buscar recetas por nombre o ingrediente.",
    },
    {
      en: "I wanted users to filter recipes by max prep time or max cook time.",
      ja: "ユーザーが最大準備時間や最大調理時間でレシピを絞り込めるようにしたいと考えました。",
      es: "Quería que las personas pudieran filtrar recetas por tiempo máximo de preparación o de cocción.",
    },
    {
      en: "I wanted the layout to look great on every screen size.",
      ja: "どの画面サイズでも見やすいレイアウトにしたいと考えました。",
      es: "Quería que el diseño se viera bien en cualquier tamaño de pantalla.",
    },
    {
      en: "I wanted clear hover and focus states on every interactive element.",
      ja: "すべての操作できる要素に、わかりやすいホバーとフォーカスの状態をつけたいと考えました。",
      es: "Quería estados de hover y de foco claros en todos los elementos interactivos.",
    },
  ],

  lessons: [
    {
      text: {
        en: "I used CSS anchor positioning to attach the mobile navigation popover to its button. No manual top and left math.",
        ja: "CSSのアンカーポジショニングで、モバイルナビのポップオーバーをボタンに結びつけました。top や left の計算は不要です。",
        es: "Usé el anclaje de posición de CSS para unir el menú móvil a su botón. Sin cálculos manuales de top y left.",
      },
      snippet: {
        language: "tsx",
        code: `// Note: the button is the anchor, the menu is the target
<button style={{ anchorName: "--navbar" }} />

<div
  style={{
    position: "absolute",
    positionAnchor: "--navbar",
    positionArea: "bottom span-left", // Note: below the button, growing to the left
  }}
/>`,
      },
    },
    {
      text: {
        en: "A small helper that returns a boolean keeps the filter clean. Here, null means no limit, so one logical operator can join two conditions.",
        ja: "真偽値を返す小さなヘルパーで、絞り込みがすっきりしました。ここでは null が「上限なし」を表すので、論理演算子ひとつで2つの条件をつなげます。",
        es: "Un pequeño helper que devuelve un booleano mantiene el filtro limpio. Aquí null significa sin límite, así un solo operador lógico une dos condiciones.",
      },
      snippet: {
        language: "ts",
        code: `// Logic
function isWithinLimit(minutes: number, max: number | null) {
  return max === null || minutes <= max; // Note: null passes, 0 is a real limit
}`,
      },
    },
    {
      text: {
        en: "I practiced rendering dynamic data with Next.js: one route builds every recipe page, and unknown slugs return a 404.",
        ja: "Next.jsで動的データを描画する練習をしました。ひとつのルートがすべてのレシピページを生成し、存在しないスラッグは404になります。",
        es: "Practiqué el renderizado de datos dinámicos con Next.js: una sola ruta genera todas las páginas de recetas y los slugs desconocidos devuelven un 404.",
      },
      snippet: {
        language: "tsx",
        code: `export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export const dynamicParams = false; // Note: any other slug -> 404`,
      },
    },
    {
      text: {
        en: "A type predicate tells TypeScript that, after a filter, the array holds only real recipes and no undefined values.",
        ja: "型述語を使うと、filter のあとの配列には undefined がなく、本物のレシピだけが入っていることを TypeScript に伝えられます。",
        es: "Un predicado de tipo le dice a TypeScript que, tras un filter, el arreglo solo tiene recetas reales y ningún undefined.",
      },
      snippet: {
        language: "ts",
        code: `const nextRecipes: Recipe[] = nextIndexes
  .map((index) => recipes.find((item) => item.id === index))
  .filter((recipe): recipe is Recipe => recipe !== undefined);`,
      },
    },
    {
      text: {
        en: "One small updater with a typed key can change any filter, so the parent keeps a single source of truth.",
        ja: "型付きのキーを受け取る小さな更新関数ひとつで、どのフィルターも変更できます。親コンポーネントが唯一の情報源を保てます。",
        es: "Un pequeño actualizador con una clave tipada puede cambiar cualquier filtro, y el padre conserva una única fuente de verdad.",
      },
      snippet: {
        language: "ts",
        code: `function updateFilter(key: keyof FilterValues, value: number | null) {
  setFilters((prev) => ({ ...prev, [key]: value })); // Note: other filters stay safe
}`,
      },
    },
    {
      text: {
        en: "Typing a component with the native element's props lets my Button and SearchBar accept every attribute, with no extra work.",
        ja: "ネイティブ要素のpropsで型を付けると、ButtonやSearchBarがすべての属性をそのまま受け取れ、追加の手間がいりません。",
        es: "Tipar un componente con las props del elemento nativo permite que mi Button y mi SearchBar acepten todos los atributos sin trabajo extra.",
      },
      snippet: {
        language: "tsx",
        code: `type ButtonProps = ComponentProps<"button"> & { text: string };

export default function Button({ text, className, ...otherProps }: ButtonProps) {
  return <button className={cn("px-8 py-4", className)} {...otherProps}>{text}</button>;
}`,
      },
    },
  ],

  nextSteps: [
    {
      en: "Connect the search bar so users can find recipes by name or ingredient.",
      ja: "検索バーをつなぎ、名前や材料でレシピを探せるようにします。",
      es: "Conectar la barra de búsqueda para encontrar recetas por nombre o ingrediente.",
    },
    {
      en: "Move between recipes with a circular list. I have been too focused on front end work, so I want to refresh my data structures.",
      ja: "レシピの移動を循環リストで実装します。フロントエンドに集中しすぎていたので、データ構造の知識を見直したいです。",
      es: "Navegar entre recetas con una lista circular. Me he centrado demasiado en el front end y quiero repasar estructuras de datos.",
    },
    {
      en: "Style interactive states with Tailwind selectors only, instead of using state for conditional styles.",
      ja: "条件付きスタイルをstateで切り替えず、Tailwindのセレクターだけで操作時の状態をスタイリングする練習を増やします。",
      es: "Practicar más el estilo de estados interactivos solo con selectores de Tailwind, en lugar de usar estado para estilos condicionales.",
    },
  ],

  credits: [
    {
      author: authors.frontEndMentor,
      work: "Recipe finder website design",
      url: "https://www.frontendmentor.io/challenges/recipe-finder-website--Ui-TZTPxN",
      thanks: {
        en: "For the designs and the chance to become a better developer.",
        ja: "デザインと、より良い開発者になる機会をいただきました。",
        es: "Por los diseños y la oportunidad de ser mejor desarrollador.",
      },
    },
    {
      author: authors.joshComeau,
      work: "Getting Started with Anchor Positioning",
      url: "https://www.joshwcomeau.com/css/anchor-positioning",
      thanks: {
        en: "His article made anchor positioning click for me.",
        ja: "彼の記事のおかげで、アンカーポジショニングがすっと理解できました。",
        es: "Su artículo hizo que el anclaje de posición por fin tuviera sentido para mí.",
      },
    },
    {
      author: authors.claude,
      work: "AI coding partner",
      url: "https://www.anthropic.com/claude",
      thanks: {
        en: "For patient explanations, a clean filter idea and help with strict type checks.",
        ja: "辛抱強い説明、すっきりしたフィルターの発想、そして厳格な型チェックの修正を手伝ってくれました。",
        es: "Por las explicaciones pacientes, una idea limpia para el filtro y la ayuda con los tipos estrictos.",
      },
    },
  ],

  // AI collaboration
  ai: {
    tool: authors.claude,
    contributions: [
      {
        kind: "explanation",
        text: {
          en: "I forgot how to build a fieldset where only one option can be picked. Even at an intermediate level, a developer can mix up checkboxes and radio buttons, or forget how to center a div. Claude reminded me that radios are the right tool.",
          ja: "選択肢をひとつだけ選べるfieldsetの作り方を忘れていました。中級者でも、チェックボックスとラジオボタンを取り違えたり、divの中央寄せを忘れたりするものです。ラジオボタンが正解だと、Claudeが思い出させてくれました。",
          es: "Olvidé cómo crear un fieldset donde solo se pueda elegir una opción. Incluso en nivel intermedio, un desarrollador puede confundir checkboxes con radios, o hasta olvidar cómo centrar un div. Claude me recordó que los radios son la herramienta correcta.",
        },
      },
      {
        kind: "refactoring",
        text: {
          en: "Claude suggested a clean way to filter the recipes: a helper that returns a boolean, joined with a logical operator.",
          ja: "Claudeが、レシピを絞り込むすっきりした方法を提案してくれました。真偽値を返すヘルパーを、論理演算子でつなぐ形です。",
          es: "Claude me sugirió una forma limpia de filtrar las recetas: un helper que devuelve un booleano, unido con un operador lógico.",
        },
      },
      {
        kind: "debugging",
        text: {
          en: "We fixed several TypeScript errors that only appeared in the strict deployment build.",
          ja: "デプロイ時の厳格なビルドでのみ表示されるTypeScriptのエラーを、いくつか修正しました。",
          es: "Corregimos varios errores de TypeScript que solo aparecían en la compilación estricta del despliegue.",
        },
      },
    ],
  },
};
