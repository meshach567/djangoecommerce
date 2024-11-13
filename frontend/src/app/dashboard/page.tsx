import { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product:any) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-gray-700 font-bold">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;