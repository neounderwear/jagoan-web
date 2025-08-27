// src/components/Services.tsx
import React from "react";
import { useInView } from "react-intersection-observer";
import { clsx } from "clsx";
import ServiceBg from "../assets/service-bg.jpg";

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-brand-primary/20 text-brand-secondary rounded-full">{children}</div>;

const OriginalIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);
const ShippingIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1zM3 11h10" />
  </svg>
);
const StockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
const ChatIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);
const PackingIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);
const ReturnIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9a9 9 0 0114.65-4.65L20 5M20 15a9 9 0 01-14.65 4.65L4 19" />
  </svg>
);

const servicesData = [
  { icon: <OriginalIcon />, title: "100% Baru & Original", description: "Kami menjamin semua produk yang dijual adalah asli dan dalam kondisi baru." },
  { icon: <ShippingIcon />, title: "Pengiriman Cepat & Rapi", description: "Pesanan Anda diproses dengan cepat dan dikemas dengan rapi sesuai standar." },
  { icon: <StockIcon />, title: "Pilihan Ukuran Lengkap", description: "Tersedia berbagai ukuran, dan kami siap membantu Anda mengecek ketersediaan stok." },
  { icon: <ChatIcon />, title: "Respon Cepat & Ramah", description: "Tim kami siap melayani pertanyaan dan permintaan Anda dengan ramah." },
  { icon: <PackingIcon />, title: "Packing Aman & Privasi", description: "Paket Anda dijamin aman dengan privasi nama produk yang terjaga." },
  { icon: <ReturnIcon />, title: "Garansi Retur Produk", description: "Kami memberikan garansi penukaran produk sesuai dengan syarat & ketentuan." },
];

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} id="pelayanan" className="flex flex-col lg:flex-row min-h-screen font-outfit bg-brand-light text-brand-secondary font-poppins">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16 order-2 lg:order-1">
        <div className="max-w-xl">
          <h3 className={clsx("text-3xl sm:text-4xl font-bold mb-8 leading-tight text-brand-secondary transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>Pelayanan Terbaik Jagoan Underwear</h3>
          <div className="space-y-6">
            {servicesData.map((service, index) => (
              <div key={index} className={clsx("flex items-start gap-4 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")} style={{ transitionDelay: `${100 + index * 150}ms` }}>
                <IconWrapper>{service.icon}</IconWrapper>
                <div>
                  <h4 className="font-bold text-lg text-brand-secondary">{service.title}</h4>
                  <p className="text-brand-secondary/80 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 h-96 lg:h-auto order-1 lg:order-2">
        <div className="absolute inset-0 h-full w-full [clip-path:polygon(100%_0,100%_100%,0_100%,20%_0)] lg:[clip-path:polygon(100%_0,100%_100%,0_100%,20%_0)]">
          <img src={ServiceBg} alt="Pelayanan Jagoan Underwear" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
