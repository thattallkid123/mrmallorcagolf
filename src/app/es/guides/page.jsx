import { buildGuidesIndexMetadata } from '../../../lib/page-metadata'
import GuidesIndexView from '../../guides/GuidesIndexView'

export const metadata = buildGuidesIndexMetadata('es')

const liveGuides = [
  { slug: 'son-gual-review', badge: 'Análisis del campo', badgeGold: true, title: 'Son Gual Golf Mallorca — Análisis honesto de un Profesional PGA (2026)', intro: 'Mi campo más jugado en la isla. El viento, los greens, los últimos hoyos — y por qué Obama y Nadal siguen volviendo.', readTime: '7 min', keywords: 'Championship · Par 72 · €80–165 · Handicap requerido' },
  { slug: 'alcanada-review', badge: 'Análisis del campo', badgeGold: true, title: 'Club de Golf Alcanada — Análisis honesto de un Profesional PGA (2026)', intro: 'El campo al que llevo a la gente cuando quiero que vuelvan a casa con una historia. El faro lo cambia todo.', readTime: '7 min', keywords: 'Costa · Par 72 · €115–220 · Rolex Challenge Tour Grand Final' },
  { slug: 'santa-ponsa-1-review', badge: 'Análisis del campo', badgeGold: true, title: 'Golf Santa Ponsa 1, Mallorca — Análisis honesto de un Profesional PGA (2026)', intro: 'Uno de los campos más largos de Europa, historia en el DP World Tour y un campo que genuinamente ayuda a recuperar la confianza con el driver.', readTime: '6 min', keywords: 'Championship · Par 72 · €77–126 · Acceso público' },
]

const comingSoonGuides = [
  { slug: 'a-day-at-son-gual', badge: 'La Experiencia', badgeGold: false, title: 'Un día en Son Gual con un Profesional PGA', intro: 'Lo que ocurre realmente cuando pasas un día completo en el mejor campo de Mallorca con un coach que lo juega casi cada semana.', readTime: '5 min', keywords: 'Son Gual · Jugar con un Pro · Experiencia de día completo' },
  { slug: 'best-golf-courses-mallorca', badge: 'Guía', badgeGold: false, title: 'Los mejores campos de golf de Mallorca — Ranking honesto de un Profesional PGA', intro: 'Veintidós campos en la isla. Así los clasificaría para un visitante con tiempo limitado y altas expectativas.', readTime: '8 min', keywords: 'Todos los niveles · Comparativa de greenfees · Actualizado 2026' },
  { slug: 'is-mallorca-good-for-golf', badge: 'Guía', badgeGold: false, title: '¿Es Mallorca buena para el golf? Una respuesta honesta de alguien que vive aquí', intro: 'La versión sin filtros: qué hace mejor la isla que Portugal, dónde se queda corta y a quién le conviene.', readTime: '5 min', keywords: 'Mallorca vs. Portugal · Calidad de los campos · Para todos los niveles' },
  { slug: 'best-time-play-golf-mallorca', badge: 'Guía', badgeGold: false, title: 'La mejor época para jugar al golf en Mallorca — Mes a mes', intro: 'Octubre es el mes que elegiría. Aquí explico por qué y qué ofrece cada mes en términos de clima, precio y afluencia.', readTime: '6 min', keywords: 'Clima · Greenfees por temporada · Afluencia' },
  { slug: 'golf-cost-mallorca', badge: 'Guía', badgeGold: false, title: '¿Cuánto cuesta el golf en Mallorca? Greenfees, alquiler y costes ocultos', intro: 'El panorama completo de lo que cuesta realmente un viaje de golf aquí: greenfees, alquiler, caddies y dónde ahorrar sin sacrificar calidad.', readTime: '5 min', keywords: '€77–220 greenfees · Alquiler · Caddies · Precios 2026' },
  { slug: 'golf-trip-planning-mallorca', badge: 'Guía', badgeGold: false, title: 'Planificar un viaje de golf a Mallorca — Todo lo que necesitas saber', intro: 'Vuelos, campos, dónde alojarse cerca del golf, cómo moverse. La guía práctica que desearía haber tenido cuando llegué.', readTime: '7 min', keywords: 'Planificación · Dónde alojarse · Cómo llegar' },
]

export default function GuidesIndex_ES() {
  const content = {
    hero: {
      breadcrumbHome: 'ES',
      breadcrumbCurrent: 'Guías',
      title: 'Golf en Mallorca. Guías honestas.',
      lead: 'Análisis de campos, planificación de viajes y green fees - escritas por un Profesional PGA que juega aquí cada semana.',
      tags: ['Updated 2026', 'Análisis de primera mano', 'PGA Professional'],
    },
    liveGuides,
    comingSoonGuides,
    comingSoonLabel: 'Próximamente',
    finalCta: {
      eyebrow: '¿Listo para jugar?',
      title: 'Una ronda privada en uno de estos campos, con un Profesional PGA a tu lado.',
      body: 'Dime tus fechas y lo que buscas. Te respondo personalmente en 24 horas.',
      primaryCta: 'Ver las experiencias →',
      secondaryCta: 'Contactar',
    },
  }

  return <GuidesIndexView locale="es" pageLang="es" content={content} />
}