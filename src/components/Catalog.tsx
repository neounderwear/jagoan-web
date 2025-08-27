import React from "react";
import CatalogBg from "../assets/catalog-bg.jpg";

const Catalog: React.FC = () => {
  return (
    <section id="katalog" className="relative min-h-screen font-poppins bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${CatalogBg})` }}>
      <div className="absolute inset-0 bg-primary/70"></div>
      <div className="relative z-10 text-center text-white p-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          Telusuri produk-produk
          <br />
          di Katalog Toko Kami
        </h2>
        <a
          href="/katalog"
          className="inline-flex items-center justify-center px-8 py-3 border-2 border-white rounded-lg text-lg font-bold
                     hover:bg-white hover:text-primary transition-all duration-300 shadow-lg
                     opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          Selengkapnya
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Catalog;
