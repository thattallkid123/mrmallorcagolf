import { permanentRedirect } from 'next/navigation'

import PageLayout from '../../components/PageLayout'
import HomeLayout from '../HomeLayout'
import HomePageInner from '../HomePageInner'
import AboutView from '../(en)/about/AboutView'
import ContactForm from '../(en)/contact/ContactForm'
import GolfCoursesView from '../(en)/golf-courses/GolfCoursesView'
import GuidesIndexView from '../(en)/guides/GuidesIndexView'
import PlanYourTripView from '../(en)/plan-your-trip/PlanYourTripView'
import PlayWithAProView from '../(en)/play-with-a-pro/PlayWithAProView'

import { getAboutContent } from '../../lib/about-content'
import { getGolfCoursesContent } from '../../lib/golf-courses-content'
import { getGuidesContent } from '../../lib/guides-content'
import { getPlanYourTripContent } from '../../lib/plan-your-trip-content'
import { getPlayWithAProContent } from '../../lib/play-with-a-pro-content'
import {
  buildAboutMetadata,
  buildContactMetadata,
  buildGolfCoursesMetadata,
  buildGuidesIndexMetadata,
  buildHomeMetadata,
  buildPlanYourTripMetadata,
  buildPlayWithAProMetadata,
} from '../../lib/page-metadata'

export const noIndexMetadata = { robots: { index: false, follow: false } }

export function createHomeMetadata(locale) {
  return buildHomeMetadata(locale)
}

export function createHomePage(locale) {
  return function LocaleHomePage() {
    return (
      <HomeLayout lang={locale}>
        <HomePageInner locale={locale} />
      </HomeLayout>
    )
  }
}

export function createAboutMetadata(locale) {
  return buildAboutMetadata(locale)
}

export function createAboutPage(locale) {
  return function LocaleAboutPage() {
    return <AboutView content={getAboutContent(locale)} locale={locale} />
  }
}

export function createContactMetadata(locale) {
  return buildContactMetadata(locale)
}

export function createContactPage(locale) {
  return function LocaleContactPage() {
    return (
      <PageLayout lang={locale} navTransparent={false}>
        <ContactForm locale={locale} />
      </PageLayout>
    )
  }
}

export function createGolfCoursesMetadata(locale) {
  return buildGolfCoursesMetadata(locale)
}

export function createGolfCoursesPage(locale) {
  return function LocaleGolfCoursesPage() {
    return <GolfCoursesView locale={locale} content={getGolfCoursesContent(locale)} />
  }
}

export function createGuidesIndexMetadata(locale) {
  return buildGuidesIndexMetadata(locale)
}

export function createGuidesIndexPage(locale) {
  return function LocaleGuidesIndexPage() {
    return <GuidesIndexView locale={locale} pageLang={locale} content={getGuidesContent(locale)} />
  }
}

export function createPlanYourTripMetadata(locale) {
  return buildPlanYourTripMetadata(locale)
}

export function createPlanYourTripPage(locale) {
  return function LocalePlanYourTripPage() {
    return (
      <PageLayout lang={locale} navTransparent={false}>
        <PlanYourTripView locale={locale} content={getPlanYourTripContent(locale)} />
      </PageLayout>
    )
  }
}

export function createPlayWithAProMetadata(locale) {
  return buildPlayWithAProMetadata(locale)
}

export function createPlayWithAProPage(locale) {
  return function LocalePlayWithAProPage() {
    return <PlayWithAProView content={getPlayWithAProContent(locale)} locale={locale} />
  }
}

export function createCoachingRedirectPage(locale) {
  return function LocaleCoachingRedirectPage() {
    permanentRedirect(`/${locale}/play-with-a-pro`)
  }
}
