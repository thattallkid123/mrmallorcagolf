import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import { buildLegalMetadata } from '../../../lib/page-metadata'

export const metadata = buildLegalMetadata('terms', 'fr')

export default function TermsFR() {
  return (
    <PageLayout>
      <div className="legal-page">
        <div className="legal-page__inner">

          <p className="breadcrumb" style={{marginBottom:'2rem'}}>
            <Link href="/fr">Accueil</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Conditions générales</span>
          </p>

          <h1 style={{marginBottom:'0.5rem'}}>Conditions générales</h1>
          <p style={{color:'rgba(255,255,255,0.72)', marginBottom:'3rem', fontSize:'0.9rem'}}>Dernière mise à jour : mars 2025</p>

          <section className="legal-section">
            <h2>1. À propos de ces conditions</h2>
            <p>Les présentes conditions générales régissent l&rsquo;utilisation de ce site et la réservation des services proposés par Andy Griffiths, exerçant sous le nom commercial <strong>Mr Mallorca Golf</strong>, basé à Majorque, en Espagne (&laquo; nous &raquo;, &laquo; notre &raquo;).</p>
            <p>En nous contactant ou en réservant un service auprès de nous, vous acceptez ces conditions. Merci de les lire attentivement.</p>
            <p>Contact : <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></p>
          </section>

          <section className="legal-section">
            <h2>2. Nos services</h2>
            <p>Mr Mallorca Golf propose des expériences de golf et des services de planification de voyages golfiques à travers Majorque, en Espagne. Les services peuvent inclure :</p>
            <ul>
              <li>Journées Play With A Pro avec un professionnel PGA</li>
              <li>Coaching et instruction sur le parcours</li>
              <li>Planification de voyage golfique, sélection de parcours et réservation de départs</li>
              <li>Transferts aéroport et assistance logistique lorsque convenu</li>
            </ul>
            <p>Les services précis inclus dans votre expérience seront confirmés par écrit au moment de la réservation.</p>
          </section>

          <section className="legal-section">
            <h2>3. Réservations et paiement</h2>
            <p>Toutes les réservations sont soumises à disponibilité et ne sont confirmées qu&rsquo;une fois les détails convenus directement avec vous par e-mail, WhatsApp ou téléphone.</p>
            <p>Le paiement s&rsquo;effectue par virement bancaire en euros. Les coordonnées bancaires vous seront communiquées à la confirmation de votre réservation. Tous les prix s&rsquo;entendent taxes comprises, sauf indication contraire.</p>
            <p>Un acompte peut être requis pour garantir votre réservation. Le solde est dû selon les modalités convenues au moment de la réservation. Votre réservation n&rsquo;est confirmée qu&rsquo;à réception de l&rsquo;acompte (ou du paiement intégral, le cas échéant).</p>
          </section>

          <section className="legal-section">
            <h2>4. Annulation et modifications</h2>
            <p><strong>Annulation de votre part :</strong></p>
            <ul>
              <li>Plus de 14 jours avant l&rsquo;expérience : remboursement intégral de l&rsquo;acompte versé</li>
              <li>Entre 7 et 14 jours avant : 50 % du montant total de la réservation est retenu</li>
              <li>Moins de 7 jours avant : le montant total de la réservation est retenu</li>
            </ul>
            <p>Les annulations doivent être notifiées par écrit à <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a>.</p>
            <p><strong>Annulation de notre part :</strong> Dans le cas rare où nous devrions annuler (par exemple pour cause de maladie, de conditions météorologiques extrêmes ou de circonstances hors de notre contrôle), nous vous proposerons soit un remboursement intégral, soit une date alternative. Nous ne sommes pas responsables des frais additionnels que vous auriez pu engager, tels que les vols ou l&rsquo;hébergement.</p>
            <p><strong>Météo :</strong> le golf est une activité de plein air. Nous n&rsquo;annulons pas en cas de pluie légère. En cas d&rsquo;orage, de conditions météorologiques sévères ou de fermeture du parcours, nous reprogrammerons l&rsquo;activité ou procéderons à un remboursement, à notre discrétion.</p>
          </section>

          <section className="legal-section">
            <h2>5. Vos responsabilités</h2>
            <p>Vous êtes responsable de :</p>
            <ul>
              <li>disposer d&rsquo;une assurance voyage et activités adaptée pour votre séjour à Majorque</li>
              <li>arriver à l&rsquo;heure et au lieu convenus</li>
              <li>respecter les règles et l&rsquo;étiquette du parcours de golf</li>
              <li>tout dommage causé aux installations du parcours par un comportement négligent ou imprudent</li>
              <li>signaler toute condition de santé pertinente pouvant affecter votre capacité à participer en toute sécurité</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Règles du parcours et green fees</h2>
            <p>Tous les participants doivent respecter les règles et le code vestimentaire de chaque parcours visité. Nous nous réservons le droit de mettre fin à une expérience sans remboursement si un participant est invité à quitter un parcours en raison de son comportement.</p>
            <p>Les green fees et frais de parcours sont en supplément, sauf indication contraire explicite dans la confirmation de votre réservation. La location de matériel, le buggy et toute nourriture ou boisson personnelle sont à la charge du participant.</p>
            <p>Les jours de forte affluence, le parcours peut associer votre groupe à d&rsquo;autres joueurs sur le même départ. Cette décision relève du club et échappe à notre contrôle. Nous nous efforçons toujours de réserver un départ qui rende la partie aussi personnelle que possible. Si vous souhaitez que le départ soit réservé exclusivement à votre groupe, nous pouvons organiser les places restantes moyennant un coût supplémentaire, confirmé avant la réservation. Les réservations Signature Day incluent un départ privé en standard.</p>
          </section>

          <section className="legal-section">
            <h2>7. Limitation de responsabilité</h2>
            <p>Nous prenons toutes les précautions raisonnables pour offrir une expérience sûre et agréable. Le golf reste toutefois une activité physique, et la participation se fait à vos propres risques.</p>
            <p>Dans toute la mesure permise par le droit espagnol, nous ne sommes pas responsables des :</p>
            <ul>
              <li>blessures corporelles, sauf si elles résultent de notre négligence</li>
              <li>pertes ou dommages aux biens personnels</li>
              <li>pertes indirectes ou consécutives</li>
              <li>pertes résultant de circonstances échappant à notre contrôle raisonnable</li>
            </ul>
            <p>Rien dans ces conditions ne limite notre responsabilité en cas de décès ou de blessure corporelle causés par notre négligence, ni en cas de fraude ou de fausse déclaration frauduleuse.</p>
          </section>

          <section className="legal-section">
            <h2>8. Propriété intellectuelle</h2>
            <p>L&rsquo;ensemble du contenu de ce site (textes, images, vidéos et éléments de marque inclus) est la propriété de Mr Mallorca Golf et ne peut être reproduit sans autorisation écrite.</p>
          </section>

          <section className="legal-section">
            <h2>9. Confidentialité</h2>
            <p>Le traitement de vos données personnelles est régi par notre <Link href="/fr/privacy-policy" style={{color:'var(--gold-light)'}}>politique de confidentialité</Link>, qui fait partie intégrante de ces conditions.</p>
          </section>

          <section className="legal-section">
            <h2>10. Droit applicable</h2>
            <p>Ces conditions sont régies par le droit espagnol. Tout litige découlant de ces conditions ou de nos services relève de la compétence des tribunaux des îles Baléares, en Espagne, sauf si vous êtes un consommateur résidant dans un autre État membre de l&rsquo;UE, auquel cas vous conservez le droit d&rsquo;engager une action dans votre pays de résidence.</p>
          </section>

          <section className="legal-section">
            <h2>11. Modifications de ces conditions</h2>
            <p>Nous pouvons mettre à jour ces conditions de temps à autre. La date en haut de cette page indique la dernière révision. Les réservations confirmées avant toute modification restent régies par les conditions en vigueur au moment de la réservation.</p>
          </section>

          <section className="legal-section">
            <h2>12. Contact</h2>
            <p>Pour toute question concernant ces conditions, contactez-nous à <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a>.</p>
          </section>

          <div className="legal-page__language-note">
            <p>
              Également disponible en : <Link href="/terms" style={{color:'var(--gold-light)'}}>English</Link>{' '}&middot;{' '}
              <Link href="/es/terms" style={{color:'var(--gold-light)'}}>Español</Link>{' '}&middot;{' '}
              <Link href="/de/terms" style={{color:'var(--gold-light)'}}>Deutsch</Link>
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  )
}
