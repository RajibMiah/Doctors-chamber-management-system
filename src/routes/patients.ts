import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.post("/patients", (req: Request, res: Response) => {
  res.json({ message: "Patient created successfully" });
});

router.get("/patients", (req: Request, res: Response) => {
  res.json({ patients: [] });
});

export default router;
