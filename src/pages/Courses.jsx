import courses from "../data/courses.json";
import { Link } from "react-router";
import { useState, useEffect, useMemo } from "react";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(6);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(saved);
  }, []);

  const toggleBookmark = (id) => {
    let updated;

    if (bookmarks.includes(id)) {
      updated = bookmarks.filter((b) => b !== id);
    } else {
      updated = [...bookmarks, id];
    }

    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const visibleCourses = filteredCourses.slice(0, visible);

  return (
    <div className="min-h-screen bg-white p-10 rounded-4xl shadow-lg">

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
        {visibleCourses.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`}>
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-white via-purple-50 to-indigo-50 border border-purple-200 shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">

              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleBookmark(course.id);
                }}
                className="absolute top-4 right-4 text-2xl"
              >
                {bookmarks.includes(course.id) ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" /></svg>}
              </button>

              <h2 className="relative text-xl font-bold text-purple-700">
                {course.title}
              </h2>

              <p className="text-gray-600 mt-3 text-sm">
                {course.description}
              </p>

              <div className="mt-6 inline-block px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold shadow-md group-hover:scale-110 transition duration-300">
                ✦ Jelajahi Dunia Kursus
              </div>

            </div>
          </Link>
        ))}
      </div>

      {visible < filteredCourses.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisible((prev) => prev + 3)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-110 transition duration-300"
          >
            ✦ Load More
          </button>
        </div>
      )}

    </div>
  );
}