import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "@/middlewares";
import { TicketSchema } from "@/schemas/tickets-schemas";
import { ticketsService } from "@/services/tickets-service";

export async function createTicket(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const { ticketTypeId } = req.body as TicketSchema;

    const newTicket = await ticketsService.create(userId, ticketTypeId);
    return res.status(httpStatus.CREATED).send(newTicket)
};