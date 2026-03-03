export default function About() {
  return (
  <div className="bg-white space-y-28 pb-20">

    
    <section className="relative text-center py-24 px-6 overflow-hidden">

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 via-white to-indigo-50" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-300/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-300/20 blur-3xl rounded-full -z-10" />

      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500">
        Tentang EduCourse Hub ✨
      </h1>

      <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
        Kami hadir untuk membuka gerbang pembelajaran digital yang modern,
        fleksibel, dan penuh inspirasi bagi siapa saja yang ingin berkembang.
      </p>
    </section>

    <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

      <div className="p-10 rounded-3xl bg-gradient-to-br from-white via-purple-50 to-indigo-50 border border-purple-200 shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-500">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          🌟 Visi
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Menjadi pusat pembelajaran digital terpercaya yang memudahkan
          siapa pun untuk menguasai skill masa depan dengan cara yang
          menyenangkan dan bermakna.
        </p>
      </div>

      <div className="p-10 rounded-3xl bg-gradient-to-br from-white via-purple-50 to-indigo-50 order border-purple-200 shadow-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-500">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          🚀 Misi
        </h2>
        <ul className="text-gray-600 space-y-3">
          <li>✦ Menyediakan kursus praktis dan aplikatif</li>
          <li>✦ Menyajikan materi yang mudah dipahami</li>
          <li>✦ Mendukung pembelajaran fleksibel & mandiri</li>
          <li>✦ Membangun komunitas belajar yang suportif</li>
        </ul>
      </div>

    </section>

    <section className="max-w-6xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-16">
        Nilai-Nilai Kami 💎
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          { title: "Akses Mudah", desc: "Belajar kapan saja dan di mana saja tanpa batas." },
          { title: "Materi Praktis", desc: "Fokus pada skill yang relevan dengan industri." },
          { title: "Komunitas Supportif", desc: "Tumbuh bersama dalam lingkungan yang positif." }
        ].map((item, index) => (
          <div
            key={index}
            className="relative group p-8 rounded-3xl bg-white border border-purple-200 shadow-md hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:-translate-y-3 transition-all duration-500">
            <h3 className="font-bold text-lg text-purple-700 mb-3 group-hover:text-indigo-600 transition">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>

    <section className="max-w-5xl mx-auto text-center py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl shadow-xl">

      <h2 className="text-4xl font-bold mb-6">
        Siap Memulai Perjalananmu? ✨
      </h2>

      <p className="mb-8 text-purple-100 text-lg">
        Buka gerbang pembelajaran dan tingkatkan skill digitalmu sekarang juga.
      </p>

      <a
        href="/courses"
        className="
          inline-block px-10 py-4 bg-white text-purple-700 font-semibold rounded-2xl shadow-lg hover:scale-105 hover:bg-purple-100 transition-all duration-300">
        ✦ Lihat Semua Kursus
      </a>

    </section>

  </div>
);
}