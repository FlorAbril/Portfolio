import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LocaleSwitcher = () => {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = locales.filter((locale) => locale !== activeLocale)

  const langImg = {
    "en-US": "en.png",
    "es-ES": "es.png",
  }

  return (
    <div className='flex flex-wrap gap-x-2 items-center'>
      {locales.map((locale) => {
        const { pathname, query, asPath } = router
        return (
          <Link href={{ pathname, query }} as={asPath} locale={locale}
            className='cursor-pointer' key={locale}
          >
            <Image
              src={`/${langImg[locale]}`}
              width={20}
              height={20}
              alt={locale}
              className={`${locale !== activeLocale ? 'brightness-50' : ''}
               cursor-pointer hover:brightness-100`
              }

            />
          </Link>
        )
      })}
    </div>
  )
}

export default LocaleSwitcher
