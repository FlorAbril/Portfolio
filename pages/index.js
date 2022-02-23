import axios from "axios";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { getProjects } from "../services/notionService";

export default function Home({projects}) {
  return (
    <div className="pb-20 bg-layered-waves bg-bottom bg-repeat-x">
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Florencia Soto | Frontend Developer</title>
        <meta name="title" content="Florencia Soto - Frontend Developer"/>
        <meta name="description" content="Buenos Aires • Frontend Developer • React.js"/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="Florencia Soto - Frontend Developer"/>
        <meta property="og:description" content="Buenos Aires • Frontend Developer • React.js"/>
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

        {/* <!-- Twitter --/> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:title" content="Florencia Soto - Frontend Developer"/>
        <meta property="twitter:description" content="Buenos Aires • Frontend Developer • React.js"/>
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
      </Head>
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
