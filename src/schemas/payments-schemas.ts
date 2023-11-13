import Joi from 'joi';
import { Payment } from '@prisma/client';

export interface PaymentCard {
  issuer: string;
  number: string;
  name: string;
  expirationDate: string;
  cvv: string;
}

export interface PaymentBody {
  ticketId: number;
  cardData: PaymentCard;
}

 export type PaymentMethod = Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>;




export const paymentSchema = Joi.object<PaymentBody>({
  ticketId: Joi.number().required(),
  cardData: Joi.object({
    issuer: Joi.string().required(),
    number: Joi.string().required(),
    name: Joi.string().required(),
    expirationDate: Joi.string().required(),
    cvv: Joi.string().required(),
  }).required(),
});
