import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import { buildLegalMetadata } from '../../../lib/page-metadata'

export const metadata = buildLegalMetadata('terms', 'es')

export default function TermsES() {
  return (
    <PageLayout>
      <div className="legal-page">
        <div className="legal-page__inner">

          <p className="breadcrumb" style={{marginBottom:'2rem'}}>
            <Link href="/es">Inicio</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Términos y Condiciones</span>
          </p>

          <h1 style={{marginBottom:'0.5rem'}}>Términos y Condiciones</h1>
          <p style={{color:'rgba(255,255,255,0.5)', marginBottom:'3rem', fontSize:'0.9rem'}}>Última actualización: marzo de 2025</p>

          <section className="legal-section">
            <h2>1. Sobre estos términos</h2>
            <p>Estos términos y condiciones regulan el uso de este sitio web y la contratación de los servicios ofrecidos por Andy Griffiths, con actividad bajo el nombre comercial <strong>Mr Mallorca Golf</strong>, con domicilio en Mallorca, España (&ldquo;nosotros&rdquo;, &ldquo;nos&rdquo;, &ldquo;nuestro/a&rdquo;).</p>
            <p>Al realizar una consulta o contratar cualquiera de nuestros servicios, aceptas estos términos. Te rogamos que los leas detenidamente.</p>
            <p>Contacto: <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a></p>
          </section>

          <section className="legal-section">
            <h2>2. Nuestros servicios</h2>
            <p>Mr Mallorca Golf ofrece experiencias de golf privadas en campos de toda Mallorca, España. Los servicios pueden incluir:</p>
            <ul>
              <li>Días de golf privados con un profesional PGA</li>
              <li>Entrenamiento y enseñanza en campo</li>
              <li>Selección de campo y gestión de tee times</li>
              <li>Traslados desde el aeropuerto y apoyo logístico cuando se haya acordado</li>
            </ul>
            <p>Los servicios concretos incluidos en tu experiencia se confirmarán por escrito en el momento de la reserva.</p>
          </section>

          <section className="legal-section">
            <h2>3. Reservas y pago</h2>
            <p>Todas las reservas están sujetas a disponibilidad y solo se confirman una vez que hemos acordado los detalles contigo directamente por correo electrónico, WhatsApp o teléfono.</p>
            <p>El pago se realiza mediante transferencia bancaria en euros. Los datos bancarios se facilitarán al confirmar la reserva. Todos los precios se indican con los impuestos aplicables incluidos, salvo que se indique lo contrario.</p>
            <p>Puede requerirse un depósito para garantizar la reserva. El saldo restante deberá abonarse según lo acordado en el momento de la reserva. La reserva no se considera confirmada hasta que se haya recibido el depósito (o el importe íntegro, en su caso).</p>
          </section>

          <section className="legal-section">
            <h2>4. Cancelaciones y modificaciones</h2>
            <p><strong>Cancelación por tu parte:</strong></p>
            <ul>
              <li>Con más de 14 días de antelación: reembolso íntegro del depósito abonado</li>
              <li>Entre 7 y 14 días de antelación: se retiene el 50 % del importe total de la reserva</li>
              <li>Con menos de 7 días de antelación: se retiene el importe total de la reserva</li>
            </ul>
            <p>Las cancelaciones deben comunicarse por escrito al correo <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a>.</p>
            <p><strong>Cancelación por nuestra parte:</strong> En el improbable caso de que debamos cancelar (por ejemplo, por enfermedad, condiciones meteorológicas extremas o circunstancias de fuerza mayor), te ofreceremos un reembolso íntegro o una fecha alternativa. No nos hacemos responsables de los gastos adicionales en los que puedas haber incurrido, como vuelos o alojamiento.</p>
            <p><strong>Condiciones meteorológicas:</strong> El golf es una actividad al aire libre. No cancelamos por lluvia ligera. En caso de tormenta eléctrica, condiciones climatológicas severas o cierre del campo, reprogramaremos la actividad o emitiremos un reembolso según nuestro criterio.</p>
          </section>

          <section className="legal-section">
            <h2>5. Tus responsabilidades</h2>
            <p>Eres responsable de:</p>
            <ul>
              <li>Contar con un seguro de viaje y de actividades adecuado para tu visita a Mallorca</li>
              <li>Llegar a la hora y al lugar acordados</li>
              <li>Respetar las normas y la etiqueta del campo de golf</li>
              <li>Cualquier daño causado a las instalaciones del campo por un comportamiento negligente o temerario</li>
              <li>Comunicar cualquier condición de salud relevante que pueda afectar a tu capacidad de participar con seguridad</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Normas del campo y green fees</h2>
            <p>Todos los participantes deben cumplir las normas y el código de vestimenta de cada campo visitado. Nos reservamos el derecho de dar por finalizada la experiencia sin reembolso en caso de que un participante sea invitado a abandonar el campo por su conducta.</p>
            <p>Las green fees y demás tasas del campo están incluidas en el precio indicado, salvo que se especifique lo contrario. Los gastos de consumición (comida, bebida, alquiler de material no incluido en el acuerdo) corren a cargo del participante.</p>
          </section>

          <section className="legal-section">
            <h2>7. Limitación de responsabilidad</h2>
            <p>Adoptamos todas las precauciones razonables para ofrecer una experiencia segura y satisfactoria. No obstante, el golf es una actividad física y la participación se realiza bajo la propia responsabilidad del participante.</p>
            <p>En la máxima medida permitida por la legislación española, no somos responsables de:</p>
            <ul>
              <li>Lesiones personales, salvo que sean consecuencia de nuestra negligencia</li>
              <li>Pérdida o daño de bienes personales</li>
              <li>Daños indirectos o consecuentes</li>
              <li>Pérdidas derivadas de circunstancias ajenas a nuestro control razonable</li>
            </ul>
            <p>Nada de lo establecido en estos términos limita nuestra responsabilidad por muerte o lesiones personales causadas por nuestra negligencia, ni por fraude o declaraciones fraudulentas.</p>
          </section>

          <section className="legal-section">
            <h2>8. Propiedad intelectual</h2>
            <p>Todo el contenido de este sitio web —incluidos textos, imágenes, vídeos y marca— es propiedad de Mr Mallorca Golf y no puede ser reproducido sin autorización escrita.</p>
          </section>

          <section className="legal-section">
            <h2>9. Privacidad</h2>
            <p>El tratamiento de tus datos personales se rige por nuestra <Link href="/es/privacy-policy" style={{color:'var(--gold-light)'}}>Política de Privacidad</Link>, que forma parte integrante de estos términos.</p>
          </section>

          <section className="legal-section">
            <h2>10. Legislación aplicable y jurisdicción</h2>
            <p>Estos términos se rigen por la legislación española. Cualquier controversia derivada de estos términos o de nuestros servicios estará sometida a la jurisdicción de los tribunales de las Islas Baleares, España, salvo que seas un consumidor residente en otro Estado miembro de la UE, en cuyo caso conservas el derecho a presentar reclamaciones ante los tribunales de tu país de residencia.</p>
          </section>

          <section className="legal-section">
            <h2>11. Modificaciones de estos términos</h2>
            <p>Podemos actualizar estos términos periódicamente. La fecha que figura al inicio de esta página refleja la última revisión. Las reservas confirmadas antes de cualquier modificación se regirán por los términos vigentes en el momento de la reserva.</p>
          </section>

          <section className="legal-section">
            <h2>12. Contacto</h2>
            <p>Para cualquier consulta sobre estos términos, contáctanos en <a href="mailto:andy@mrmallorcagolf.com">andy@mrmallorcagolf.com</a>.</p>
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

