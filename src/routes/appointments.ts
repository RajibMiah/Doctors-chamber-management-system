import express, { Request, Response, Router } from "express";

const router: Router = express();

router.get("/appointments", (req: Request, res: Response) => {
  res.json({ appointments: {} });
});

// Endpoint for creating an appointment
router.post("/appointments", (req: Request, res: Response) => {
  res.json({ message: "Appointment created successfully" });
});

export default router;
