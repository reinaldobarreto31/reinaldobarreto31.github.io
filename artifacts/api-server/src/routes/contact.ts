import { Router, type IRouter } from "express";
import { SubmitContactBody } from "@workspace/api-zod";
import { db, contactSubmissionsTable } from "@workspace/db";
import { Resend } from "resend";
import { logger } from "../lib/logger";

const router: IRouter = Router();

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

    // 2. Send email notification via Resend (non-blocking)
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.GMAIL_USER ?? "reinaldobarretosilva@gmail.com";
    if (resendKey) {
      const resend = new Resend(resendKey);
      resend.emails
        .send({
          from: "Portfolio <onboarding@resend.dev>",
          to: toEmail,
          replyTo: email,
          subject: `[Portfólio] ${subject || "Nova mensagem"} — de ${name}`,
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
        .then(() => logger.info({ to: toEmail }, "Contact email sent via Resend"))
        .catch((err) => logger.warn({ err }, "Resend failed — message saved to DB"));
    } else {
      logger.warn("RESEND_API_KEY not set — email not sent, message saved to DB only");
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
