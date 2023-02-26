import Editor from "./components/Editor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Output from "./components/Output";

export default function App() {
  return (
    <>
      <Header />
      <section className="side">
        <Editor />
        <Output />
      </section>
      <Footer />
    </>
  )
}
