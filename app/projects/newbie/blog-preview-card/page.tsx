import { Author, BlogImage, Card, Content, StylesSetup } from "./components"

export default function Page() {
  return <StylesSetup >
    <Card>
      <BlogImage />
      <Content />
      <Author />
    </Card>
  </StylesSetup>
}
