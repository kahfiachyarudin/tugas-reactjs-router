import courses from "../data/courses.json";
import { Link } from "react-router";

export default function Courses() {
  return (
  <div className="min-h-screen bg-white p-10">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {courses.map(course => (
        <Link key={course.id} to={`/courses/${course.id}`}>

          <div className="
            relative group p-8 rounded-3xl bg-gradient-to-br from-white via-purple-50 to-indigo-50 border border-purple-200 shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">

            <div className="
              absolute inset-0 bg-gradient-to-r from-purple-300/10 via-transparent to-indigo-300/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <h2 className="relative text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 group-hover:scale-105 transition duration-300">
              {course.title}
            </h2>

            <p className="relative  text-gray-600 mt-4 text-sm leading-relaxed">
              {course.description}
            </p>

            <div className="relative mt-6 inline-block px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold shadow-md group-hover:shadow-purple-400/50 group-hover:scale-110 transition duration-300">
              ✦ Jelajahi Dunia Kursus
            </div>

          </div>

        </Link>
      ))}
    </div>
  </div>
);
}