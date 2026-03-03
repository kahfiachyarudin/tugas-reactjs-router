  import { useParams, Link } from "react-router";
  import courses from "../data/courses.json";

  export default function CourseDetail() {
    const { id } = useParams();


  const course = courses.find(c => c.id === Number(id));
    if (!course) return <h1>Course tidak ditemukan</h1>;

    return (
  <div className="min-h-screen bg-gradient-to-br flex justify-center items-center px-6 py-12">
    
    <div className="w-full max-w-3xl bg-white/5 backdrop-blur-lg border border-purple-500/3 rounded-3xl p-10 shadow-[0_0_40px_rgba(168,85,247,0.3)] space-y-6">

      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400 drop-shadow-lg">
        {course.title}
      </h1>

      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400 leading-relaxed">
        {course.fullDescription}
      </p>

      <div>
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400 mb-3">
          ✦ Materi Pembelajaran
        </h2>

        <ul className="space-y-2">
          {course.materials.map((m, i) => (
            <li
              key={i}
              className="bg-purple-800 px-4 py-2 rounded-xl hover:scale-105 hover:bg-purple-700/50 transition duration-300 shadow-sm shadow-purple-700/20 text-purple-100"
            >
              {m}
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/courses"
        className="inline-block mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-purple-700/40 hover:shadow-purple-500/60 transition duration-300 hover:scale-105"
      >
        ← Kembali ke Dunia Kursus
      </Link>

    </div>
  </div>
);
  }