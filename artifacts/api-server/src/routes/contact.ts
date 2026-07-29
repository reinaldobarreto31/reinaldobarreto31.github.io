import { Router, type IRouter } from "express";
import { SubmitContactBody } from "@workspace/api-zod";
import { db, contactSubmissionsTable } from "@workspace/db";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const router: IRouter = Router();

function createTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

router.post("/contact", async (req, res, next) => {
  try {
    const parsed = SubmitContactBody.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        error: "validation_failed",
        issues: parsed.error.issues,
      });
      return;
    }

    const { name, email, subject, message } = parsed.data;

    // 1. Persist to database
    const [row] = await db
      .insert(contactSubmissionsTable)
      .values({
        name,
        email,
        subject: subject ?? null,
        message,
      })
      .returning();

    if (!row) {
      res.status(500).json({ error: "insert_failed" });
      return;
    }

    // 2. Send email notification (non-blocking — failure doesn't affect the response)
    const transporter = createTransporter();
    if (transporter) {
      const toEmail = process.env.GMAIL_USER!;
      transporter
        .sendMail({
          from: `"Portfólio Contact" <${toEmail}>`,
          to: toEmail,
          replyTo: email,
          subject: `[Portfólio] ${subject || "Nova mensagem"} — de ${name}`,
          text: `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject || "(sem assunto)"}\n\n${message}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px">
              <h2 style="color:#CC0000">Nova mensagem pelo portfólio</h2>
              <table style="border-collapse:collapse;width:100%">
                <tr><td style="padding:6px;font-weight:bold">Nome</td><td>${name}</td></tr>
                <tr><td style="padding:6px;font-weight:bold">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:6px;font-weight:bold">Assunto</td><td>${subject || "(sem assunto)"}</td></tr>
              </table>
              <hr style="border-color:#CC0000;margin:16px 0"/>
              <p style="white-space:pre-wrap">${message}</p>
            </div>`,
        })
        .then(() => logger.info({ to: toEmail }, "Contact email sent"))
        .catch((err) => logger.warn({ err }, "Failed to send contact email — message saved to DB"));
    } else {
      logger.warn("GMAIL_USER / GMAIL_APP_PASSWORD not set — email not sent, message saved to DB only");
    }

    res.status(201).json({
      id: row.id,
      name: row.name,
      email: row.email,
      subject: row.subject,
      message: row.message,
      createdAt: row.createdAt.toISOString(),
    });
  } catch (err) {
    next(err);
  }
});

export default router;
