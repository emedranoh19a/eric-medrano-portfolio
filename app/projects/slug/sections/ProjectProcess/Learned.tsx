import Subtitle from "../../components/Typography/Subtitle";

function CodeBlockDemo() {
    const code = `const DummyComponent = () => {
  const [count, setCount] = React.useState(0);
  
  const handleClick = () => {
    setCount(prev => prev + 1);
  };
 
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};
`;

    return (
        <div className="max-w-3xl mx-auto w-full">
            <CodeBlock
                language="jsx"
                filename="DummyComponent.jsx"
                highlightLines={[9, 13, 14, 18]}
                code={code}
            />
        </div>
    );
}
export default function LearnedThings() {

    // What I learned
    // Use this section to recap over some of your major learnings while 
    // working through this project. Writing these out and providing code 
    // samples of areas you want to highlight is a great way to reinforce 
    // your own knowledge.
    return <div>
        <Subtitle text="What I learned" />
        <h1>Some HTML code I'm proud of</h1>
        <CodeBlockDemo />
        {/* .proud-of-this-css {
                         color: papayawhip;
 } */}
        {/* const proudOfThisFunc = () => {
                         console.log('🎉')
                     } */}
        <h1>Some HTML code I'm proud of</h1>
        {/* .proud-of-this-css {
                         color: papayawhip;
 } */}
        {/* const proudOfThisFunc = () => {
                         console.log('🎉')
                     } */}
        <h1>Some HTML code I'm proud of</h1>
        {/* .proud-of-this-css {
                         color: papayawhip;
 } */}
        {/* const proudOfThisFunc = () => {
                         console.log('🎉')
                     } */}
    </div>
}
