import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";

export function BlackGodFooter() {
  return (
    <footer className="bg-black text-white py-12  px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-neutral-700 pb-10">
        {/* Section 1: Logo and tagline */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-white tracking-widest">🕶 Aceternity</h1>
          <p className="text-neutral-400 max-w-sm">
            Building legendary UI experiences. One component at a time.
          </p>
        </div>

        {/* Section 2: Links */}
        <div className="flex justify-around md:justify-between">
          <div className="space-y-2">
            <h2 className="font-semibold text-lg">Product</h2>
            <ul className="text-neutral-400 space-y-1 text-sm">
              <li className="hover:text-white transition-all cursor-pointer">Components</li>
              <li className="hover:text-white transition-all cursor-pointer">Pricing</li>
              <li className="hover:text-white transition-all cursor-pointer">Blog</li>
              <li className="hover:text-white transition-all cursor-pointer">FAQs</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold text-lg">Company</h2>
            <ul className="text-neutral-400 space-y-1 text-sm">
              <li className="hover:text-white transition-all cursor-pointer">About</li>
              <li className="hover:text-white transition-all cursor-pointer">Careers</li>
              <li className="hover:text-white transition-all cursor-pointer">Privacy</li>
              <li className="hover:text-white transition-all cursor-pointer">Terms</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Subscribe & Socials */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Subscribe to updates</h2>
          <div className="flex items-center bg-neutral-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-4 py-2 outline-none text-sm w-full text-white"
            />
            <button className="bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-neutral-200 transition">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="pt-6 text-sm text-center text-neutral-500">
        © {new Date().getFullYear()} Aceternity. All rights reserved.
      </div>
    </footer>
  );
}
