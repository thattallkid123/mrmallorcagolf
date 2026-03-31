import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import RevealObserver from '../../components/RevealObserver'
import GolfCoursesClient from './GolfCoursesClient'
import { buildGolfCoursesMetadata } from '../../lib/page-metadata'
import { getGolfCoursesContent } from '../../lib/golf-courses-content'

export const metadata = buildGolfCoursesMetadata('en')

export default function GolfCourses() {
  const content = getGolfCoursesContent('en')

  return (
    <>
      <link rel="preload" as="image" href="/images/golf-courses.jpg" />
      <PageLayout>
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
              <Link href="/">{content.hero.breadcrumbHome}</Link> &nbsp;/&nbsp;{' '}
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
              <span className="page-hero__tag">{content.hero.tags[0]}</span>
              <span className="page-hero__tag">{content.hero.tags[1]}</span>
              <span className="page-hero__tag page-hero__tag--gold">{content.hero.tags[2]}</span>
              <span className="page-hero__tag">{content.hero.tags[3]}</span>
            </div>
          </div>
        </header>

        <GolfCoursesClient lang="en" />
      </PageLayout>
    </>
  )
}
