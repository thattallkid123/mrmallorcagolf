const path = require('path')
const { pathToFileURL } = require('url')

const LOCALES = ['en', 'de', 'es', 'fr', 'nl', 'sv', 'zh']

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

async function importModule(relativePath) {
  const absolutePath = path.join(__dirname, '..', relativePath)
  return import(pathToFileURL(absolutePath).href)
}

async function main() {
  const offersModule = await importModule('src/lib/offers-content.js')
  const homepageModule = await importModule('src/lib/homepage-content.js')
  const playModule = await importModule('src/lib/play-with-a-pro-content.js')
  const contactModule = await importModule('src/lib/contact-content.js')
  const metadataModule = await importModule('src/lib/page-metadata.js')
  const servicePricingModule = await importModule('src/lib/service-pricing-data.js')

  const {
    OFFER_IDS,
    getHomeMultiDayBody,
    getOfferById,
    getPlayHeroBody,
    getPlayMultiDayDetail,
    getStructuredOfferCatalog,
  } = offersModule
  const { getHomeContent } = homepageModule
  const { getPlayWithAProContent } = playModule
  const { getContactContent } = contactModule
  const { buildPlayWithAProMetadata } = metadataModule

  for (const locale of LOCALES) {
    const soloOffer = getOfferById(OFFER_IDS.solo, locale)
    const groupOffer = getOfferById(OFFER_IDS.group, locale)

    const homeContent = getHomeContent(locale)
    const playContent = getPlayWithAProContent(locale)
    const contactContent = getContactContent(locale)
    const playMetadata = buildPlayWithAProMetadata(locale)

    // Homepage packages no longer display pricing (pricing moved to /play-with-a-pro page)
    // So we only check that packages section exists with title/intro
    assert(homeContent.packages?.title, `Homepage packages missing title for locale ${locale}`)

    // NOTE (2026-08-23 check audit): play-with-a-pro-content.js and
    // contact-content.js derive their solo/group price fields FROM
    // soloOffer/groupOffer at import time (they no longer hand-type these
    // prices) — so the four assertions below can't catch independent value
    // drift, that failure mode doesn't exist anymore. They still catch a real
    // class of bug: the derivation itself breaking (wrong field referenced,
    // wrong tier index, a broken merge) — confirmed by deliberately breaking
    // the price-lookup reference in play-with-a-pro-content.js and seeing
    // this fail. Keep them; just don't read a pass here as "prices agree
    // independently," read it as "the plumbing between the two files works."
    const playPackagePrices = (playContent.packages?.tiers || []).map((tier) => tier.price).filter(Boolean)
    assert(
      playPackagePrices.includes(soloOffer.priceDisplay),
      `Play-with-a-pro tiers missing solo price for locale ${locale}`,
    )
    assert(
      playPackagePrices.includes(groupOffer.priceDisplay),
      `Play-with-a-pro tiers missing group price for locale ${locale}`,
    )

    assert(playContent.hero?.body === getPlayHeroBody(locale), `Play hero body drifted for locale ${locale}`)
    assert(
      playContent.packages?.multiDay?.detail === getPlayMultiDayDetail(locale),
      `Play multi-day detail drifted for locale ${locale}`,
    )
    assert(
      homeContent.packages?.multiDay?.body === getHomeMultiDayBody(locale),
      `Homepage multi-day body drifted for locale ${locale}`,
    )

    const contactServiceTypes = contactContent.form?.serviceTypes || []
    const contactFormats = contactContent.form?.pwapFormats || []
    const contactSolo = contactFormats.find(([id]) => id === OFFER_IDS.solo)
    const contactGroup = contactFormats.find(([id]) => id === OFFER_IDS.group)
    assert(contactServiceTypes.some(([id]) => id === 'trip-planning'), `Contact trip-planning option missing for locale ${locale}`)
    assert(contactServiceTypes.some(([id]) => id === 'both'), `Contact both option missing for locale ${locale}`)
    assert(contactSolo?.[2] === soloOffer.contactPrice, `Contact solo format drifted for locale ${locale}`)
    assert(contactGroup?.[2] === groupOffer.contactPrice, `Contact group format drifted for locale ${locale}`)

    assert(
      playMetadata.description === offersModule.getPlayWithAProMetadataDescription(locale),
      `Play-with-a-pro metadata drifted for locale ${locale}`,
    )
  }

  const structuredCatalog = getStructuredOfferCatalog()
  assert(structuredCatalog.length === 3, 'Structured offer catalog should expose exactly 3 offers')
  assert(structuredCatalog[0].price === String(servicePricingModule.SERVICE_PRICES.solo), 'Structured solo offer price drifted')
  assert(structuredCatalog[1].price === String(servicePricingModule.SERVICE_PRICES.group), 'Structured group offer price drifted')

  console.log('Offer consistency checks passed.')
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
