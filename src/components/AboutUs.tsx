import React from "react";
import AboutBg from "../assets/about-us-bg.jpg";

const AboutUs: React.FC = () => {
  return (
    <section id="tentang-kami" className="flex flex-col lg:flex-row min-h-screen font-poppins">
      <div className="relative w-full lg:w-1/2 h-96 lg:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${AboutBg})` }}>
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <h2 className="text-white text-5xl sm:text-6xl font-extrabold leading-tight">
            Tentang
            <br />
            Kami
          </h2>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-white bg-primary p-10 sm:p-16">
        <div className="max-w-xl mx-auto lg:mx-0">
          <h3 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight opacity-0 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Jagoan Underwear
          </h3>
          <p className="text-lg text-justify font-light leading-relaxed mb-6 opacity-0 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            Jagoan Underwear adalah toko terpercaya yang menyediakan berbagai pilihan pakaian dalam untuk pria, wanita, dan anak-anak. Kami menghadirkan koleksi lengkap dengan beragam merk, bahan, dan ukuran, sehingga setiap pelanggan bisa
            menemukan produk yang sesuai dengan kebutuhan dan kenyamanan.
          </p>
          <p className="text-lg text-justify font-light leading-relaxed opacity-0 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            Selain pilihan standar sehari-hari, kami juga menawarkan produk premium dengan kualitas terbaik untuk Anda yang mengutamakan kenyamanan ekstra dan desain elegan. Dengan variasi yang lengkap dan harga terjangkau, Jagoan Underwear
            siap menjadi solusi kebutuhan pakaian dalam keluarga Anda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
