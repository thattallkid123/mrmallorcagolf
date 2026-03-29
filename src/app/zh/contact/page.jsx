import PageLayout from '../../../components/PageLayout'
import ContactForm_ZH from './ContactForm_ZH'

export const metadata = {
  title: 'è”ç³»æˆ‘ â€” Mr Mallorca Golf | Andy Griffiths PGAèŒä¸šæ•™ç»ƒ',
  description: 'é¢„çº¦é©¬ç•¥å¡å²›ç§äººé«˜å°”å¤«æ—¥ã€‚Andy Griffithsåœ¨24å°æ—¶å†…äº²è‡ªå›žå¤ã€‚',
  alternates: { canonical: 'https://mrmallorcagolf.com/zh/contact' },
}

export default function Contact_ZH() {
  return (
    <PageLayout lang="zh" navTransparent={false}>
      <ContactForm_ZH />
    </PageLayout>
  )
}

