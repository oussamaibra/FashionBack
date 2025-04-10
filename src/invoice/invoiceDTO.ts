// src/invoice/dto/create-invoice.dto.ts
class InvoiceItemDto {
  stockId: number;
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
  customerId?: string;
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
