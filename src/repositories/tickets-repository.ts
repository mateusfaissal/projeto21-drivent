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

async function findByEnrollment(enrollmentId: number) {
    const ticket = await prisma.ticket.findUnique({
        where: {
            enrollmentId
        },
        include: {
            TicketType: true
        },
    });

    return ticket;
}

async function findTicketTypes(){
    const res = await prisma.ticketType.findMany();
    return res;
}
export const ticketsRepository = {
    create,
    findByEnrollment,
    findTicketTypes,
}