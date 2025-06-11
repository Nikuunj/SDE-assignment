import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export interface SwipeItem {
  id: number;
  image: string;
  brand: string;
  title: string;
  price: number;
  tags: string[];
  rating: number;
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}




export const mockItems: SwipeItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',
    brand: 'Nike',
    title: 'Air Max 270 React',
    price: 129.99,
    tags: ['Sneakers', 'Comfort', 'Athletic'],
    rating: 4.5
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop',
    brand: 'Apple',
    title: 'MacBook Pro 16"',
    price: 2399.99,
    tags: ['Laptop', 'Professional', 'M3 Chip'],
    rating: 4.8
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=500&fit=crop',
    brand: 'Sony',
    title: 'WH-1000XM5 Headphones',
    price: 349.99,
    tags: ['Audio', 'Noise Cancelling', 'Wireless'],
    rating: 4.7
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=400&h=500&fit=crop',
    brand: 'Ray-Ban',
    title: 'Aviator Classic',
    price: 154.99,
    tags: ['Sunglasses', 'Classic', 'UV Protection'],
    rating: 4.6
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop',
    brand: 'Samsung',
    title: 'Galaxy Watch 6',
    price: 329.99,
    tags: ['Smartwatch', 'Fitness', 'Android'],
    rating: 4.4
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop',
    brand: 'Adidas',
    title: 'Ultraboost 22',
    price: 189.99,
    tags: ['Running', 'Boost', 'Performance'],
    rating: 4.5
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=500&fit=crop',
    brand: 'Canon',
    title: 'EOS R5 Camera',
    price: 3899.99,
    tags: ['Camera', 'Professional', '8K Video'],
    rating: 4.9
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=500&fit=crop',
    brand: 'Dyson',
    title: 'V15 Detect Vacuum',
    price: 749.99,
    tags: ['Vacuum', 'Cordless', 'Laser Detection'],
    rating: 4.6
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop',
    brand: 'Hydro Flask',
    title: 'Wide Mouth 32oz',
    price: 44.99,
    tags: ['Water Bottle', 'Insulated', 'Eco-Friendly'],
    rating: 4.7
  },
  {
    id: 10,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    brand: 'Canon',
    title: 'EOS R5 Mirrorless Camera',
    price: 3899.00,
    tags: ['Photography', 'Mirrorless', '8K Video'],
    rating: 4.8
  },
  {
    id: 11,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    brand: 'Apple',
    title: 'Watch Series 9 GPS',
    price: 399.00,
    tags: ['Smart Watch', 'Fitness', 'Health'],
    rating: 4.6
  },
  {
    id: 12,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    brand: 'Nike',
    title: 'Air Jordan 1 Retro High',
    price: 170.00,
    tags: ['Sneakers', 'Basketball', 'Retro'],
    rating: 4.7
  },
  {
    id: 13,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    brand: 'Rolex',
    title: 'Submariner Date',
    price: 8100.00,
    tags: ['Luxury', 'Dive Watch', 'Swiss Made'],
    rating: 4.9
  },
  {
    id: 14,
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    brand: 'PlayStation',
    title: 'DualSense Wireless Controller',
    price: 69.99,
    tags: ['Gaming', 'Controller', 'Haptic Feedback'],
    rating: 4.8
  }
];
