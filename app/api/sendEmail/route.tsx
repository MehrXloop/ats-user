import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request:any) {
    try {
        const { subject, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: 'mehrunissa507@gmail.com',
                pass: '!!june2002'
            }
        })

        const mailOption = {
            from: 'mehrunissa507@gmail.com',
            to: 'mehrunissapirwani116@gmail.com',
            subject: "Send Email Tutorial",
            html: `
        <h3>Hello </h3>
        <li> title: ${subject}</li>
        <li> message: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}