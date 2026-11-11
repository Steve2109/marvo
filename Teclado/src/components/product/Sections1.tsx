'use client';

import { useEffect, useState, useRef } from 'react';

/* ============================================================
   Apple-style Product Landing Page — Part 1
   Skeleton, Navigation, Hero
   ============================================================ */

/* ---------- Skeleton Screen ---------- */
function SkeletonHero() {
  return (
    <section className="bg-[#000000] min-h-[88vh] flex flex-col items-center justify-center px-6 pt-20 pb-16">
      <div className="skeleton-pulse w-28 h-5 mb-8 rounded-full" />
      <div className="skeleton-pulse w-[90%] max-w-3xl h-16 mb-4 rounded-lg" />
      <div className="skeleton-pulse w-[70%] max-w-2xl h-16 mb-10 rounded-lg" />
      <div className="skeleton w-[92%] max-w-4xl h-[44vh] mb-10" />
      <div className="skeleton-pulse w-40 h-11 mb-4 rounded-full" />
      <div className="skeleton-pulse w-56 h-4 rounded-lg" />
    </section>
  );
}

function SkeletonSection() {
  return (
    <section className="bg-[#111111] px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="skeleton-pulse w-2/3 h-10 mb-8 rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="skeleton w-full h-72" />
          <div className="skeleton w-full h-72" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Global Commerce Navigation (44px) ---------- */
function GlobalNav() {
  const navLinks = [
    { text: 'Inicio', href: 'https://tymtechnology.shop/' },
    { text: 'Consultorías', href: 'https://tymtechnology.shop/consult.php' },
    { text: 'Tienda', href: 'https://store.tymtechnology.shop/' },
    { text: 'Licencias', href: 'https://store.tymtechnology.shop/productos.php' },
    { text: 'Empresas', href: 'https://store.tymtechnology.shop/empresas/index.php' },
    { text: 'Contacto', href: 'https://store.tymtechnology.shop/contacto.php' },
  ];
  return (
    <nav
      className="sticky top-0 z-50 bg-[#111111]/80 backdrop-blur-xl border-b border-white/5"
      style={{ height: '44px' }}
      aria-label="Navegación global"
    >
      <div className="max-w-[1024px] mx-auto h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <a
            href="https://store.tymtechnology.shop/index.php"
            className="text-[#f5f5f7] font-display font-semibold hover:opacity-80 transition-opacity"
            style={{ fontSize: '17px', letterSpacing: '-0.022em' }}
            title="T&M Technology Ec · Partner Bitdefender"
          >
            T&M Technology
          </a>
          <ul className="hidden md:flex items-center gap-6" style={{ fontSize: '12px', lineHeight: '1' }}>
            {navLinks.map((item) => (
              <li key={item.text}>
                <a
                  href={item.href}
                  className="text-[#f5f5f7]/80 hover:text-[#f5f5f7] transition-colors"
                  style={{ letterSpacing: '-0.012em' }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex items-center gap-4" style={{ fontSize: '12px', lineHeight: '1' }}>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=593960940921"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cotizar por WhatsApp"
              title="Cotizar por WhatsApp"
              className="text-[#cccccc] hover:text-[#00d959] transition-colors"
            >
              <WhatsAppIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100063766906821"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="text-[#cccccc] hover:text-[#f5f5f7] transition-colors"
            >
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tymtechnologyec/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="text-[#cccccc] hover:text-[#f5f5f7] transition-colors"
            >
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/tym-technology-ec/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="text-[#cccccc] hover:text-[#f5f5f7] transition-colors"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://store.tymtechnology.shop/productos.php"
              aria-label="Ver catálogo"
              title="Catálogo"
              className="text-[#cccccc] hover:text-[#f5f5f7] transition-colors"
            >
              <BagIcon />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/* ---------- Product Local Navigation (52px) ---------- */
function LocalNav() {
  return (
    <nav
      className="sticky top-[44px] z-40 bg-[#111111]/90 backdrop-blur-xl border-b border-white/5"
      style={{ height: '52px' }}
      aria-label="Navegación del producto"
    >
      <div className="max-w-[1024px] mx-auto h-full flex items-center justify-between px-6">
        <span
          className="text-[#f5f5f7]/80 font-text font-semibold truncate"
          style={{ fontSize: '17px', lineHeight: '21px', letterSpacing: '-0.022em' }}
        >
          Combo Teclado Ergonómico + Mouse Silencioso
        </span>
        <div className="flex items-center gap-6" style={{ fontSize: '12px', lineHeight: '1' }}>
          <a href="#beneficios" className="hidden lg:inline text-[#f5f5f7]/80 hover:text-[#f5f5f7] transition-colors">
            Beneficios
          </a>
          <a href="#compatibilidad" className="hidden lg:inline text-[#f5f5f7]/80 hover:text-[#f5f5f7] transition-colors">
            Conectividad
          </a>
          <a href="#galeria" className="hidden lg:inline text-[#f5f5f7]/80 hover:text-[#f5f5f7] transition-colors">
            Galería
          </a>
          <a href="#faq" className="hidden lg:inline text-[#f5f5f7]/80 hover:text-[#f5f5f7] transition-colors">
            FAQ
          </a>
          <a
            href="#comprar"
            className="btn-purchase inline-flex items-center justify-center bg-[#0071e3] text-white font-text"
            style={{
              fontSize: '12px',
              lineHeight: '16px',
              padding: '3px 10px',
              borderRadius: '980px',
            }}
          >
            Comprar
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ---------- Hero Section ---------- */
function Hero() {
  return (
    <section className="bg-[#000000] relative overflow-hidden fade-in-up">
      <div className="max-w-[1024px] mx-auto px-6 pt-16 pb-20 flex flex-col items-center text-center">
        <span
          className="text-[#00d959] font-display font-semibold uppercase mb-5"
          style={{ fontSize: '19px', lineHeight: '1.21', letterSpacing: '0.228em' }}
        >
          Nuevo · Combo Ergonómico
        </span>

        <h1
          className="font-display font-semibold text-[#f5f5f7] mb-5 max-w-4xl"
          style={{ fontSize: 'clamp(40px, 7vw, 64px)', lineHeight: '1.06', letterSpacing: '-0.576px' }}
        >
          Teclado Ergonómico Inalámbrico y Mouse Silencioso de 4 Botones
        </h1>

        <p
          className="text-[#f5f5f7]/70 font-text max-w-2xl mb-10"
          style={{ fontSize: '20px', lineHeight: '1.4', letterSpacing: '-0.012em' }}
        >
          Diseñado para evitar el dolor de muñeca y trabajar sin ruidos molestos. Conexión estable 2.4G USB
          100% compatible con MacBook, Windows y Laptop.
        </p>

        <div className="media-tile w-full max-w-5xl mb-10 rounded-[28px] overflow-hidden bg-[#000000]">
          <img
            src="/images/products/hero-combo.png"
            alt="Combo de teclado ergonómico inalámbrico 2.4G y mouse silencioso de 4 botones junto a una laptop"
            width={1344}
            height={768}
            className="w-full h-auto block"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div id="comprar" className="flex flex-col items-center gap-3 scroll-mt-32">
          <a
            href="https://api.whatsapp.com/send?phone=593960940921&text=Hola%20T%26M%20Technology%2C%20me%20interesa%20el%20Combo%20Teclado%20Ergon%C3%B3mico%20Inal%C3%A1mbrico%20%2B%20Mouse%20Silencioso%20%C2%BFMe%20pueden%20cotizar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-purchase inline-flex items-center justify-center bg-[#0071e3] text-white font-text"
            style={{ fontSize: '17px', lineHeight: '1', padding: '12px 28px', borderRadius: '980px' }}
          >
            Comprar Kit Ergonómico Ahora
          </a>
          <p
            className="text-[#f5f5f7] font-text font-semibold"
            style={{ fontSize: '14px', lineHeight: '18px' }}
          >
            Desde <span className="text-[#00d959]">$39.99</span> · Envío rápido gratis
          </p>
          <p className="text-[#86868b] font-text" style={{ fontSize: '14px', lineHeight: '18px' }}>
            o 4 pagos de $10.00 sin intereses · Devolución 30 días
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Icons ---------- */
function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'none' }}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export {
  SkeletonHero,
  SkeletonSection,
  GlobalNav,
  LocalNav,
  Hero,
  SearchIcon,
  BagIcon,
  PlusIcon,
  CheckIcon,
  WhatsAppIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
};
