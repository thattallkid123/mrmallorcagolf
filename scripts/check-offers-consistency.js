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

    const contactExperiences = contactContent.form?.experiences || []
    const contactSolo = contactExperiences.find(([id]) => id === OFFER_IDS.solo)
    const contactGroup = contactExperiences.find(([id]) => id === OFFER_IDS.group)
    assert(contactSolo?.[2] === soloOffer.contactPrice, `Contact solo option drifted for locale ${locale}`)
    assert(contactGroup?.[2] === groupOffer.contactPrice, `Contact group option drifted for locale ${locale}`)

    assert(
      playMetadata.description === offersModule.getPlayWithAProMetadataDescription(locale),
      `Play-with-a-pro metadata drifted for locale ${locale}`,
    )
  }

  const structuredCatalog = getStructuredOfferCatalog()
  assert(structuredCatalog.length === 3, 'Structured offer catalog should expose exactly 3 offers')
  assert(structuredCatalog[0].price === '495', 'Structured solo offer price drifted')
  assert(structuredCatalog[1].price === '950', 'Structured group offer price drifted')

  console.log('Offer consistency checks passed.')
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
