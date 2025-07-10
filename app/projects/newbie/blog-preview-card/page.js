import Author from "./components/Author"
import BlogImage from "./components/BlogImage"
import Card from "./components/Card"
import Content from "./components/Content"
import StylesSetup from "./components/StylesSetup"

function Page() {
  return <StylesSetup >
    <Card >
      <BlogImage />
      <Content />
      <Author />
    </Card>
  </StylesSetup>
}

export default Page
