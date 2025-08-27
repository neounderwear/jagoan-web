import React from "react";
import logo from "../assets/logo.png";

const socialLinks = [
  { name: "TT", href: "https://www.tiktok.com/@finajagoanunderwer?_t=ZS-8zBj1iKYOob&_r=1" },
  { name: "FB", href: "https://www.facebook.com/fina.jagoanunderwear?mibextid=rS40aB7S9Ucbxw6v" },
  { name: "IG", href: "https://www.instagram.com/jagoanunderwear/" },
];

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section id="kontak" className="bg-primary font-poppins">
        <div className="container mx-auto px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center bg-white rounded-2xl p-10 sm:p-16 shadow-2xl opacity-0 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hubungi kami untuk pemesanan atau pertanyaan lebih lanjut</h2>
            <div className="mt-10">
              <a
                href="https://api.whatsapp.com/send/?phone=6281317056067&text=Halo+Jagoan+Underwear%2C+saya+mau+tanya+soal+produknya&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                Hubungi via WhatsApp
                <span className="ml-2 font-light transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 font-poppins">
        <div className="container mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <img src={logo} alt="Jagoan Underwear Logo" className="h-8 w-auto mb-4" />
              <p className="mt-4 text-sm leading-relaxed">
                ITC Mangga Dua Lt. 3 Blok D No. 29
                <br />
                Jl. Mangga Dua Raya, Kel. Ancol, Kec. Pademangan
                <br />
                Kota Adm. Jakarta Utara, 14430
              </p>
              <a
                href="https://share.google/Wb88buT7i1OWU0Dge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
              >
                Lihat Maps <span className="font-light">→</span>
              </a>
            </div>
            <div className="md:col-span-3 md:col-start-8">
              <h3 className="text-lg font-bold text-white">Toko Online</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="https://vt.tiktok.com/ZSAaFjApW/?page=Mall" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm hover:text-white transition-colors">
                    TikTok Shop by Tokopedia <ExternalLinkIcon />
                  </a>
                </li>
                <li>
                  <a href="https://tokopedia.link/jagoanunderwear" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm hover:text-white transition-colors">
                    Tokopedia <ExternalLinkIcon />
                  </a>
                </li>
                <li>
                  <a href="http://shopee.co.id/jagoanunderwear" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm hover:text-white transition-colors">
                    Shopee <ExternalLinkIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-10 border-gray-700" />

          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">© {currentYear} Jagoan Underwear</p>
            <div className="flex mt-4 sm:mt-0 space-x-3">
              {socialLinks.map((item) => (
                <a target="_blank" key={item.name} href={item.href} className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 text-white font-bold text-sm hover:bg-primary transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
