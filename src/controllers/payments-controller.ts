import httpStatus from "http-status";
import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import { PaymentBody } from "@/schemas/payments-schemas";

export async function processPayment(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const { ticketId, cardData } = req.body as PaymentBody;

    const newPayment = 3
    res.status(httpStatus.OK).send(newPayment);
}