import { Outlet, NavLink } from "react-router";

export default function MainLayout() {

  const active = ({ isActive }) =>
    isActive
      ? "text-indigo-700 bg-white/40 backdrop-blur-md px-5 py-2 rounded-full shadow-md"
      : "text-gray-600 hover:text-indigo-600 hover:bg-white/30 px-5 py-2 rounded-full transition-all duration-300";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-white to-purple-100">

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-indigo-200">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          <h1 
            className="text-2xl font-bold tracking-wide
                       text-indigo-700"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Astral Archive
          </h1>

          <div className="flex gap-3 text-sm font-medium">
            <NavLink to="/" end className={active}>Home</NavLink>
            <NavLink to="/courses" className={active}>Courses</NavLink>
            <NavLink to="/about" className={active}>About</NavLink>
          </div>

        </nav>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      </header>

      <main className="flex-1 px-6 py-10">
        <Outlet />
      </main>

      <footer className="
        relative mt-20 bg-white/60 backdrop-blur-xl border-t border-indigo-200">

        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-300/20 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-300/20 blur-[120px] rounded-full -z-10" />

        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-sm">

          <div>
            <h2 
              className="text-xl font-bold text-indigo-700 mb-4"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Astral Archive
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A realm of digital knowledge where ambition meets mastery.
              Begin your journey and unlock your hidden potential.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-indigo-700 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-indigo-600 transition cursor-pointer"><NavLink to="/">Home</NavLink></li>
              <li className="hover:text-indigo-600 transition cursor-pointer"><NavLink to="/courses">Courses</NavLink></li>
              <li className="hover:text-indigo-600 transition cursor-pointer"><NavLink to="/about">About</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-indigo-700 mb-4">
              Connect
            </h3>
            <div className="flex gap-4 text-gray-600">
              <span className="hover:text-indigo-600 transition cursor-pointer">Instagram</span>
              <span className="hover:text-indigo-600 transition cursor-pointer">YouTube</span>
              <span className="hover:text-indigo-600 transition cursor-pointer">LinkedIn</span>
            </div>
          </div>

        </div>

        <div className="text-center py-6 text-gray-500 text-xs tracking-wide">
          © 2026 Astral Archive. All rights reserved.
        </div>

      </footer>

    </div>
  );
}