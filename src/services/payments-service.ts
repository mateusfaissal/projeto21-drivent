import { invalidDataError, notFoundError, unauthorizedError } from "@/errors";
import { PaymentCard } from "@/schemas";
import { enrollmentRepository, ticketsRepository, paymentsRepository } from "@/repositories";

async function processPayment(ticketId: number, userId: number, cardData: PaymentCard) {
    if (!ticketId || isNaN(ticketId)) {
      throw invalidDataError('ticketId');
    }
  
    const ticket = await ticketsRepository.findTicketId(ticketId);
    if (!ticket) {
      throw notFoundError();
    }
  
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!enrollment || ticket.enrollmentId !== enrollment.id) {
      throw unauthorizedError();
    }
  
    const paymentData = {
      ticketId,
      value: ticket.TicketType.price,
      cardIssuer: cardData.issuer,
      cardLastDigits: cardData.number.slice(-4),
    };
  
    const payment = await paymentsRepository.create(ticketId, paymentData);
    await ticketsRepository.updateTicketStatus(ticketId);
  
    return payment;
  }
  