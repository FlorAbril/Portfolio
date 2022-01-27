const About = () => {
  return(
    <div className="p-4 w-full bg-layered-waves">
      <h1 className="text-lg text-center mb-4 mt-16 md:text-3xl" id="about">About</h1>
      <p className="text-sm max-w-lg m-auto backdrop-blur-xs text-justify">
        I&apos;m Florencia, I studied programing at a technical school in Buenos Aires, Argentina. 
        But I learned a lot by myself, like frameworks, libraries, and other tecnologies.
        I&apos;m currently looking for my first job experience.
        I&apos;m intrested to work in a team where I can apply what I learned, 
        face new challenges and give my best to grow as a developer and person.
        I&apos;m colaborative and attentive, I like to hear ideas and give mine to others to reach the best results.
        I know that I will work great in a team that has this values. 
        If you want to contact me, please send me an email, or a message on my social networks. 
        I&apos;ll get back to you as soon as possible.

      </p>
      <div className="flex w-fit m-auto backdrop-blur-xs pt-2">
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