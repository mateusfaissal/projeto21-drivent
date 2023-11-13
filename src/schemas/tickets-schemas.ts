import Joi from 'joi';

export interface TicketSchema {
  ticketTypeId: number;
}

export const ticketSchema = Joi.object<TicketSchema>({
  ticketTypeId: Joi.number().required(),
});