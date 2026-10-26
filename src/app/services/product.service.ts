import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  readonly categories = ['Electronics', 'Fashion', 'Home', 'Books'];
private data: Product[] = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 99, stock: 25, description: 'Noise-cancelling over-ear headphones.', image: 'https://picsum.photos/seed/p1/400/300' },
    { id: 2, name: 'Smart Watch', category: 'Electronics', price: 149, stock: 12, description: 'Fitness tracking and notifications.', image: 'https://picsum.photos/seed/p2/400/300' },
    { id: 3, name: 'Denim Jacket', category: 'Fashion', price: 59, stock: 40, description: 'Classic fit denim jacket.', image: 'https://picsum.photos/seed/p3/400/300' },
    { id: 4, name: 'Sneakers', category: 'Fashion', price: 79, stock: 30, description: 'Comfortable everyday sneakers.', image: 'https://picsum.photos/seed/p4/400/300' },
    { id: 5, name: 'Table Lamp', category: 'Home', price: 35, stock: 18, description: 'Warm LED desk lamp.', image: 'https://picsum.photos/seed/p5/400/300' },
    { id: 6, name: 'Angular in Depth', category: 'Books', price: 29, stock: 50, description: 'A deep dive into Angular.', image: 'https://picsum.photos/seed/p6/400/300' },
    { id: 7, name: 'Mechanical Keyboard', category: 'Electronics', price: 119, stock: 20, description: 'RGB tactile mechanical gaming keyboard.', image: 'https://picsum.photos/seed/p7/400/300' },
    { id: 8, name: 'Ergonomic Mouse', category: 'Electronics', price: 49, stock: 35, description: 'Wireless vertical mouse for wrist comfort.', image: 'https://picsum.photos/seed/p8/400/300' },
    { id: 9, name: 'Leather Wallet', category: 'Fashion', price: 39, stock: 60, description: 'Slim RFID-blocking bi-fold wallet.', image: 'https://picsum.photos/seed/p9/400/300' },
    { id: 10, name: 'Sunglasses', category: 'Fashion', price: 25, stock: 45, description: 'Polarized classic aviator sunglasses.', image: 'https://picsum.photos/seed/p10/400/300' },
    { id: 11, name: 'Scented Candle Set', category: 'Home', price: 22, stock: 28, description: 'Natural soy wax lavender and vanilla candles.', image: 'https://picsum.photos/seed/p11/400/300' },
    { id: 12, name: 'TypeScript Guide', category: 'Books', price: 34, stock: 40, description: 'Mastering strongly typed JavaScript.', image: 'https://picsum.photos/seed/p12/400/300' },
    { id: 13, name: 'Bluetooth Speaker', category: 'Electronics', price: 65, stock: 22, description: 'Waterproof portable bass speaker.', image: 'https://picsum.photos/seed/p13/400/300' },
    { id: 14, name: 'Gaming Monitor', category: 'Electronics', price: 249, stock: 15, description: '27-inch 144Hz IPS display monitor.', image: 'https://picsum.photos/seed/p14/400/300' },
    { id: 15, name: 'Cotton Hoodie', category: 'Fashion', price: 45, stock: 55, description: 'Soft fleece unisex hoodie.', image: 'https://picsum.photos/seed/p15/400/300' },
    { id: 16, name: 'Canvas Backpack', category: 'Fashion', price: 52, stock: 30, description: 'Vintage laptop school travel bag.', image: 'https://picsum.photos/seed/p16/400/300' },
    { id: 17, name: 'Throw Blanket', category: 'Home', price: 28, stock: 24, description: 'Cozy knitted sofa fleece blanket.', image: 'https://picsum.photos/seed/p17/400/300' },
    { id: 18, name: 'RxJS Essentials', category: 'Books', price: 27, stock: 32, description: 'Reactive programming concepts simplified.', image: 'https://picsum.photos/seed/p18/400/300' },
    { id: 19, name: 'HD Webcam', category: 'Electronics', price: 59, stock: 18, description: '1080p webcam with dual microphones.', image: 'https://picsum.photos/seed/p19/400/300' },
    { id: 20, name: 'USB-C Docking Station', category: 'Electronics', price: 89, stock: 14, description: 'Multi-port hub with 4K HDMI support.', image: 'https://picsum.photos/seed/p20/400/300' },
    { id: 21, name: 'Running Shoes', category: 'Fashion', price: 85, stock: 27, description: 'Lightweight breathable sports shoes.', image: 'https://picsum.photos/seed/p21/400/300' },
    { id: 22, name: 'Polo T-Shirt', category: 'Fashion', price: 32, stock: 50, description: 'Breathable slim-fit cotton polo shirt.', image: 'https://picsum.photos/seed/p22/400/300' },
    { id: 23, name: 'Ceramic Coffee Mug', category: 'Home', price: 16, stock: 40, description: 'Handcrafted minimalist ceramic mug.', image: 'https://picsum.photos/seed/p23/400/300' },
    { id: 24, name: 'Clean Code Concepts', category: 'Books', price: 38, stock: 25, description: 'Principles of software craftmanship.', image: 'https://picsum.photos/seed/p24/400/300' },
    { id: 25, name: 'Wireless Earbuds', category: 'Electronics', price: 79, stock: 30, description: 'In-ear earbuds with charging case.', image: 'https://picsum.photos/seed/p25/400/300' },
    { id: 26, name: 'Portable Power Bank', category: 'Electronics', price: 39, stock: 45, description: '20000mAh fast-charging battery bank.', image: 'https://picsum.photos/seed/p26/400/300' },
    { id: 27, name: 'Formal Trousers', category: 'Fashion', price: 48, stock: 33, description: 'Stretchable classic slim-fit pants.', image: 'https://picsum.photos/seed/p27/400/300' },
    { id: 28, name: 'Winter Beanie', category: 'Fashion', price: 18, stock: 65, description: 'Warm knit ribbed skull cap.', image: 'https://picsum.photos/seed/p28/400/300' },
    { id: 29, name: 'Indoor Plant Pot', category: 'Home', price: 24, stock: 21, description: 'Modern ceramic planter with wooden stand.', image: 'https://picsum.photos/seed/p29/400/300' },
    { id: 30, name: 'Node.js Microservices', category: 'Books', price: 42, stock: 19, description: 'Building scalable backend API systems.', image: 'https://picsum.photos/seed/p30/400/300' },
    { id: 31, name: 'External SSD 1TB', category: 'Electronics', price: 109, stock: 16, description: 'High-speed portable solid state drive.', image: 'https://picsum.photos/seed/p31/400/300' },
    { id: 32, name: 'Noise Isolating Mic', category: 'Electronics', price: 69, stock: 23, description: 'USB condenser microphone for streaming.', image: 'https://picsum.photos/seed/p32/400/300' },
    { id: 33, name: 'Casual Blazer', category: 'Fashion', price: 95, stock: 17, description: 'Unstructured lightweight suit jacket.', image: 'https://picsum.photos/seed/p33/400/300' },
    { id: 34, name: 'Leather Belt', category: 'Fashion', price: 29, stock: 48, description: 'Genuine leather reversible belt.', image: 'https://picsum.photos/seed/p34/400/300' },
    { id: 35, name: 'Wall Clock', category: 'Home', price: 30, stock: 29, description: 'Silent non-ticking minimalist wall clock.', image: 'https://picsum.photos/seed/p35/400/300' },
    { id: 36, name: 'UI/UX Design Systems', category: 'Books', price: 36, stock: 35, description: 'Designing intuitive user interfaces.', image: 'https://picsum.photos/seed/p36/400/300' },
    { id: 37, name: 'Smart LED Bulb', category: 'Electronics', price: 19, stock: 60, description: 'WiFi RGB color changing light bulb.', image: 'https://picsum.photos/seed/p37/400/300' },
    { id: 38, name: 'Noise-Cancelling Earplugs', category: 'Electronics', price: 25, stock: 40, description: 'Reusable silicone earplugs for focus.', image: 'https://picsum.photos/seed/p38/400/300' },
    { id: 39, name: 'Graphic Hoodie', category: 'Fashion', price: 54, stock: 26, description: 'Modern printed streetwear hoodie.', image: 'https://picsum.photos/seed/p39/400/300' },
    { id: 40, name: 'Sports Socks (3-Pack)', category: 'Fashion', price: 15, stock: 75, description: 'Cushioned athletic ankle socks.', image: 'https://picsum.photos/seed/p40/400/300' },
    { id: 41, name: 'Desk Organizer Kit', category: 'Home', price: 26, stock: 31, description: 'Mesh metal pen holder and document tray.', image: 'https://picsum.photos/seed/p41/400/300' },
    { id: 42, name: 'CSS Grid & Flexbox', category: 'Books', price: 24, stock: 42, description: 'Mastering responsive web layouts.', image: 'https://picsum.photos/seed/p42/400/300' },
    { id: 43, name: 'Laptop Stand', category: 'Electronics', price: 33, stock: 38, description: 'Adjustable aluminum desktop riser.', image: 'https://picsum.photos/seed/p43/400/300' },
    { id: 44, name: 'Cable Management Box', category: 'Electronics', price: 18, stock: 52, description: 'Organizer box to hide power strips.', image: 'https://picsum.photos/seed/p44/400/300' },
    { id: 45, name: 'Cargo Pants', category: 'Fashion', price: 58, stock: 29, description: 'Multi-pocket utility relaxed fit pants.', image: 'https://picsum.photos/seed/p45/400/300' },
    { id: 46, name: 'Travel Duffel Bag', category: 'Fashion', price: 68, stock: 20, description: 'Water-resistant weekend gym bag.', image: 'https://picsum.photos/seed/p46/400/300' },
    { id: 47, name: 'Memory Foam Pillow', category: 'Home', price: 42, stock: 25, description: 'Ergonomic neck support sleeping pillow.', image: 'https://picsum.photos/seed/p47/400/300' },
    { id: 48, name: 'REST API Design Patterns', category: 'Books', price: 39, stock: 28, description: 'Best practices for web API architecture.', image: 'https://picsum.photos/seed/p48/400/300' },
    { id: 49, name: 'Electric Kettle', category: 'Home', price: 37, stock: 34, description: '1.7L stainless steel quick boiling kettle.', image: 'https://picsum.photos/seed/p49/400/300' },
    { id: 50, name: 'JavaScript Patterns', category: 'Books', price: 31, stock: 44, description: 'Reusable code patterns in modern JS.', image: 'https://picsum.photos/seed/p50/400/300' }
  ];

  private subject = new BehaviorSubject<Product[]>(this.data);
  products$ = this.subject.asObservable();

  getById(id: number): Product | undefined {
    return this.data.find(p => p.id === id);
  }

  add(p: Omit<Product, 'id'>) {
    const id = this.data.length ? Math.max(...this.data.map(d => d.id)) + 1 : 1;
    this.data = [...this.data, { ...p, id }];
    this.subject.next(this.data);
  }

  update(p: Product) {
    this.data = this.data.map(d => (d.id === p.id ? p : d));
    this.subject.next(this.data);
  }

  delete(id: number) {
    this.data = this.data.filter(d => d.id !== id);
    this.subject.next(this.data);
  }
}