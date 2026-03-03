import courses from "../data/courses.json";
import { Link } from "react-router";

export default function Home() {
  const featured = courses.slice(0, 3);

  return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 overflow-x-hidden relative">

    <div className="absolute top-0 left-1/4 w-[600px] h-[600px]
                    bg-indigo-300/30 blur-[150px] rounded-full -z-10" />
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px]
                    bg-purple-300/30 blur-[150px] rounded-full -z-10" />

    <section className="text-center py-36 px-6">

      <h1 className="text-6xl md:text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-400"
          style={{ fontFamily: "Cinzel, serif" }}>
        EduCourse Hub
      </h1>

      <div className="w-32 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <p className="mt-8 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
         style={{ fontFamily: "Playfair Display, serif" }}>
        Enter a world of knowledge and awaken your true potential
        through elegant and immersive learning experiences.
      </p>

      <Link
        to="/courses"
        className="inline-block mt-14 px-12 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold tracking-wider shadow-xl shadow-indigo-300/50 hover:scale-105 transition-all duration-300">
        ✦ Begin Your Journey
      </Link>

    </section>

    <section className="max-w-6xl mx-auto px-6 pb-32">

      <h2 className="text-4xl font-bold text-center mb-20
                     text-indigo-700"
          style={{ fontFamily: "Cinzel, serif" }}>
        Featured Courses
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {featured.map(course => (
          <Link key={course.id} to={`/courses/${course.id}`}>

            <div className="group relative p-10 rounded-[30px] bg-white/70 backdrop-blur-xl border border-indigo-200 shadow-lg hover:shadow-[0_0_60px_rgba(147,197,253,0.4)] hover:-translate-y-5 transition-all duration-500 overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/20 via-transparent to-purple-200/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative w-16 h-[2px] mb-6
                              bg-gradient-to-r from-indigo-400 to-purple-400" />

              <h3 className="relative font-semibold text-xl text-gray-800 group-hover:text-indigo-600 transition" style={{ fontFamily: "Cinzel, serif" }}>
                {course.title}
              </h3>

              <p className="relative text-gray-600 mt-4 text-sm leading-relaxed">
                {course.description}
              </p>

              <div className="relative mt-8 inline-block px-6 py-2 rounded-full border border-indigo-400 text-indigo-600 text-xs font-semibold tracking-wide group-hover:bg-indigo-500 group-hover:text-white transition duration-300">
                View Details
              </div>

            </div>

          </Link>
        ))}
      </div>

    </section>

  </div>
);
}