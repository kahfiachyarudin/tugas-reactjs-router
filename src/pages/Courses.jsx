import courses from "../data/courses.json";
import { Link } from "react-router";
import { useState, useMemo } from "react";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(6); 

  const filteredCourses = useMemo(() => {
    return courses.filter(course =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const visibleCourses = filteredCourses.slice(0, visible);

  return (
    <div className="min-h-screen bg-white p-10">

      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Cari kursus..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setVisible(6); 
          }}
          className="w-full max-w-md px-5 py-3 rounded-2xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleCourses.map(course => (
          <Link key={course.id} to={`/courses/${course.id}`}>
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-white via-purple-50 to-indigo-50 border border-purple-200 shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">
              <h2 className="relative text-xl font-bold text-purple-700">
                {course.title}
              </h2>
              <p className="text-gray-600 mt-3 text-sm">
                {course.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {visible < filteredCourses.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisible(prev => prev + 6)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-110 transition duration-300"
          >
            ✦ Load More
          </button>
        </div>
      )}
    </div>
  );
}