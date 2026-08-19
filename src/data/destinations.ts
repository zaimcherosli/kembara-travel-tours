export interface Destination {
  id: string;
  name: string;
  country: string;
  category: 'antarabangsa' | 'domestik' | 'umrah' | 'pulau';
  image: string;
  tag: string;
  packageCount: number;
  startingPrice: number;
}

export const destinations: Destination[] = [
  {
    id: "switzerland",
    name: "Switzerland & Alps",
    country: "Eropah",
    category: "antarabangsa",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    tag: "Pergunungan Salji",
    packageCount: 4,
    startingPrice: 8490
  },
  {
    id: "japan",
    name: "Tokyo, Kyoto & Osaka",
    country: "Jepun",
    category: "antarabangsa",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    tag: "Musim Luruh & Bunga",
    packageCount: 5,
    startingPrice: 6390
  },
  {
    id: "makkah-madinah",
    name: "Makkah & Madinah",
    country: "Arab Saudi",
    category: "umrah",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
    tag: "Ibadah & Ziarah VIP",
    packageCount: 6,
    startingPrice: 7890
  },
  {
    id: "kundasang",
    name: "Kundasang & Kinabalu",
    country: "Sabah, Malaysia",
    category: "domestik",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    tag: "Udara Sejuk Segar",
    packageCount: 3,
    startingPrice: 990
  },
  {
    id: "semporna",
    name: "Semporna & Mabul",
    country: "Sabah, Malaysia",
    category: "pulau",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    tag: "Laut Sejernih Kristal",
    packageCount: 4,
    startingPrice: 1390
  },
  {
    id: "vietnam",
    name: "Hanoi, Sapa & Halong Bay",
    country: "Vietnam",
    category: "antarabangsa",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    tag: "Cruise UNESCO",
    packageCount: 3,
    startingPrice: 2890
  }
];
