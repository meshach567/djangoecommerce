export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    createdAt: string;
  }
  
  export interface Order {
    id: number;
    userId: number;
    userName: string;
    totalAmount: number;
    status: 'pending' | 'completed' | 'cancelled';
    items: OrderItem[];
    createdAt: string;
  }
  
  export interface OrderItem {
    id: number;
    productId: number;
    productName: string;
    quantity: number;
    price: number;
  }
  