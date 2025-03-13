import React from 'react';

export default function Navbar() {
  return (
    <nav className="
      flex items-center justify-between
      px-8 py-4
      bg-[#F8FBFF] text-[#757095]
      shadow-[0_2px_4px_rgba(0,0,0,0.1)]
      fixed top-0 w-full z-50
    " style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50 }}>
      <div className="flex items-center ml-24">
        <img
          src="/images/Logo horizontal.png"
          alt="Logo"
          className="w-[200px] h-auto"
        />
      </div>

      <ul className="flex gap-16 list-none mr-24">
        <li>
          <a
            href="#"
            className="text-[#007BFF] no-underline transition-colors duration-300 hover:text-[#007BFF] hover:underline"
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href="#"
            className="
              text-[#757095] no-underline
              transition-colors duration-300
              hover:text-[#007BFF] hover:underline
            "
          >
            Trabaja con nosotros
          </a>
        </li>
        <li>
          <a
            href="#"
            className="
              text-[#757095] no-underline
              transition-colors duration-300
              hover:text-[#007BFF] hover:underline
            "
          >
            Ofertas
          </a>
        </li>
        <li>
          <a
            href="#"
            className="
              text-[#757095] no-underline
              transition-colors duration-300
              hover:text-[#007BFF] hover:underline
            "
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
