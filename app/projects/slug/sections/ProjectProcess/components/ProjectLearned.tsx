import { CodeBlock } from "@/app/(home)/components/vendors/CodeBlock";
import { Lesson } from "@/app/data/projects/Proyect.types";
import { useLanguage } from "@/app/hooks/LanguageProvider";
import Subsection from "../../../components/Typography/Subsection";
import Subtitle from "../../../components/Typography/Subtitle";

type ProjectLearnedProps = {
  lessons: Lesson[]
}
export default function ProjectLearned({ lessons }: ProjectLearnedProps) {

  // What I learned
  // Use this section to recap over some of your major learnings while 
  // working through this project. Writing these out and providing code 
  // samples of areas you want to highlight is a great way to reinforce 
  // your own knowledge.
  return <Subsection id="learned">
    <Subtitle text="What I learned" />
    <h1>Some HTML code I'm proud of</h1>
    {lessons.map((lesson, i) => <Lesson key={i} {...lesson} />)}


  </Subsection>
}


function Lesson({ text, snippet: { language, code } }: Lesson) {
  //jp, ja en
  const { language: lang } = useLanguage();

  return <div>
    <p>{text[lang]}</p>
    <CodeBlock
      language={language}
      filename="DummyComponent.jsx"
      code={code}
    /></div>
}
