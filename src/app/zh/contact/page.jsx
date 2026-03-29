import PageLayout from '../../../components/PageLayout'
import ContactForm_ZH from './ContactForm_ZH'

export const metadata = {
  title: '联系我 — Mr Mallorca Golf | Andy Griffiths PGA职业教练',
  description: '预约马略卡岛私人高尔夫日。Andy Griffiths在24小时内亲自回复。',
  alternates: { canonical: 'https://www.mrmallorcagolf.com/zh/contact' },
}

export default function Contact_ZH() {
  return (
    <PageLayout lang="zh" navTransparent={false}>
      <ContactForm_ZH />
    </PageLayout>
  )
}
