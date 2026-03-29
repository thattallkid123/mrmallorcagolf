import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'

export const metadata = {
  title: 'PolÃ­tica de Privacidad â€” Mr Mallorca Golf',
  description: 'PolÃ­tica de privacidad de Mr Mallorca Golf. CÃ³mo recopilamos, usamos y protegemos tus datos personales conforme al RGPD y la LOPDGDD.',
  alternates: {
    canonical: 'https://mrmallorcagolf.com/es/privacy-policy',
    languages: {
      'en': 'https://mrmallorcagolf.com/privacy-policy',
      'es': 'https://mrmallorcagolf.com/es/privacy-policy',
      'x-default': 'https://mrmallorcagolf.com/privacy-policy',
    }
  }
}

export default function PrivacyPolicyES() {
  return (
    <PageLayout>
      <div className="legal-page">
        <div className="legal-page__inner">

          <p className="breadcrumb" style={{marginBottom:'2rem'}}>
            <Link href="/es">Inicio</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>PolÃ­tica de Privacidad</span>
          </p>

          <h1 style={{marginBottom:'0.5rem'}}>PolÃ­tica de Privacidad</h1>
          <p style={{color:'rgba(255,255,255,0.5)', marginBottom:'3rem', fontSize:'0.9rem'}}>Ãšltima actualizaciÃ³n: marzo de 2025</p>

          <section className="legal-section">
            <h2>1. Responsable del tratamiento</h2>
            <p>Este sitio web es operado por Andy Griffiths, con actividad bajo el nombre comercial <strong>Mr Mallorca Golf</strong>, con domicilio en Mallorca, EspaÃ±a.</p>
            <p>Para cualquier consulta sobre protecciÃ³n de datos, contacta con nosotros en: <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></p>
          </section>

          <section className="legal-section">
            <h2>2. Datos que recopilamos</h2>
            <p>Recopilamos datos personales Ãºnicamente cuando tÃº los facilitas voluntariamente o cuando visitas nuestro sitio web. Estos datos incluyen:</p>
            <ul>
              <li><strong>Formulario de contacto:</strong> tu nombre, direcciÃ³n de correo electrÃ³nico, nÃºmero de telÃ©fono y el mensaje que nos envÃ­es</li>
              <li><strong>Consultas por correo electrÃ³nico y WhatsApp:</strong> tu nombre y datos de contacto cuando te comunicas con nosotros directamente</li>
              <li><strong>Datos analÃ­ticos:</strong> datos de uso anÃ³nimos recopilados por Google Analytics (vÃ©ase la secciÃ³n 5)</li>
            </ul>
            <p>No recopilamos datos de tarjetas de pago. Todos los pagos se gestionan de forma presencial mediante transferencia bancaria.</p>
          </section>

          <section className="legal-section">
            <h2>3. CÃ³mo utilizamos tus datos</h2>
            <p>Utilizamos los datos que nos facilitas para:</p>
            <ul>
              <li>Responder a tu consulta y organizar tu experiencia de golf</li>
              <li>Comunicarnos contigo en relaciÃ³n con tu reserva o visita prevista</li>
              <li>Mejorar nuestros servicios a partir de patrones de uso generales (solo analÃ­tica)</li>
            </ul>
            <p>No utilizaremos tus datos para comunicaciones comerciales no solicitadas sin tu consentimiento expreso. Si en el futuro ofrecemos un boletÃ­n de noticias, te pediremos autorizaciÃ³n por separado antes de enviarte cualquier comunicaciÃ³n comercial.</p>
          </section>

          <section className="legal-section">
            <h2>4. Base jurÃ­dica del tratamiento</h2>
            <p>Tratamos tus datos personales sobre las siguientes bases jurÃ­dicas conforme al RGPD y la Ley OrgÃ¡nica de ProtecciÃ³n de Datos y GarantÃ­a de los Derechos Digitales (LOPDGDD):</p>
            <ul>
              <li><strong>EjecuciÃ³n de un contrato:</strong> para gestionar o preparar una reserva en respuesta a tu consulta</li>
              <li><strong>InterÃ©s legÃ­timo:</strong> para responder a tus mensajes y gestionar nuestras operaciones comerciales</li>
              <li><strong>Consentimiento:</strong> cuando hayas dado tu acuerdo de forma expresa, por ejemplo al enviar un formulario de contacto o al suscribirte a comunicaciones futuras</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Google Analytics</h2>
            <p>Este sitio web utiliza Google Analytics para comprender cÃ³mo los visitantes usan el sitio. Google Analytics recopila datos anÃ³nimos como las pÃ¡ginas visitadas, el tiempo de permanencia y la ubicaciÃ³n geogrÃ¡fica aproximada (a nivel de paÃ­s/regiÃ³n). No te identifica personalmente.</p>
            <p>Los datos de Google Analytics son tratados por Google LLC de conformidad con su polÃ­tica de privacidad. La anonimizaciÃ³n de IP estÃ¡ activada en este sitio. Puedes desactivar el seguimiento de Google Analytics instalando el <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">complemento de inhabilitaciÃ³n de Google Analytics</a>.</p>
          </section>

          <section className="legal-section">
            <h2>6. Cookies</h2>
            <p>Este sitio web utiliza cookies exclusivamente con fines de Google Analytics. Son cookies analÃ­ticas que nos ayudan a entender cÃ³mo se usa el sitio. No se utilizan cookies publicitarias ni pÃ­xeles de seguimiento.</p>
            <p>La mayorÃ­a de los navegadores te permiten rechazar o eliminar las cookies. Hacerlo no impedirÃ¡ que uses este sitio web, pero desactivarÃ¡ el seguimiento analÃ­tico.</p>
          </section>

          <section className="legal-section">
            <h2>7. CesiÃ³n de datos</h2>
            <p>No vendemos ni cedemos tus datos personales a terceros. Podemos compartir datos en las siguientes circunstancias limitadas:</p>
            <ul>
              <li><strong>Google Analytics:</strong> datos de uso anÃ³nimos segÃºn lo descrito anteriormente</li>
              <li><strong>ObligaciÃ³n legal:</strong> cuando lo exija la ley o una autoridad competente</li>
            </ul>
            <p>Podemos compartir informaciÃ³n necesaria (tu nombre y datos de contacto) con campos de golf u otros prestadores de servicios en Mallorca al organizar tu experiencia, pero solo en la medida necesaria para ejecutar tu reserva.</p>
          </section>

          <section className="legal-section">
            <h2>8. ConservaciÃ³n de datos</h2>
            <p>Conservamos tus datos de contacto durante el tiempo necesario para prestar nuestros servicios y por un perÃ­odo razonable posterior a efectos de registro. Los datos analÃ­ticos se conservan de acuerdo con las polÃ­ticas de retenciÃ³n estÃ¡ndar de Google.</p>
            <p>Puedes solicitar la eliminaciÃ³n de tus datos personales en cualquier momento (vÃ©ase la secciÃ³n 9).</p>
          </section>

          <section className="legal-section">
            <h2>9. Tus derechos</h2>
            <p>De conformidad con el RGPD y la legislaciÃ³n espaÃ±ola de protecciÃ³n de datos, tienes los siguientes derechos:</p>
            <ul>
              <li><strong>Acceso:</strong> solicitar una copia de los datos personales que conservamos sobre ti</li>
              <li><strong>RectificaciÃ³n:</strong> solicitar la correcciÃ³n de datos inexactos</li>
              <li><strong>SupresiÃ³n:</strong> solicitar la eliminaciÃ³n de tus datos personales (&ldquo;derecho al olvido&rdquo;)</li>
              <li><strong>LimitaciÃ³n:</strong> solicitar que restrinjamos el uso de tus datos</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso comÃºn</li>
              <li><strong>OposiciÃ³n:</strong> oponerte al tratamiento basado en intereses legÃ­timos</li>
            </ul>
            <p>Para ejercer cualquiera de estos derechos, escrÃ­benos a <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a>. Responderemos en un plazo de 30 dÃ­as.</p>
          </section>

          <section className="legal-section">
            <h2>10. Reclamaciones</h2>
            <p>Si consideras que tus derechos en materia de protecciÃ³n de datos no han sido respetados, tienes derecho a presentar una reclamaciÃ³n ante la autoridad de control espaÃ±ola:</p>
            <p><strong>Agencia EspaÃ±ola de ProtecciÃ³n de Datos (AEPD)</strong><br />
            Sitio web: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a><br />
            DirecciÃ³n: C/ Jorge Juan, 6, 28001 Madrid, EspaÃ±a</p>
          </section>

          <section className="legal-section">
            <h2>11. Cambios en esta polÃ­tica</h2>
            <p>Podemos actualizar esta polÃ­tica de privacidad periÃ³dicamente. La fecha que figura al inicio de esta pÃ¡gina refleja la Ãºltima revisiÃ³n. Te recomendamos que consultes esta pÃ¡gina de forma periÃ³dica.</p>
          </section>

          <div style={{marginTop:'3rem', paddingTop:'2rem', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
            <p style={{color:'rgba(255,255,255,0.4)', fontSize:'0.85rem'}}>
              TambiÃ©n disponible en: <Link href="/privacy-policy" style={{color:'var(--gold-light)'}}>English</Link>
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  )
}

