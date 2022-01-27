import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <About />
    </div>
  );
}
