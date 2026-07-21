export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">
      
      <h1 className="text-2xl font-bold text-blue-600">
        Accredian
      </h1>

      <div className="hidden md:flex gap-8 text-gray-700">
        <a>Home</a>
        <a>Enterprise</a>
        <a>Programs</a>
        <a>About</a>
        <a>Contact</a>
      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
        Get Started
      </button>

    </nav>
  );
}