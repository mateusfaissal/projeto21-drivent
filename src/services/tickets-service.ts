import { invalidDataError, notFoundError } from "@/errors";
import { CreateTicket } from "@/protocols";
import { enrollmentRepository } from "@/repositories";
import { ticketsRepository } from "@/repositories/tickets-repository";
import { TicketStatus } from "@prisma/client";

async function create(userId: number, ticketTypeId: number) {
    if (!ticketTypeId) {
        throw invalidDataError('ticketTypeId');
      }
    
      const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
      if (!enrollment) {
        throw notFoundError();
      }

      const ticket: CreateTicket = {
        enrollmentId: enrollment.id,
        ticketTypeId,
        status: TicketStatus.RESERVED
      }

      const result = await ticketsRepository.create(ticket);
      return result;
}

async function getById(userId: number) {
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    
    if (!enrollment) {
        throw notFoundError();
    }

    const ticket = await ticketsRepository.findByEnrollment(enrollment.id);
    if (!ticket) {
        throw notFoundError();
    }

    return ticket;

}
export const ticketsService = {
    create,
    getById
}