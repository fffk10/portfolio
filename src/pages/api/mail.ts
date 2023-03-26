import { createTransport } from 'nodemailer';

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean
}

const SUBJECT = "Portfolioサイトからのお問い合わせメール:"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body } = req

  if (method !== "POST") {
    return res.status(405).json({
      success: false,
    })
  }

  if (!body) {
    return res.status(400).json({
      success: false,
    })
  }
  console.log("body=", body)
  const json = JSON.parse(body)

  const transporter = createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    to: process.env.MAIL_TO,
    subject: SUBJECT + json.subject,
    text: json.content,
  });

  res.status(200).json({
    success: true,
  })
}
