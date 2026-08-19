export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  packageTaken: string;
  rating: number;
  date: string;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dato' Hj Razak & Datin Noraini",
    location: "Shah Alam, Selangor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    packageTaken: "Pakej Umrah VIP Musim Sejuk",
    rating: 5,
    date: "Januari 2026",
    comment: "Alhamdulillah pengalaman umrah bersama Kembara Travel sangat memuaskan. Hotel sangat dekat betul-betul di perkarangan Masjidil Haram & Masjid Nabawi. Mutawwif sangat berilmu dan prihatin dengan warga emas."
  },
  {
    id: "2",
    name: "Dr. Farhan & Keluarga",
    location: "Bangi, Selangor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    packageTaken: "Switzerland & French Alps Explorer",
    rating: 5,
    date: "Disember 2025",
    comment: "Pakej yang tersusun sangat rapi! Makanan halal sedap dan terjaga sepanjang trip di Swiss. Pemandu pelancong santai tapi profesional. Anak-anak seronok main salji di Gunung Titlis. Akan repeat lagi trip Jepun nanti!"
  },
  {
    id: "3",
    name: "Nurul Aisyah & Suami",
    location: "Johor Bahru, Johor",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    packageTaken: "Syurga Bawah Laut Semporna & Mabul",
    rating: 5,
    date: "Februari 2026",
    comment: "Pakej honeymoon paling best! Bilik water bungalow di Mabul memang view luar biasa. Krew bot bawa snorkeling sangat peramah dan gambar gopro underwater sangat lawa. Servis 5 bintang!"
  },
  {
    id: "4",
    name: "Mohd Khairul & Rakan-rakan",
    location: "Kuala Lumpur",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
    packageTaken: "Japan Golden Route (Tokyo, Fuji & Kyoto)",
    rating: 5,
    date: "November 2025",
    comment: "Trip Jepun paling tenang sebab tak payah pening kepala cari kedai makan halal atau stesen train. Tour guide Melayu pandai cakap Jepun, bawa tempat-tempat menarik & spot OOTD yang viral!"
  }
];
