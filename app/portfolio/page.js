"use client";
import Image from "next/image";

export default function Portfolio() {
  // Data proyek
  const projects = [
    {
      title: "Landing Page Perusahaan",
      description: "Website profesional untuk perusahaan dengan desain modern dan responsif.",
      image: "/portfolio/project1.jpg",
    },
    {
      title: "E-Commerce Website",
      description: "Platform e-commerce dengan fitur pembayaran online dan manajemen produk.",
      image: "/portfolio/project2.jpg",
    },
    {
      title: "Dashboard Admin",
      description: "Dashboard interaktif untuk mengelola data dan analitik bisnis.",
      image: "/portfolio/project3.jpg",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-900 text-white">
      {/* Judul */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio Saya</h1>
      <p className="text-gray-300 max-w-2xl leading-relaxed">
        Berikut adalah beberapa proyek yang telah saya kerjakan dalam pengembangan website dan aplikasi.
      </p>

      {/* Daftar Proyek */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <PortfolioCard key={index} project={project} />
        ))}
      </div>

      {/* Tombol Kembali ke Beranda */}
      <div className="mt-8">
        <a
          href="/"
          className="px-6 py-2 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-300"
        >
          Kembali ke Beranda
        </a>
      </div>
    </section>
  );
}

// Komponen Kartu Portfolio
function PortfolioCard({ project }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 w-64">
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        className="rounded-lg"
      />
      <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.description}</p>
    </div>
  );
}
