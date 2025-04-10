// src/invoice/schemas/invoice.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type InvoiceDocument = Invoice & Document;

@Schema({ timestamps: true })
export class Invoice {
  @Prop({ required: false })
  invoiceNumber: string;

  @Prop({ type: Date, required: false })
  date: string;

  @Prop({ type: Types.ObjectId, ref: 'Client' })
  customerId?: Types.ObjectId;

  @Prop({ required: false })
  customerName: string;

  @Prop({ required: false })
  customerAddress: string;

  @Prop({ required: false })
  customerPhone: string;

  @Prop([
    {
      stockId: { type: Types.ObjectId, ref: 'Stock', required: false },
      color: { type: String, required: false },
      size: { type: String, required: false },
      reference: { type: String, required: false },
      nom: { type: String, required: false },
      image: { type: String, required: false },
      quantity: { type: Number, required: false, min: 1 },
      prixAchat: { type: Number, required: false },
      prixVente: { type: Number, required: false },
    },
  ])
  items: {
    stockId: Types.ObjectId;
    color: string;
    size: string;
    image: string;
    reference: string;
    nom: string;
    quantity: number;
    prixAchat: number;
    prixVente: number;
  }[];

  @Prop({ required: false, default: 0 })
  subtotal: number;

  @Prop({ required: false, default: 0 })
  tax: number;

  @Prop({ required: false, default: 0 })
  total: number;

  @Prop({ default: 'pending' })
  status: 'valid' | 'rejected' | 'pending';

  @Prop()
  notes?: string;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
