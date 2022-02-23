import About from "../components/About";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="pb-20 bg-layered-waves bg-bottom bg-repeat-x">
      <Navbar />
      <Header />
      <Projects />
      <About />
    </div>
  );
}

export async function getStaticProps({locale}) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}

