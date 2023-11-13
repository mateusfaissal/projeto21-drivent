import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { paymentSchema } from "@/schemas/payments-schemas";
import { getPayment, processPayment } from "@/controllers/payments-controller";

const paymentsRouter = Router();

paymentsRouter
    .post('/process', authenticateToken, validateBody(paymentSchema), processPayment)
    .get('/', authenticateToken, getPayment)

export { paymentsRouter };