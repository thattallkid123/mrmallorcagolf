import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'

export const metadata = {
  title: 'Política de Privacidad — Mr Mallorca Golf',
  description: 'Política de privacidad de Mr Mallorca Golf. Cómo recopilamos, usamos y protegemos tus datos personales conforme al RGPD y la LOPDGDD.',
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
            <Link href="/es">Inicio</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Política de Privacidad</span>
          </p>

          <h1 style={{marginBottom:'0.5rem'}}>Política de Privacidad</h1>
          <p style={{color:'rgba(255,255,255,0.5)', marginBottom:'3rem', fontSize:'0.9rem'}}>Última actualización: marzo de 2025</p>

          <section className="legal-section">
            <h2>1. Responsable del tratamiento</h2>
            <p>Este sitio web es operado por Andy Griffiths, con actividad bajo el nombre comercial <strong>Mr Mallorca Golf</strong>, con domicilio en Mallorca, España.</p>
            <p>Para cualquier consulta sobre protección de datos, contacta con nosotros en: <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></p>
          </section>

          <section className="legal-section">
            <h2>2. Datos que recopilamos</h2>
            <p>Recopilamos datos personales únicamente cuando tú los facilitas voluntariamente o cuando visitas nuestro sitio web. Estos datos incluyen:</p>
            <ul>
              <li><strong>Formulario de contacto:</strong> tu nombre, dirección de correo electrónico, número de teléfono y el mensaje que nos envíes</li>
              <li><strong>Consultas por correo electrónico y WhatsApp:</strong> tu nombre y datos de contacto cuando te comunicas con nosotros directamente</li>
              <li><strong>Datos analíticos:</strong> datos de uso anónimos recopilados por Google Analytics (véase la sección 5)</li>
            </ul>
            <p>No recopilamos datos de tarjetas de pago. Todos los pagos se gestionan de forma presencial mediante transferencia bancaria.</p>
          </section>

          <section className="legal-section">
            <h2>3. Cómo utilizamos tus datos</h2>
            <p>Utilizamos los datos que nos facilitas para:</p>
            <ul>
              <li>Responder a tu consulta y organizar tu experiencia de golf</li>
              <li>Comunicarnos contigo en relación con tu reserva o visita prevista</li>
              <li>Mejorar nuestros servicios a partir de patrones de uso generales (solo analítica)</li>
            </ul>
            <p>No utilizaremos tus datos para comunicaciones comerciales no solicitadas sin tu consentimiento expreso. Si en el futuro ofrecemos un boletín de noticias, te pediremos autorización por separado antes de enviarte cualquier comunicación comercial.</p>
          </section>

          <section className="legal-section">
            <h2>4. Base jurídica del tratamiento</h2>
            <p>Tratamos tus datos personales sobre las siguientes bases jurídicas conforme al RGPD y la Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD):</p>
            <ul>
              <li><strong>Ejecución de un contrato:</strong> para gestionar o preparar una reserva en respuesta a tu consulta</li>
              <li><strong>Interés legítimo:</strong> para responder a tus mensajes y gestionar nuestras operaciones comerciales</li>
              <li><strong>Consentimiento:</strong> cuando hayas dado tu acuerdo de forma expresa, por ejemplo al enviar un formulario de contacto o al suscribirte a comunicaciones futuras</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Google Analytics</h2>
            <p>Este sitio web utiliza Google Analytics para comprender cómo los visitantes usan el sitio. Google Analytics recopila datos anónimos como las páginas visitadas, el tiempo de permanencia y la ubicación geográfica aproximada (a nivel de país/región). No te identifica personalmente.</p>
            <p>Los datos de Google Analytics son tratados por Google LLC de conformidad con su política de privacidad. La anonimización de IP está activada en este sitio. Puedes desactivar el seguimiento de Google Analytics instalando el <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">complemento de inhabilitación de Google Analytics</a>.</p>
          </section>

          <section className="legal-section">
            <h2>6. Cookies</h2>
            <p>Este sitio web utiliza cookies exclusivamente con fines de Google Analytics. Son cookies analíticas que nos ayudan a entender cómo se usa el sitio. No se utilizan cookies publicitarias ni píxeles de seguimiento.</p>
            <p>La mayoría de los navegadores te permiten rechazar o eliminar las cookies. Hacerlo no impedirá que uses este sitio web, pero desactivará el seguimiento analítico.</p>
          </section>

          <section className="legal-section">
            <h2>7. Cesión de datos</h2>
            <p>No vendemos ni cedemos tus datos personales a terceros. Podemos compartir datos en las siguientes circunstancias limitadas:</p>
            <ul>
              <li><strong>Google Analytics:</strong> datos de uso anónimos según lo descrito anteriormente</li>
              <li><strong>Obligación legal:</strong> cuando lo exija la ley o una autoridad competente</li>
            </ul>
            <p>Podemos compartir información necesaria (tu nombre y datos de contacto) con campos de golf u otros prestadores de servicios en Mallorca al organizar tu experiencia, pero solo en la medida necesaria para ejecutar tu reserva.</p>
          </section>

          <section className="legal-section">
            <h2>8. Conservación de datos</h2>
            <p>Conservamos tus datos de contacto durante el tiempo necesario para prestar nuestros servicios y por un período razonable posterior a efectos de registro. Los datos analíticos se conservan de acuerdo con las políticas de retención estándar de Google.</p>
            <p>Puedes solicitar la eliminación de tus datos personales en cualquier momento (véase la sección 9).</p>
          </section>

          <section className="legal-section">
            <h2>9. Tus derechos</h2>
            <p>De conformidad con el RGPD y la legislación española de protección de datos, tienes los siguientes derechos:</p>
            <ul>
              <li><strong>Acceso:</strong> solicitar una copia de los datos personales que conservamos sobre ti</li>
              <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de tus datos personales (&ldquo;derecho al olvido&rdquo;)</li>
              <li><strong>Limitación:</strong> solicitar que restrinjamos el uso de tus datos</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento basado en intereses legítimos</li>
            </ul>
            <p>Para ejercer cualquiera de estos derechos, escríbenos a <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a>. Responderemos en un plazo de 30 días.</p>
          </section>

          <section className="legal-section">
            <h2>10. Reclamaciones</h2>
            <p>Si consideras que tus derechos en materia de protección de datos no han sido respetados, tienes derecho a presentar una reclamación ante la autoridad de control española:</p>
            <p><strong>Agencia Española de Protección de Datos (AEPD)</strong><br />
            Sitio web: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a><br />
            Dirección: C/ Jorge Juan, 6, 28001 Madrid, España</p>
          </section>

          <section className="legal-section">
            <h2>11. Cambios en esta política</h2>
            <p>Podemos actualizar esta política de privacidad periódicamente. La fecha que figura al inicio de esta página refleja la última revisión. Te recomendamos que consultes esta página de forma periódica.</p>
          </section>

          <div style={{marginTop:'3rem', paddingTop:'2rem', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
            <p style={{color:'rgba(255,255,255,0.4)', fontSize:'0.85rem'}}>
              También disponible en: <Link href="/privacy-policy" style={{color:'var(--gold-light)'}}>English</Link>
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  )
}

