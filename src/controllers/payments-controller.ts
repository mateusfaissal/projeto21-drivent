import httpStatus from "http-status";
import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import { PaymentBody } from "@/schemas/payments-schemas";
import { paymentsService } from "@/services";

export async function processPayment(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const { ticketId, cardData } = req.body as PaymentBody;

    const newPayment = await paymentsService.processPayment(ticketId, userId, cardData)
    res.status(httpStatus.OK).send(newPayment);
};

export async function getPayment(req: AuthenticatedRequest, res: Response) {
    const ticketId = Number(req.query.ticketId);
    const { userId } = req;

    const payments = await paymentsService.getPayments(userId, ticketId)
    return res.status(httpStatus.OK).send(payments);
};