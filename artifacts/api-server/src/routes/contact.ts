import { Router, type IRouter } from "express";
import { SubmitContactBody } from "@workspace/api-zod";
import { db, contactSubmissionsTable } from "@workspace/db";

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
