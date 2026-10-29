import { FormEvent } from 'react'
import { PERSONAL } from '../data'

export default function EnquiryForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Project enquiry from ${f.get('name')}`)
    const body = encodeURIComponent(`${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`)
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`
  }
  return (
    <form className="enquiry-form" style={{ maxWidth: '100%' }} onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Email Address" required />
      <textarea name="message" placeholder="Tell me about your project..." rows={4} required />
      <button type="submit">SEND ENQUIRY</button>
    </form>
  )
}
