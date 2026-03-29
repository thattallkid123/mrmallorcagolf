import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'

export const metadata = {
  title: 'TÃ©rminos y Condiciones â€” Mr Mallorca Golf',
  description: 'TÃ©rminos y condiciones de las experiencias y servicios de Mr Mallorca Golf en Mallorca, EspaÃ±a.',
  alternates: {
    canonical: 'https://mrmallorcagolf.com/es/terms',
    languages: {
      'en': 'https://mrmallorcagolf.com/terms',
      'es': 'https://mrmallorcagolf.com/es/terms',
      'x-default': 'https://mrmallorcagolf.com/terms',
    }
  }
}

export default function TermsES() {
  return (
    <PageLayout>
      <div className="legal-page">
        <div className="legal-page__inner">

          <p className="breadcrumb" style={{marginBottom:'2rem'}}>
            <Link href="/es">Inicio</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>TÃ©rminos y Condiciones</span>
          </p>

          <h1 style={{marginBottom:'0.5rem'}}>TÃ©rminos y Condiciones</h1>
          <p style={{color:'rgba(255,255,255,0.5)', marginBottom:'3rem', fontSize:'0.9rem'}}>Ãšltima actualizaciÃ³n: marzo de 2025</p>

          <section className="legal-section">
            <h2>1. Sobre estos tÃ©rminos</h2>
            <p>Estos tÃ©rminos y condiciones regulan el uso de este sitio web y la contrataciÃ³n de los servicios ofrecidos por Andy Griffiths, con actividad bajo el nombre comercial <strong>Mr Mallorca Golf</strong>, con domicilio en Mallorca, EspaÃ±a (&ldquo;nosotros&rdquo;, &ldquo;nos&rdquo;, &ldquo;nuestro/a&rdquo;).</p>
            <p>Al realizar una consulta o contratar cualquiera de nuestros servicios, aceptas estos tÃ©rminos. Te rogamos que los leas detenidamente.</p>
            <p>Contacto: <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></p>
          </section>

          <section className="legal-section">
            <h2>2. Nuestros servicios</h2>
            <p>Mr Mallorca Golf ofrece experiencias de golf privadas en campos de toda Mallorca, EspaÃ±a. Los servicios pueden incluir:</p>
            <ul>
              <li>DÃ­as de golf privados con un profesional PGA</li>
              <li>Entrenamiento y enseÃ±anza en campo</li>
              <li>SelecciÃ³n de campo y gestiÃ³n de tee times</li>
              <li>Traslados desde el aeropuerto y apoyo logÃ­stico cuando se haya acordado</li>
            </ul>
            <p>Los servicios concretos incluidos en tu experiencia se confirmarÃ¡n por escrito en el momento de la reserva.</p>
          </section>

          <section className="legal-section">
            <h2>3. Reservas y pago</h2>
            <p>Todas las reservas estÃ¡n sujetas a disponibilidad y solo se confirman una vez que hemos acordado los detalles contigo directamente por correo electrÃ³nico, WhatsApp o telÃ©fono.</p>
            <p>El pago se realiza mediante transferencia bancaria en euros. Los datos bancarios se facilitarÃ¡n al confirmar la reserva. Todos los precios se indican con los impuestos aplicables incluidos, salvo que se indique lo contrario.</p>
            <p>Puede requerirse un depÃ³sito para garantizar la reserva. El saldo restante deberÃ¡ abonarse segÃºn lo acordado en el momento de la reserva. La reserva no se considera confirmada hasta que se haya recibido el depÃ³sito (o el importe Ã­ntegro, en su caso).</p>
          </section>

          <section className="legal-section">
            <h2>4. Cancelaciones y modificaciones</h2>
            <p><strong>CancelaciÃ³n por tu parte:</strong></p>
            <ul>
              <li>Con mÃ¡s de 14 dÃ­as de antelaciÃ³n: reembolso Ã­ntegro del depÃ³sito abonado</li>
              <li>Entre 7 y 14 dÃ­as de antelaciÃ³n: se retiene el 50 % del importe total de la reserva</li>
              <li>Con menos de 7 dÃ­as de antelaciÃ³n: se retiene el importe total de la reserva</li>
            </ul>
            <p>Las cancelaciones deben comunicarse por escrito al correo <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a>.</p>
            <p><strong>CancelaciÃ³n por nuestra parte:</strong> En el improbable caso de que debamos cancelar (por ejemplo, por enfermedad, condiciones meteorolÃ³gicas extremas o circunstancias de fuerza mayor), te ofreceremos un reembolso Ã­ntegro o una fecha alternativa. No nos hacemos responsables de los gastos adicionales en los que puedas haber incurrido, como vuelos o alojamiento.</p>
            <p><strong>Condiciones meteorolÃ³gicas:</strong> El golf es una actividad al aire libre. No cancelamos por lluvia ligera. En caso de tormenta elÃ©ctrica, condiciones climatolÃ³gicas severas o cierre del campo, reprogramaremos la actividad o emitiremos un reembolso segÃºn nuestro criterio.</p>
          </section>

          <section className="legal-section">
            <h2>5. Tus responsabilidades</h2>
            <p>Eres responsable de:</p>
            <ul>
              <li>Contar con un seguro de viaje y de actividades adecuado para tu visita a Mallorca</li>
              <li>Llegar a la hora y al lugar acordados</li>
              <li>Respetar las normas y la etiqueta del campo de golf</li>
              <li>Cualquier daÃ±o causado a las instalaciones del campo por un comportamiento negligente o temerario</li>
              <li>Comunicar cualquier condiciÃ³n de salud relevante que pueda afectar a tu capacidad de participar con seguridad</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Normas del campo y green fees</h2>
            <p>Todos los participantes deben cumplir las normas y el cÃ³digo de vestimenta de cada campo visitado. Nos reservamos el derecho de dar por finalizada la experiencia sin reembolso en caso de que un participante sea invitado a abandonar el campo por su conducta.</p>
            <p>Las green fees y demÃ¡s tasas del campo estÃ¡n incluidas en el precio indicado, salvo que se especifique lo contrario. Los gastos de consumiciÃ³n (comida, bebida, alquiler de material no incluido en el acuerdo) corren a cargo del participante.</p>
          </section>

          <section className="legal-section">
            <h2>7. LimitaciÃ³n de responsabilidad</h2>
            <p>Adoptamos todas las precauciones razonables para ofrecer una experiencia segura y satisfactoria. No obstante, el golf es una actividad fÃ­sica y la participaciÃ³n se realiza bajo la propia responsabilidad del participante.</p>
            <p>En la mÃ¡xima medida permitida por la legislaciÃ³n espaÃ±ola, no somos responsables de:</p>
            <ul>
              <li>Lesiones personales, salvo que sean consecuencia de nuestra negligencia</li>
              <li>PÃ©rdida o daÃ±o de bienes personales</li>
              <li>DaÃ±os indirectos o consecuentes</li>
              <li>PÃ©rdidas derivadas de circunstancias ajenas a nuestro control razonable</li>
            </ul>
            <p>Nada de lo establecido en estos tÃ©rminos limita nuestra responsabilidad por muerte o lesiones personales causadas por nuestra negligencia, ni por fraude o declaraciones fraudulentas.</p>
          </section>

          <section className="legal-section">
            <h2>8. Propiedad intelectual</h2>
            <p>Todo el contenido de este sitio web â€”incluidos textos, imÃ¡genes, vÃ­deos y marcaâ€” es propiedad de Mr Mallorca Golf y no puede ser reproducido sin autorizaciÃ³n escrita.</p>
          </section>

          <section className="legal-section">
            <h2>9. Privacidad</h2>
            <p>El tratamiento de tus datos personales se rige por nuestra <Link href="/es/privacy-policy" style={{color:'var(--gold-light)'}}>PolÃ­tica de Privacidad</Link>, que forma parte integrante de estos tÃ©rminos.</p>
          </section>

          <section className="legal-section">
            <h2>10. LegislaciÃ³n aplicable y jurisdicciÃ³n</h2>
            <p>Estos tÃ©rminos se rigen por la legislaciÃ³n espaÃ±ola. Cualquier controversia derivada de estos tÃ©rminos o de nuestros servicios estarÃ¡ sometida a la jurisdicciÃ³n de los tribunales de las Islas Baleares, EspaÃ±a, salvo que seas un consumidor residente en otro Estado miembro de la UE, en cuyo caso conservas el derecho a presentar reclamaciones ante los tribunales de tu paÃ­s de residencia.</p>
          </section>

          <section className="legal-section">
            <h2>11. Modificaciones de estos tÃ©rminos</h2>
            <p>Podemos actualizar estos tÃ©rminos periÃ³dicamente. La fecha que figura al inicio de esta pÃ¡gina refleja la Ãºltima revisiÃ³n. Las reservas confirmadas antes de cualquier modificaciÃ³n se regirÃ¡n por los tÃ©rminos vigentes en el momento de la reserva.</p>
          </section>

          <section className="legal-section">
            <h2>12. Contacto</h2>
            <p>Para cualquier consulta sobre estos tÃ©rminos, contÃ¡ctanos en <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a>.</p>
          </section>

          <div style={{marginTop:'3rem', paddingTop:'2rem', borderTop:'1px solid rgba(255,255,255,0.1)'}}>
            <p style={{color:'rgba(255,255,255,0.4)', fontSize:'0.85rem'}}>
              Also available in: <Link href="/terms" style={{color:'var(--gold-light)'}}>English</Link>
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  )
}

