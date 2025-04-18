// src/invoice/dto/create-invoice.dto.ts
class InvoiceItemDto {
  stockId: string;
  color: string;
  size: string;
  image: string;
  reference: string;
  nom: string;
  quantity: number;
  prixAchat: number;
  prixVente: number;
}

export class CreateInvoiceDto {
  invoiceNumber?: string;
  date: string;
  customerName: string;
  customerAddress: string;
  customerPhone: string;
  items: InvoiceItemDto[];
  subtotal: number;
  tax: number;
  total: number;
  status?: 'valid' | 'rejected' | 'pending';
  notes?: string;
}
