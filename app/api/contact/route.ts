import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ContactRequest = {
  name: string
  email: string
  service?: string
  message: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactRequest>
    const name = (body.name || "").toString().trim()
    const email = (body.email || "").toString().trim()
    const service = (body.service || "").toString().trim()
    const message = (body.message || "").toString().trim()

    if (!name || !isValidEmail(email) || !message) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 })
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const toAddress = process.env.CONTACT_TO || "info@photonecho.dev"
    const fromAddress = process.env.CONTACT_FROM || `Photon Echo <info@photonecho.dev>`

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json({ error: "Email not configured" }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    })

    const subject = `Project Inquiry from ${name}${service ? ` - ${service}` : ""}`
    const text = `Name: ${name}\nEmail: ${email}\nService: ${service || "Not specified"}\n\nMessage:\n${message}`

    await transporter.sendMail({
      to: toAddress,
      from: fromAddress,
      replyTo: email,
      subject,
      text,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}


