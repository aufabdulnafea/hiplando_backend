import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
})


export async function sendEmail(from: string, to: string, subject: string, html: string) {
    await transport.sendMail({
        from,
        to,
        subject,
        html
    })
}

export async function sendVerificationEmail(to: string, verificationLink: string) {
    const html = `<p>Click below to verify your account:</p><a href="${verificationLink}">${verificationLink}</a>`
    await sendEmail('', to, 'verification email', html)
}

