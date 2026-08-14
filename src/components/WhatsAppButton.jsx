'use client'
import { buildLocalePath } from '../lib/site'
import { currentPagePath, trackEvent, trackLead } from '../lib/analytics'

const WA_PREFILL = {
  en: 'Hi Andy, I have a question about a Mallorca golf trip.',
  de: 'Hallo Andy, ich habe eine Frage zu einer Mallorca-Golfreise.',
  es: 'Hola Andy, tengo una pregunta sobre un viaje de golf a Mallorca.',
  fr: "Bonjour Andy, j'ai une question sur un séjour de golf à Majorque.",
  nl: 'Hallo Andy, ik heb een vraag over een golfreis naar Mallorca.',
  sv: 'Hej Andy, jag har en fråga om en golfresa till Mallorca.',
}

export default function WhatsAppButton({ lang }) {
  const isChinese = lang === 'zh'
  const prefill = WA_PREFILL[lang] || WA_PREFILL.en
  const href = isChinese
    ? `${buildLocalePath('/contact', 'zh')}#wechat`
    : `https://wa.me/34624466702?text=${encodeURIComponent(prefill)}`
  const label = isChinese ? '联系微信' : 'Message on WhatsApp'

  function handleClick() {
    const channel = isChinese ? 'wechat' : 'whatsapp'
    trackEvent('whatsapp_click', {
      channel,
      page_path: currentPagePath(),
    })
    trackLead('message_intent', {
      contact_method: channel,
      page_path: currentPagePath(),
    })
  }

  return (
    <div className="contact-float">
      <a
        data-analytics-manual="true"
        href={href}
        target={isChinese ? undefined : '_blank'}
        rel={isChinese ? undefined : 'noopener noreferrer'}
        aria-label={label}
        title={label}
        className={`contact-float__link${isChinese ? ' contact-float__link--wechat' : ''}`}
        onClick={handleClick}
      >
        {isChinese ? (
          <svg viewBox="0 0 24 24" fill="white" style={{ width: 26, height: 26 }}>
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.36-3.88-.98l-.28-.15-2.89.44.44-2.89-.15-.28C4.36 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.71-8.04c-.18-.09-1.08-.53-1.25-.59-.17-.05-.29-.09-.41.09-.12.17-.47.59-.58.71-.11.12-.22.13-.4.04-.18-.09-.76-.28-1.46-.9-.54-.48-.91-1.07-1.01-1.25-.11-.17-.01-.26.08-.35.08-.08.18-.21.27-.31.09-.1.12-.17.18-.29.06-.12.03-.22-.02-.31-.05-.09-.41-1.01-.57-1.38-.15-.36-.31-.31-.41-.31-.11 0-.22 0-.34 0-.12 0-.31.04-.47.22-.17.17-.63.62-.63 1.51 0 .89.65 1.75.74 1.87.09.12 1.3 2.01 3.13 2.81.43.18.77.29.99.37.43.13.83.11 1.14.07.35-.05 1.08-.44 1.23-.87.15-.43.15-.8.1-.87-.04-.07-.16-.12-.34-.21z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="white" style={{ width: 26, height: 26 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        )}
      </a>
    </div>
  )
}
