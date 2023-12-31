import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { ticketSchema } from "@/schemas/tickets-schemas";
import { createTicket, getTicket, getTicketType } from "@/controllers/tickets-controller";



const ticketsRouter = Router();

ticketsRouter
    .post('/', authenticateToken, validateBody(ticketSchema), createTicket)
    .get('/', authenticateToken, getTicket)
    .get('/types', authenticateToken, getTicketType);


export { ticketsRouter };