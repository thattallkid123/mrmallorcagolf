import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import { buildLegalMetadata } from '../../../lib/page-metadata'

export const metadata = buildLegalMetadata('privacy-policy', 'fr')

export default function PrivacyPolicyFR() {
  return (
    <PageLayout>
      <div className="legal-page">
        <div className="legal-page__inner">

          <div className="legal-page__hero">
            <p className="breadcrumb" style={{marginBottom:'2rem'}}>
              <Link href="/fr">Accueil</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Politique de confidentialité</span>
            </p>

            <h1 style={{marginBottom:'0.5rem'}}>Politique de confidentialité</h1>
            <p className="legal-page__updated">Dernière mise à jour : août 2026</p>
          </div>

          <section className="legal-section">
            <h2>1. Qui nous sommes</h2>
            <p>Ce site est exploité par Andy Griffiths, exerçant sous le nom commercial <strong>Mr Mallorca Golf</strong>, basé à Majorque, en Espagne.</p>
            <p>Pour toute question relative à la protection des données, contactez-nous à : <a href="mailto:info@mrmallorcagolf.com">info@mrmallorcagolf.com</a></p>
          </section>

          <section className="legal-section">
            <h2>2. Les données que nous collectons</h2>
            <p>Nous collectons des données personnelles uniquement lorsque vous nous les fournissez volontairement ou lorsque vous visitez notre site. Cela inclut :</p>
            <ul>
              <li><strong>Formulaire de contact :</strong> votre nom, votre adresse e-mail, votre numéro de téléphone et tout message que vous nous envoyez</li>
              <li><strong>Demandes par e-mail et WhatsApp :</strong> votre nom et vos coordonnées lorsque vous nous contactez directement</li>
              <li><strong>Course Selector et formulaires d&rsquo;inscription par e-mail :</strong> votre adresse e-mail et toute information facultative que vous choisissez de fournir en demandant des notes de planification ou un suivi de votre sélection</li>
              <li><strong>Données analytiques :</strong> données d&rsquo;usage anonymes collectées par Google Analytics (voir la section 5)</li>
            </ul>
            <p>Nous ne collectons pas de données de carte bancaire. Tous les paiements sont traités hors ligne par virement bancaire.</p>
          </section>

          <section className="legal-section">
            <h2>3. Comment nous utilisons vos données</h2>
            <p>Nous utilisons les données que vous fournissez pour :</p>
            <ul>
              <li>répondre à votre demande et organiser votre expérience de golf</li>
              <li>communiquer avec vous au sujet de votre réservation ou de votre visite prévue</li>
              <li>envoyer les résultats du Course Selector et, si vous avez choisi de vous y inscrire, nos notes occasionnelles de planification golf à Majorque</li>
              <li>améliorer nos services à partir de tendances d&rsquo;usage générales (analytique uniquement)</li>
            </ul>
            <p>Nous n&rsquo;utiliserons pas vos données à des fins de prospection non sollicitée sans votre consentement explicite. Si vous vous inscrivez pour recevoir les résultats du Course Selector ou nos e-mails de planification, vous pouvez vous désinscrire à tout moment via le lien présent dans l&rsquo;e-mail ou en nous contactant directement.</p>
          </section>

          <section className="legal-section">
            <h2>4. Base juridique du traitement</h2>
            <p>Nous traitons vos données personnelles sur les bases juridiques suivantes, conformément au RGPD et à la loi espagnole de protection des données (LOPDGDD) :</p>
            <ul>
              <li><strong>Nécessité contractuelle :</strong> pour honorer ou préparer une réservation en réponse à votre demande</li>
              <li><strong>Intérêt légitime :</strong> pour répondre à vos messages et gérer nos activités</li>
              <li><strong>Consentement :</strong> lorsque vous avez expressément donné votre accord, par exemple en soumettant un formulaire de contact ou en vous inscrivant à de futures communications</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Google Analytics</h2>
            <p>Ce site utilise Google Analytics pour comprendre comment les visiteurs utilisent notre site. Google Analytics collecte des données d&rsquo;usage telles que les pages consultées, le temps passé et la localisation géographique approximative (pays/région), rattachées à un identifiant généré aléatoirement et stocké dans votre navigateur. Cet identifiant est pseudonymisé &mdash; il n&rsquo;inclut ni votre nom ni vos coordonnées &mdash; mais il ne s&rsquo;agit pas de données totalement anonymes.</p>
            <p>Les données Google Analytics sont traitées par Google LLC, certifiée dans le cadre du Data Privacy Framework UE-États-Unis, conformément à sa politique de confidentialité. Vous pouvez vous opposer au suivi Google Analytics à tout moment en installant le <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">module complémentaire de désactivation de Google Analytics</a>.</p>
          </section>

          <section className="legal-section">
            <h2>6. Cookies</h2>
            <p>Ce site utilise des cookies uniquement à des fins Google Analytics. Il s&rsquo;agit de cookies analytiques qui nous aident à comprendre l&rsquo;usage du site. Aucun cookie publicitaire ni pixel de suivi n&rsquo;est utilisé.</p>
            <p>La plupart des navigateurs vous permettent de refuser ou de supprimer les cookies. Cela ne vous empêchera pas d&rsquo;utiliser ce site, mais désactivera le suivi analytique.</p>
          </section>

          <section className="legal-section">
            <h2>7. Partage des données</h2>
            <p>Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous partageons des données avec les sous-traitants suivants, uniquement dans la mesure nécessaire au fonctionnement de ce site et à la fourniture de nos services :</p>
            <ul>
              <li><strong>Google Analytics :</strong> données d&rsquo;usage pseudonymisées, comme décrit à la section 5</li>
              <li><strong>MailerLite :</strong> votre adresse e-mail et, selon le formulaire utilisé, les détails de voyage que vous fournissez (dates, taille du groupe, budget ou handicap) ainsi que toute note, afin de vous transmettre des résultats et &mdash; uniquement si vous y consentez &mdash; nos e-mails occasionnels de planification. MailerLite traite les données au sein de l&rsquo;UE.</li>
              <li><strong>Resend :</strong> le contenu de tout formulaire de contact ou de demande que vous soumettez, afin de nous le transmettre et de vous envoyer un e-mail de confirmation. Resend est basé aux États-Unis.</li>
              <li><strong>Upstash :</strong> votre adresse IP, conservée brièvement, afin de prévenir les abus sur nos formulaires (limitation de débit). Upstash est basé aux États-Unis.</li>
              <li><strong>Vercel :</strong> héberge ce site et, à ce titre, traite des données standard de requête web telles que votre adresse IP et les informations de votre navigateur. Vercel est basé aux États-Unis.</li>
              <li><strong>Obligation légale :</strong> lorsque la loi ou une autorité compétente l&rsquo;exige</li>
            </ul>
            <p>Certains de ces sous-traitants sont basés en dehors de l&rsquo;UE/EEE, aux États-Unis. Le cas échéant, le transfert est effectué avec les garanties requises par le RGPD &mdash; le Data Privacy Framework UE-États-Unis, pour les sous-traitants certifiés à ce titre (actuellement Google, Resend et Vercel), ou des clauses contractuelles types dans les autres cas (actuellement Upstash).</p>
            <p>Nous pouvons également partager les informations nécessaires (votre nom et vos coordonnées) avec des golfs ou prestataires de services à Majorque lors de l&rsquo;organisation de votre expérience, mais uniquement dans la mesure requise pour honorer votre réservation.</p>
          </section>

          <section className="legal-section">
            <h2>8. Conservation des données</h2>
            <p>Nous conservons vos données de contact aussi longtemps que nécessaire pour fournir nos services. Lorsqu&rsquo;une demande se transforme en réservation, les documents de facturation et de comptabilité sont conservés pendant la durée exigée par le droit commercial espagnol, qui fixe généralement une durée de conservation de six ans pour les documents commerciaux. Les données analytiques sont conservées conformément aux politiques de rétention standard de Google.</p>
            <p>Vous pouvez demander la suppression de vos données personnelles à tout moment (voir la section 9).</p>
          </section>

          <section className="legal-section">
            <h2>9. Vos droits</h2>
            <p>Conformément au RGPD et au droit espagnol de la protection des données, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Accès :</strong> demander une copie des données personnelles que nous détenons à votre sujet</li>
              <li><strong>Rectification :</strong> demander la correction de données inexactes</li>
              <li><strong>Effacement :</strong> demander la suppression de vos données personnelles (&laquo; droit à l&rsquo;oubli &raquo;)</li>
              <li><strong>Limitation :</strong> demander que nous limitions l&rsquo;usage de vos données</li>
              <li><strong>Portabilité :</strong> recevoir vos données dans un format structuré et couramment utilisé</li>
              <li><strong>Opposition :</strong> vous opposer à un traitement fondé sur l&rsquo;intérêt légitime</li>
            </ul>
            <p>Pour exercer l&rsquo;un de ces droits, écrivez-nous à <a href="mailto:info@mrmallorcagolf.com">info@mrmallorcagolf.com</a>. Nous vous répondrons sous 30 jours.</p>
          </section>

          <section className="legal-section">
            <h2>10. Réclamations</h2>
            <p>Si vous estimez que vos droits en matière de protection des données n&rsquo;ont pas été respectés, vous avez le droit de déposer une réclamation auprès de l&rsquo;autorité espagnole de protection des données :</p>
            <p><strong>Agencia Española de Protección de Datos (AEPD)</strong><br />
            Site : <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a><br />
            Adresse : C/ Jorge Juan, 6, 28001 Madrid, Espagne</p>
          </section>

          <section className="legal-section">
            <h2>11. Modifications de cette politique</h2>
            <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. La date en haut de cette page indique la dernière révision. Nous vous invitons à consulter cette page périodiquement.</p>
          </section>

          <div className="legal-page__language-note">
            <p>
              Également disponible en : <Link href="/privacy-policy" style={{color:'var(--gold-light)'}}>English</Link>{' '}&middot;{' '}
              <Link href="/es/privacy-policy" style={{color:'var(--gold-light)'}}>Español</Link>{' '}&middot;{' '}
              <Link href="/de/privacy-policy" style={{color:'var(--gold-light)'}}>Deutsch</Link>
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  )
}
