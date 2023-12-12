import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProductCard from '../components/ProductCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // Sample product data. Replace this with your actual product data.
  const products = [
    { title: 'Product 1', description: 'This is product 1', price: 100, imageUrl: '/path/to/image1.jpg' },
    { title: 'Product 2', description: 'This is product 2', price: 200, imageUrl: '/path/to/image2.jpg' },
    // Add more products as needed
  ];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </main>
  )
}