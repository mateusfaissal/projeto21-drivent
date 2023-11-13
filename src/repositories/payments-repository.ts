import { prisma } from "@/config";
import { PaymentMethod } from "@/schemas";

async function create(ticketId: number, params: PaymentMethod) {
    const res = await prisma.payment.create({
        data: {
          ticketId,
          ...params,
        },
      });
    
      return res;
}

async function findById(ticketId: number) {
    const res = await prisma.payment.findFirst({
        where: { ticketId },
      });
      return res;
}

export const paymentsRepository = {
    create,
    findById
};