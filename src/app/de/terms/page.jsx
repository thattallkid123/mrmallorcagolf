import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import { buildLegalMetadata } from '../../../lib/page-metadata'

export const metadata = buildLegalMetadata('terms', 'de')

export default function TermsDE() {
  return (
    <PageLayout>
      <div className="legal-page">
        <div className="legal-page__inner">

          <p className="breadcrumb" style={{marginBottom:'2rem'}}>
            <Link href="/de">Startseite</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Allgemeine Geschäftsbedingungen</span>
          </p>

          <h1 style={{marginBottom:'0.5rem'}}>Allgemeine Geschäftsbedingungen</h1>
          <p style={{color:'rgba(255,255,255,0.72)', marginBottom:'3rem', fontSize:'0.9rem'}}>Zuletzt aktualisiert: März 2025</p>

          <section className="legal-section">
            <h2>1. Über diese Bedingungen</h2>
            <p>Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung dieser Website und die Buchung von Leistungen, die von Andy Griffiths, geschäftlich tätig unter <strong>Mr Mallorca Golf</strong>, mit Sitz auf Mallorca, Spanien, angeboten werden (&bdquo;wir&ldquo;, &bdquo;uns&ldquo;, &bdquo;unser&ldquo;).</p>
            <p>Mit einer Anfrage oder Buchung einer Leistung bei uns erklären Sie sich mit diesen Bedingungen einverstanden. Bitte lesen Sie sie sorgfältig durch.</p>
            <p>Kontakt: <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></p>
          </section>

          <section className="legal-section">
            <h2>2. Unsere Leistungen</h2>
            <p>Mr Mallorca Golf bietet Golferlebnisse und Reiseplanungsdienstleistungen rund um Golf auf Mallorca, Spanien, an. Zu den Leistungen können gehören:</p>
            <ul>
              <li>Play With A Pro Golftage mit einem PGA-Profi</li>
              <li>Coaching und Unterricht auf dem Platz</li>
              <li>Golfreiseplanung, Platzauswahl und Buchung von Startzeiten</li>
              <li>Flughafentransfers und logistische Unterstützung, sofern vereinbart</li>
            </ul>
            <p>Die konkret in Ihrem Erlebnis enthaltenen Leistungen werden zum Zeitpunkt der Buchung schriftlich bestätigt.</p>
          </section>

          <section className="legal-section">
            <h2>3. Buchungen und Zahlung</h2>
            <p>Alle Buchungen unterliegen der Verfügbarkeit und werden erst bestätigt, sobald wir die Details direkt mit Ihnen per E-Mail, WhatsApp oder Telefon vereinbart haben.</p>
            <p>Die Zahlung erfolgt per Banküberweisung in Euro. Die Zahlungsdetails werden Ihnen nach Bestätigung Ihrer Buchung mitgeteilt. Alle Preise verstehen sich inklusive anfallender Steuern, sofern nicht anders angegeben.</p>
            <p>Zur Sicherung Ihrer Buchung kann eine Anzahlung erforderlich sein. Der Restbetrag ist wie zum Zeitpunkt der Buchung vereinbart fällig. Ihre Buchung gilt erst als bestätigt, wenn die Anzahlung (oder gegebenenfalls die vollständige Zahlung) eingegangen ist.</p>
          </section>

          <section className="legal-section">
            <h2>4. Stornierung und Änderungen</h2>
            <p><strong>Stornierung durch Sie:</strong></p>
            <ul>
              <li>Mehr als 14 Tage vor dem Erlebnis: vollständige Rückerstattung einer geleisteten Anzahlung</li>
              <li>7&ndash;14 Tage vorher: 50 % des gesamten Buchungswerts werden einbehalten</li>
              <li>Weniger als 7 Tage vorher: der gesamte Buchungswert wird einbehalten</li>
            </ul>
            <p>Stornierungen müssen schriftlich per E-Mail an <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a> erfolgen.</p>
            <p><strong>Stornierung durch uns:</strong> Sollten wir in seltenen Fällen stornieren müssen (zum Beispiel wegen Krankheit, extremer Wetterbedingungen oder Umständen außerhalb unserer Kontrolle), bieten wir Ihnen entweder eine vollständige Rückerstattung oder einen alternativen Termin an. Wir haften nicht für zusätzliche Kosten, die Ihnen entstanden sein könnten, wie Flüge oder Unterkunft.</p>
            <p><strong>Wetter:</strong> Golf ist eine Outdoor-Aktivität. Wir sagen bei leichtem Regen nicht ab. Bei Gewitter, schweren Wetterbedingungen oder Platzsperrung werden wir den Termin nach unserem Ermessen verlegen oder eine Rückerstattung vornehmen.</p>
          </section>

          <section className="legal-section">
            <h2>5. Ihre Verantwortlichkeiten</h2>
            <p>Sie sind verantwortlich für:</p>
            <ul>
              <li>den Abschluss einer angemessenen Reise- und Aktivitätsversicherung für Ihren Besuch auf Mallorca</li>
              <li>das pünktliche Erscheinen am vereinbarten Ort</li>
              <li>die Einhaltung der Regeln und der Etikette des Golfplatzes</li>
              <li>jeglichen Schaden, der durch fahrlässiges oder rücksichtsloses Verhalten am Eigentum des Golfplatzes verursacht wird</li>
              <li>die Angabe relevanter gesundheitlicher Beschwerden, die Ihre Fähigkeit zur sicheren Teilnahme beeinträchtigen könnten</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Platzregeln und Greenfees</h2>
            <p>Alle Teilnehmer müssen die Regeln und die Kleiderordnung jedes besuchten Golfplatzes einhalten. Wir behalten uns das Recht vor, ein Erlebnis ohne Rückerstattung zu beenden, wenn ein Teilnehmer aufgrund seines Verhaltens aufgefordert wird, den Platz zu verlassen.</p>
            <p>Greenfees und Platzgebühren fallen zusätzlich an, sofern in Ihrer Buchungsbestätigung nicht ausdrücklich anders angegeben. Ausrüstungsverleih, Buggy und persönliche Speisen und Getränke gehen zulasten des Teilnehmers.</p>
            <p>An stark ausgelasteten Tagen kann der Golfplatz Ihre Gruppe mit anderen Spielern zur selben Startzeit zusammenlegen. Dies liegt im Ermessen des Clubs und außerhalb unserer Kontrolle. Wir bemühen uns stets, eine Startzeit zu buchen, die die Runde so persönlich wie möglich hält. Möchten Sie, dass die Startzeit ausschließlich Ihrer Gruppe vorbehalten bleibt, können wir die übrigen Plätze gegen einen vor der Buchung bestätigten Aufpreis organisieren. Signature-Day-Buchungen beinhalten standardmäßig eine private Startzeit.</p>
          </section>

          <section className="legal-section">
            <h2>7. Haftungsbeschränkung</h2>
            <p>Wir treffen alle angemessenen Vorkehrungen, um ein sicheres und angenehmes Erlebnis zu bieten. Golf ist jedoch eine körperliche Aktivität, und die Teilnahme erfolgt auf eigenes Risiko.</p>
            <p>Im gesetzlich zulässigen Umfang haften wir nicht für:</p>
            <ul>
              <li>Personenschäden, es sei denn, sie sind auf unsere Fahrlässigkeit zurückzuführen</li>
              <li>Verlust oder Beschädigung persönlichen Eigentums</li>
              <li>mittelbare oder Folgeschäden</li>
              <li>Verluste, die auf Umstände außerhalb unserer angemessenen Kontrolle zurückzuführen sind</li>
            </ul>
            <p>Nichts in diesen Bedingungen schränkt unsere Haftung für durch unsere Fahrlässigkeit verursachte Todes- oder Personenschäden oder für Betrug oder arglistige Täuschung ein.</p>
          </section>

          <section className="legal-section">
            <h2>8. Geistiges Eigentum</h2>
            <p>Alle Inhalte dieser Website (einschließlich Texte, Bilder, Videos und Markenzeichen) sind Eigentum von Mr Mallorca Golf und dürfen ohne schriftliche Genehmigung nicht vervielfältigt werden.</p>
          </section>

          <section className="legal-section">
            <h2>9. Datenschutz</h2>
            <p>Die Verarbeitung Ihrer personenbezogenen Daten richtet sich nach unserer <Link href="/de/privacy-policy" style={{color:'var(--gold-light)'}}>Datenschutzerklärung</Link>, die Bestandteil dieser Bedingungen ist.</p>
          </section>

          <section className="legal-section">
            <h2>10. Anwendbares Recht</h2>
            <p>Diese Bedingungen unterliegen spanischem Recht. Streitigkeiten aus diesen Bedingungen oder unseren Leistungen unterliegen der Zuständigkeit der Gerichte der Balearen, Spanien, es sei denn, Sie sind Verbraucher mit Wohnsitz in einem anderen EU-Mitgliedstaat; in diesem Fall behalten Sie das Recht, Klage in Ihrem Wohnsitzland zu erheben.</p>
          </section>

          <section className="legal-section">
            <h2>11. Änderungen dieser Bedingungen</h2>
            <p>Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Das Datum oben auf dieser Seite gibt die letzte Überarbeitung wieder. Vor einer Änderung bestätigte Buchungen unterliegen den zum Zeitpunkt der Buchung geltenden Bedingungen.</p>
          </section>

          <section className="legal-section">
            <h2>12. Kontakt</h2>
            <p>Bei Fragen zu diesen Bedingungen kontaktieren Sie uns bitte unter <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a>.</p>
          </section>

          <div className="legal-page__language-note">
            <p>
              Auch verfügbar auf: <Link href="/terms" style={{color:'var(--gold-light)'}}>English</Link>{' '}&middot;{' '}
              <Link href="/es/terms" style={{color:'var(--gold-light)'}}>Español</Link>{' '}&middot;{' '}
              <Link href="/fr/terms" style={{color:'var(--gold-light)'}}>Français</Link>
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  )
}
