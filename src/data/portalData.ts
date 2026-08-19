export interface BookingLead {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  packageName: string;
  category: string;
  pax: number;
  travelDate: string;
  totalAmount: number;
  paidAmount: number;
  status: 'Pertanyaan Baru' | 'Deposit Selesai' | 'Bayaran Penuh' | 'Selesai Trip' | 'Dibatalkan';
  assignedStaff: string;
  createdAt: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: 'Admin Utama' | 'Pegawai Jualan (Sales)' | 'Akauntan & Kewangan' | 'Mutawwif / Tour Lead';
  email: string;
  phone: string;
  assignedTripsCount: number;
  totalSalesDeals: number;
  status: 'Aktif' | 'Cuti' | 'Sedang Bertugas (Luar Negara)';
}

export interface TripAssignment {
  id: string;
  tripTitle: string;
  departureDate: string;
  returnDate: string;
  leadGuide: string;
  assistantGuide?: string;
  totalPax: number;
  flightNo: string;
  hotelName: string;
  status: 'Akan Datang' | 'Sedang Berlangsung' | 'Selesai';
}

export const initialBookings: BookingLead[] = [
  {
    id: "BK-2026-001",
    customerName: "Dato' Hj Razak",
    phone: "019-2819281",
    email: "razak.family@gmail.com",
    packageName: "Pakej Umrah VIP Musim Sejuk",
    category: "Umrah",
    pax: 4,
    travelDate: "05 Nov 2026",
    totalAmount: 31560,
    paidAmount: 31560,
    status: "Bayaran Penuh",
    assignedStaff: "Ustaz Amir Syakir (Mutawwif)",
    createdAt: "2026-08-10"
  },
  {
    id: "BK-2026-002",
    customerName: "Dr. Farhan Kamil",
    phone: "012-3891029",
    email: "farhan.kamil@yahoo.com",
    packageName: "Switzerland & French Alps Explorer",
    category: "Antarabangsa",
    pax: 3,
    travelDate: "15 Okt 2026",
    totalAmount: 25470,
    paidAmount: 3000,
    status: "Deposit Selesai",
    assignedStaff: "Siti Sarah (Sales Exec)",
    createdAt: "2026-08-14"
  },
  {
    id: "BK-2026-003",
    customerName: "Nurul Aisyah",
    phone: "017-8891022",
    email: "aisyah.johor@gmail.com",
    packageName: "Syurga Bawah Laut Semporna & Mabul",
    category: "Pulau",
    pax: 2,
    travelDate: "04 Sep 2026",
    totalAmount: 2780,
    paidAmount: 600,
    status: "Deposit Selesai",
    assignedStaff: "Zulkifli Hassan (Tour Leader)",
    createdAt: "2026-08-17"
  },
  {
    id: "BK-2026-004",
    customerName: "Khairul Anuar",
    phone: "013-9918273",
    email: "khairul.kl@gmail.com",
    packageName: "Japan Golden Route (Tokyo, Fuji & Kyoto)",
    category: "Antarabangsa",
    pax: 6,
    travelDate: "10 Okt 2026",
    totalAmount: 38340,
    paidAmount: 0,
    status: "Pertanyaan Baru",
    assignedStaff: "Siti Sarah (Sales Exec)",
    createdAt: "2026-08-19"
  }
];

export const initialStaff: StaffMember[] = [
  {
    id: "STF-01",
    name: "Zaim Rosli",
    role: "Admin Utama",
    email: "zaim@kembaratours.com.my",
    phone: "011-56889201",
    assignedTripsCount: 12,
    totalSalesDeals: 45,
    status: "Aktif"
  },
  {
    id: "STF-02",
    name: "Siti Sarah binti Idris",
    role: "Pegawai Jualan (Sales)",
    email: "sarah.sales@kembaratours.com.my",
    phone: "019-3321908",
    assignedTripsCount: 0,
    totalSalesDeals: 38,
    status: "Aktif"
  },
  {
    id: "STF-03",
    name: "Ustaz Amir Syakir",
    role: "Mutawwif / Tour Lead",
    email: "amir.mutawwif@kembaratours.com.my",
    phone: "013-4458921",
    assignedTripsCount: 8,
    totalSalesDeals: 15,
    status: "Aktif"
  },
  {
    id: "STF-04",
    name: "Hafizuddin Danial",
    role: "Akauntan & Kewangan",
    email: "accounts@kembaratours.com.my",
    phone: "012-7789021",
    assignedTripsCount: 0,
    totalSalesDeals: 0,
    status: "Aktif"
  },
  {
    id: "STF-05",
    name: "Zulkifli Hassan",
    role: "Mutawwif / Tour Lead",
    email: "zul.guide@kembaratours.com.my",
    phone: "017-6628901",
    assignedTripsCount: 14,
    totalSalesDeals: 20,
    status: "Sedang Bertugas (Luar Negara)"
  }
];

export const initialTripAssignments: TripAssignment[] = [
  {
    id: "TRIP-2026-08",
    tripTitle: "Japan Golden Route (Tokyo & Kyoto)",
    departureDate: "10 Okt 2026",
    returnDate: "16 Okt 2026",
    leadGuide: "Zulkifli Hassan",
    assistantGuide: "Ahmad Danish",
    totalPax: 28,
    flightNo: "MH 070 (KLIA - Narita)",
    hotelName: "Keio Plaza Hotel Tokyo",
    status: "Akan Datang"
  },
  {
    id: "TRIP-2026-09",
    tripTitle: "Switzerland & French Alps Explorer",
    departureDate: "15 Okt 2026",
    returnDate: "22 Okt 2026",
    leadGuide: "Zaim Rosli",
    totalPax: 22,
    flightNo: "QR 849 (Doha - Zurich)",
    hotelName: "Hotel Bellevue Interlaken",
    status: "Akan Datang"
  },
  {
    id: "TRIP-2026-10",
    tripTitle: "Umrah VIP Musim Sejuk (Kumpulan 1)",
    departureDate: "05 Nov 2026",
    returnDate: "16 Nov 2026",
    leadGuide: "Ustaz Amir Syakir",
    assistantGuide: "Ustaz Luqman Hakim",
    totalPax: 45,
    flightNo: "SV 831 (KLIA - Madinah)",
    hotelName: "Pullman Zamzam Makkah & Front Taiba Madinah",
    status: "Akan Datang"
  }
];
