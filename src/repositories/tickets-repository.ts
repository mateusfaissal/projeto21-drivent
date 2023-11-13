import { prisma } from "@/config"
import { CreateTicket } from "@/protocols"
import { TicketStatus } from "@prisma/client"

async function create(ticket: CreateTicket) {
    const newTicket = await prisma.ticket.create({
        data: ticket,
        include: {TicketType: true },
    });
    return newTicket;
}
export const ticketsRepository = {
    create
}