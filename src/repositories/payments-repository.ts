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

export const paymentsRepository = {
    create
};