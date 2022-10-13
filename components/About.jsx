import {useTranslations} from 'next-intl';

const About = () => {
  const t = useTranslations('About');
  const hardSkills = [
    "hard-skills.list.html",
    "hard-skills.list.css",
    "hard-skills.list.js",
    "hard-skills.list.ts",
    "hard-skills.list.react",
    "hard-skills.list.git",
    "hard-skills.list.github",
  ]
  const softSkills = [
    "soft-skills.list.autonomy",
    "soft-skills.list.attention-to-detail",
    "soft-skills.list.teamwork",
    "soft-skills.list.growth-mindset",
  ]

  return(
    <div className="p-4 w-fit m-auto">
      <h1 className="text-lg text-center mb-4 mt-16 md:text-3xl" id="about">
        {t('title')}
      </h1>
      <p className="
        text-sm max-w-lg m-auto backdrop-blur-xs text-center mb-4"
      >
        {t('text')}
        <br/>
        <a href="mailto:florenciasoto801@gmail.com"
          className="italic font-medium hover:underline">
           ✉ florenciasoto801@gmail.com
        </a>
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-4
        w-fit m-auto pt-2 py-4 px-6
        backdrop-blur-xs bg-black/70 rounded-md"
      >
        <div>
          <h2 className="font-medium">{t('hard-skills.title')}</h2>
          <ul>
           {hardSkills.map(skill => (
              <li key={skill}>
                • {t(skill)}
              </li>
           ))}
          </ul>
        </div>
        <div>
          <h2 className="font-medium">{t('soft-skills.title')}</h2>
          <ul>
            {softSkills.map(skill => (
              <li key={skill}>
                • {t(skill)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;