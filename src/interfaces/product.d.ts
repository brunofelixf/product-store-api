import { Status } from "@prisma/client";

export interface ICreateProduct {
    name: string;
    category: string;
    status: Status;
    quantity: number;
}