const About = () => {
  return(
    <div className="p-4 w-full">
      <h1 className="text-lg text-center mb-4 mt-16 md:text-3xl" id="about">About</h1>
      <p className="
        text-sm max-w-lg m-auto backdrop-blur-xs text-center mb-4"
      >
        I&apos;m Florencia, I&apos;m a Trainee Frontend Developer from Buenos Aires, Argentina. <br/>
        I&apos;m currently looking for my first job experience where I can apply what I learned, 
        face new challenges and give my best to grow as a developer and person. <br/>
        If you want to contact me, please send me an email, or a message on my social networks. 
        I&apos;ll get back to you as soon as possible. <br/>
        <a href="mailto:florenciasoto801@gmail.com"
          className="italic font-medium hover:underline">
           ✉ florenciasoto801@gmail.com
        </a>
      </p>
      <div className="flex w-fit m-auto backdrop-blur-xs pt-2  border-2 border-blue-500/50 rounded-md p-4">
        <div>
          <h2 className="font-medium">Hard Skills</h2>
          <ul>
            <li>• HTML</li>
            <li>• CSS</li>
            <li>• JavaScript</li>
            <li>• React.js</li>
            <li>• Git</li>
            <li>• GitHub</li>
            <li>• Scrum Methodology</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium">Soft Skills</h2>
          <ul>
          <li>• Commitment</li>
          <li>• Growth mindset</li>
          <li>• Teamwork</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;