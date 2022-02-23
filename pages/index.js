import axios from "axios";
import About from "../components/About";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { getProjects } from "../services/notionService";

export default function Home({projects}) {
  return (
    <div className="pb-20 bg-layered-waves bg-bottom bg-repeat-x">
      <Navbar />
      <Header />
      <Projects projects={projects}/>
      <About />
    </div>
  );
}

export async function getStaticProps({locale}) {
  const response = await getProjects()
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
      projects: response
    }
  };
}
