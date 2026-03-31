import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import GolfCoursesClient from './GolfCoursesClient'

function joinHref(locale, path) {
  if (locale === 'en') return path
  return `/${locale}${path === '/' ? '' : path}`
}

export default function GolfCoursesView({ locale = 'en', content }) {
  return (
    <>
      <link rel="preload" as="image" href="/images/golf-courses.jpg" />
      <PageLayout lang={locale === 'en' ? undefined : locale}>
        <RevealObserver />

        <header
          className="page-hero"
          style={{
            minHeight: '100vh',
            backgroundImage:
              'linear-gradient(to right, rgba(26,25,22,0.78) 0%, rgba(26,25,22,0.45) 50%, rgba(26,25,22,0.2) 100%), url(/images/golf-courses.jpg)',
            backgroundSize: 'auto, cover',
            backgroundPosition: 'center, center 40%',
          }}
        >
          <div className="page-hero__inner">
            <p className="breadcrumb">
              <Link href={joinHref(locale, '/')}>{content.hero.breadcrumbHome}</Link> &nbsp;/&nbsp;{' '}
              <span style={{ color: 'var(--gold-light)' }}>{content.hero.breadcrumbCurrent}</span>
            </p>
            <h1>
              {content.hero.title.split(' - ').map((line, index, arr) => (
                <span key={index}>
                  {line}
                  {index < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <div className="page-hero__meta">
              {content.hero.tags.map((tag, index) => (
                <span
                  key={tag}
                  className={`page-hero__tag${index === 2 ? ' page-hero__tag--gold' : ''}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <GolfCoursesClient lang={locale} />
      </PageLayout>
    </>
  )
}
