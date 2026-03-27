import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { CONTACT_INFO } from '@/constants/contact'

export default function ContactSection() {
    const phone = "9289210000"

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        requirement: '',
        quantity: '',
        details: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        if (!formData.name || !formData.phone || !formData.requirement) {
            alert("Please fill all required fields")
            return
        }

        const message = `
Hello DSK Electricals Limited,

I would like to make an enquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}

Requirement: ${formData.requirement}
Quantity: ${formData.quantity || 'N/A'}

Additional Details:
${formData.details || 'N/A'}
        `

        const encodedMessage = encodeURIComponent(message)

        window.open(
            `https://wa.me/91${phone}?text=${encodedMessage}`,
            '_blank'
        )
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] min-h-[560px]">

            {/* LEFT: DETAILS */}
            <div className="bg-navy py-16 md:py-[72px] px-4 md:px-8 lg:px-12 relative overflow-hidden">
                <div className="relative z-10">
                    <Reveal>
                        <p className="flex items-center gap-[10px] text-[11px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                            Get in touch
                        </p>
                    </Reveal>

                    <Reveal delay={100}>
                        <h2 className="font-serif text-[clamp(28px,4.5vw,48px)] font-semibold text-on-dark mb-10 leading-[1.12]">
                            We'd love to<br />hear from you
                        </h2>
                    </Reveal>

                    <Reveal delay={200} className="mb-8">
                        <h3 className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-2">
                            Office Address
                        </h3>
                        <div className="font-sans text-[14.5px] text-white/95 leading-[1.9]">
                            {CONTACT_INFO.address.map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={200} className="mb-8">
                        <h3 className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-2">
                            Phone
                        </h3>
                        <div className="font-sans text-[14.5px] text-white/95 leading-[1.9] flex flex-col gap-1">
                            {CONTACT_INFO.phones.map((p, i) => (
                                <a key={i} href={p.href} className="hover:text-gold">
                                    {p.display}
                                </a>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={300} className="mb-8">
                        <h3 className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-2">
                            Email
                        </h3>
                        <a href={CONTACT_INFO.email.href} className="text-white/95 hover:text-gold">
                            {CONTACT_INFO.email.display}
                        </a>
                    </Reveal>

                    <Reveal delay={300} className="mb-8">
                        <h3 className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-2">
                            Business Hours
                        </h3>
                        <div className="text-white/95">
                            {CONTACT_INFO.hours.map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="bg-cream py-16 md:py-[72px] px-4 md:px-8 lg:px-14 border-t lg:border-t-0 lg:border-l border-border-cream">

                <Reveal>
                    <p className="flex items-center gap-[10px] text-[11px] tracking-[0.22em] uppercase text-gold mb-[10px]">
                        Send an enquiry
                    </p>
                </Reveal>

                <Reveal delay={100}>
                    <h2 className="font-serif text-[clamp(30px,5vw,46px)] text-ink mb-2">
                        Tell us what<br />you need
                    </h2>
                </Reveal>

                <Reveal delay={200}>
                    <p className="text-muted mb-9 text-[14.5px]">
                        Fill in the form and we’ll respond on WhatsApp instantly.
                    </p>
                </Reveal>

                <Reveal className="flex flex-col gap-3.5">

                    <div className="flex flex-col sm:flex-row gap-3.5">
                        <input name="name" placeholder="Full name *" onChange={handleChange} className="flex-1 w-full bg-cream-dark px-4 py-3 min-w-0" />
                        <input name="phone" placeholder="Phone number *" onChange={handleChange} className="flex-1 w-full bg-cream-dark px-4 py-3 min-w-0" />
                    </div>

                    <input name="email" placeholder="Email" onChange={handleChange} className="bg-cream-dark px-4 py-3" />

                    <div className="flex flex-col sm:flex-row gap-3.5">
                        <input name="requirement" placeholder="Requirement *" onChange={handleChange} className="flex-1 w-full bg-cream-dark px-4 py-3 min-w-0" />
                        <input name="quantity" placeholder="Quantity" onChange={handleChange} className="flex-1 w-full bg-cream-dark px-4 py-3 min-w-0" />
                    </div>

                    <textarea name="details" placeholder="Additional details..." onChange={handleChange} className="bg-cream-dark px-4 py-3 min-h-[100px]" />

                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="self-start bg-navy text-white px-9 py-3.5 mt-2 hover:bg-gold hover:text-navy transition-all"
                    >
                        Send via WhatsApp →
                    </button>

                </Reveal>
            </div>
        </div>
    )
}