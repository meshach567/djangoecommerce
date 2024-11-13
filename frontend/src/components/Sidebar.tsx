import Link from 'next/link';
import { Package2, ShoppingCart, LayoutDashboard } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <div className="text-xl font-bold mb-8">E-commerce Admin</div>
      <nav className="space-y-2">
        <Link href="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link href="/products" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
          <Package2 className="w-5 h-5" />
          <span>Products</span>
        </Link>
        <Link href="/orders" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
          <ShoppingCart className="w-5 h-5" />
          <span>Orders</span>
        </Link>
      </nav>
    </div>
  );
}
