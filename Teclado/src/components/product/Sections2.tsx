'use client';

import { useState } from 'react';
import { PlusIcon, CheckIcon } from './Sections1';

/* ============================================================
   Part 2 — Benefits, Compatibility, CloseLook, Gallery
   ============================================================ */

/* ---------- Benefits & Health Section (H2) ---------- */
export function Benefits() {
  return (
    <section id="beneficios" className="bg-[#111111] scroll-mt-32">
      <div className="max-w-[1024px] mx-auto px-6 py-24">
        <h2
          className="font-display font-semibold text-[#f5f5f7] mb-6 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.144px' }}
        >
          Kit Teclado Ergonómico y Mouse Silencioso para un Home Office Sin Dolor
        </h2>
        <p
          className="text-[#f5f5f7]/60 font-text max-w-2xl mb-14"
          style={{ fontSize: '21px', lineHeight: '1.4', letterSpacing: '-0.012em' }}
        >
          Tu salud no se negocia. Cada elemento del combo está diseñado para proteger tus muñecas, reducir
          el ruido y multiplicar tu productividad.
        </p>

        {/* Featured media tile with overlay */}
        <div className="media-tile relative w-full rounded-[28px] overflow-hidden bg-[#000000] mb-8">
          <img
            src="/images/products/ergonomics-wrist.png"
            alt="Teclado ergonómico para evitar dolor de muñeca mostrando posición natural de las manos"
            width={1152}
            height={864}
            className="w-full h-auto block opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p
              className="text-[#f5f5f7] font-text max-w-xl"
              style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
            >
              El <strong className="font-semibold">teclado ergonómico para evitar dolor de muñeca</strong>{' '}
              mantiene tus manos en una posición natural durante largas jornadas de trabajo. La curva en
              onda distribuye la tensión y reduce la fatiga hasta un{' '}
              <span style={{ color: '#00d959' }} className="font-semibold">87%</span>.
            </p>
          </div>
        </div>

        {/* Two-column benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-[#000000] rounded-[28px] p-8 flex flex-col gap-4">
            <span
              className="font-display font-semibold uppercase"
              style={{ fontSize: '14px', letterSpacing: '0.12em', color: '#00d959' }}
            >
              Ergonomía
            </span>
            <h3
              className="font-display font-semibold text-[#f5f5f7]"
              style={{ fontSize: '28px', lineHeight: '1.14', letterSpacing: '0.196px' }}
            >
              Posición natural, cero tensión
            </h3>
            <p
              className="text-[#f5f5f7]/70 font-text"
              style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
            >
              El diseño curvado en onda del teclado ergonómico mantiene las muñecas en ángulo neutro. El{' '}
              ratón ergonómico silencioso de 4 botones encaja en la mano y elimina la tensión del antebrazo.
            </p>
          </div>

          <div className="bg-[#000000] rounded-[28px] p-8 flex flex-col gap-4">
            <span
              className="font-display font-semibold uppercase"
              style={{ fontSize: '14px', letterSpacing: '0.12em', color: '#00d959' }}
            >
              Silencio
            </span>
            <h3
              className="font-display font-semibold text-[#f5f5f7]"
              style={{ fontSize: '28px', lineHeight: '1.14', letterSpacing: '0.196px' }}
            >
              Trabaja sin distraer a nadie
            </h3>
            <p
              className="text-[#f5f5f7]/70 font-text"
              style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
            >
              Nuestro <strong className="font-semibold">mouse silencioso inalámbrico de 4 botones</strong>{' '}
              con DPI ajustable te permite trabajar en la oficina o casa sin distracción. La reducción de
              ruido es de hasta un <span style={{ color: '#00d959' }} className="font-semibold">90%</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Compatibility & Connectivity Section (H2) ---------- */
export function Compatibility() {
  return (
    <section id="compatibilidad" className="bg-[#000000] scroll-mt-32">
      <div className="max-w-[1024px] mx-auto px-6 py-24">
        <h2
          className="font-display font-semibold text-[#f5f5f7] mb-6 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.144px' }}
        >
          Conexión 2.4G Ultra Estable para Mac y PC
        </h2>
        <p
          className="text-[#f5f5f7]/60 font-text max-w-2xl mb-14"
          style={{ fontSize: '21px', lineHeight: '1.4', letterSpacing: '-0.012em' }}
        >
          Olvídate de los cables. Este <strong className="font-semibold text-[#f5f5f7]/80">teclado
          inalámbrico 2.4G con receptor USB</strong> ofrece sincronización instantánea y es el teclado
          compatible con Mac y Windows ideal para alternar entre tu laptop de trabajo y tu MacBook Air/Pro.
        </p>

        <div className="media-tile w-full rounded-[28px] overflow-hidden bg-[#000000] mb-10">
          <img
            src="/images/products/compatibility.png"
            alt="Teclado inalámbrico compatible con Mac y Windows conectado simultáneamente mediante receptor USB 2.4G"
            width={1344}
            height={768}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>

        {/* Stat grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-[28px] overflow-hidden">
          {[
            { metric: '10 m', label: 'Alcance 2.4G' },
            { metric: '0 ms', label: 'Drivers requeridos' },
            { metric: '12 m', label: 'Batería teclado' },
            { metric: '18 m', label: 'Batería mouse' },
          ].map((s) => (
            <div key={s.label} className="bg-[#111111] p-8 flex flex-col items-center text-center">
              <span
                className="font-display font-semibold text-[#f5f5f7] mb-2"
                style={{ fontSize: '48px', lineHeight: '1', letterSpacing: '-0.144px' }}
              >
                {s.metric}
              </span>
              <span
                className="text-[#86868b] font-text"
                style={{ fontSize: '14px', lineHeight: '18px', letterSpacing: '-0.012em' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* USB dongle feature */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          <div className="bg-[#111111] rounded-[28px] p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-[28px] overflow-hidden bg-[#000000] mb-5">
              <img
                src="/images/products/usb-dongle.png"
                alt="Receptor USB 2.4G del teclado inalámbrico"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3
              className="font-display font-semibold text-[#f5f5f7] mb-2"
              style={{ fontSize: '19px', lineHeight: '1.21', letterSpacing: '0.228px' }}
            >
              Receptor USB 2.4G
            </h3>
            <p
              className="text-[#86868b] font-text"
              style={{ fontSize: '14px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
            >
              Un solo nano-dongle sincroniza teclado y mouse. Conéctalo y olvídate.
            </p>
          </div>

          <div className="bg-[#111111] rounded-[28px] p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-[#333336] flex items-center justify-center mb-5">
              <span style={{ fontSize: '32px' }}>⌘</span>
            </div>
            <h3
              className="font-display font-semibold text-[#f5f5f7] mb-2"
              style={{ fontSize: '19px', lineHeight: '1.21', letterSpacing: '0.228px' }}
            >
              Mac Compatible
            </h3>
            <p
              className="text-[#86868b] font-text"
              style={{ fontSize: '14px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
            >
              Teclado inalámbrico para MacBook Air, Pro, iMac y Mac mini. Layout con tecla Cmd.
            </p>
          </div>

          <div className="bg-[#111111] rounded-[28px] p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-[#333336] flex items-center justify-center mb-5">
              <span style={{ fontSize: '28px' }}>⊞</span>
            </div>
            <h3
              className="font-display font-semibold text-[#f5f5f7] mb-2"
              style={{ fontSize: '19px', lineHeight: '1.21', letterSpacing: '0.228px' }}
            >
              Windows & Linux
            </h3>
            <p
              className="text-[#86868b] font-text"
              style={{ fontSize: '14px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
            >
              Teclado para laptop inalámbrico con Windows 11/10/8, Linux y ChromeOS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Close-Look Module with Selector Pills ---------- */
export function CloseLook() {
  const features = [
    {
      id: 'teclas',
      title: 'Teclas de tijera silenciosas',
      img: '/images/products/keyboard-closeup.png',
      alt: 'Primer plano de las teclas de tijera del teclado ergonómico inalámbrico silencioso',
      desc: 'El mecanismo de tijera de perfil bajo reduce el recorrido de la tecla y el ruido de clic. Cada pulsación es firme, precisa y prácticamente inaudible, ideal para videollamadas y oficinas abiertas.',
    },
    {
      id: 'mouse',
      title: 'Mouse silencioso 4 botones DPI',
      img: '/images/products/mouse-closeup.png',
      alt: 'Primer plano del ratón ergonómico silencioso de 4 botones con DPI ajustable',
      desc: 'El ratón ergonómico silencioso de 4 botones incluye rueda de scroll y botón lateral. Cicla entre 800/1200/1600 DPI con un clic para adaptar la sensibilidad a tu flujo de trabajo.',
    },
    {
      id: 'receptor',
      title: 'Receptor 2.4G de bajo perfil',
      img: '/images/products/usb-dongle.png',
      alt: 'Receptor USB 2.4G del combo teclado y mouse inalámbrico',
      desc: 'El nano-receptor USB 2.4G mide apenas 18 mm. Una vez conectado, sobresale lo mínimo para dejarlo permanentemente en tu laptop sin riesgo de rotura al guardarla en la mochila.',
    },
    {
      id: 'combo',
      title: 'Diseño de combo integrado',
      img: '/images/products/combo-topdown.png',
      alt: 'Vista superior del kit completo de teclado ergonómico y mouse silencioso',
      desc: 'Teclado y mouse comparten el mismo receptor USB, el mismo acabado mate y la misma filosofía ergonómica. Un kit teclado y mouse para MacBook Air coherente de principio a fin.',
    },
  ];
  const [active, setActive] = useState(features[0].id);
  const current = features.find((f) => f.id === active)!;

  return (
    <section className="bg-[#000000]">
      <div className="max-w-[1024px] mx-auto px-6 py-24">
        <h2
          className="font-display font-semibold text-[#f5f5f7] mb-14 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.144px' }}
        >
          Un vistazo de cerca
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Selector pills stack */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className="chip flex-shrink-0 lg:flex-shrink text-left px-6 py-4 rounded-[36px] font-text whitespace-nowrap lg:whitespace-normal"
                style={{
                  background: active === f.id ? 'rgba(80,80,84,0.72)' : 'rgba(66,66,69,0.72)',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '17px',
                  lineHeight: '21px',
                  letterSpacing: '-0.012em',
                  border: 'none',
                  cursor: 'pointer',
                }}
                aria-pressed={active === f.id}
              >
                {f.title}
              </button>
            ))}
          </div>

          {/* Big crop */}
          <div className="bg-[#111111] rounded-[28px] overflow-hidden">
            <div className="media-tile w-full bg-[#000000] overflow-hidden">
              <img
                src={current.img}
                alt={current.alt}
                width={1344}
                height={768}
                className="w-full h-[40vh] md:h-[55vh] object-cover block"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:p-10">
              <h3
                className="font-display font-semibold text-[#f5f5f7] mb-3"
                style={{ fontSize: '28px', lineHeight: '1.14', letterSpacing: '0.196px' }}
              >
                {current.title}
              </h3>
              <p
                className="text-[#f5f5f7]/70 font-text"
                style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
              >
                {current.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Image Gallery ---------- */
export function Gallery() {
  const images = [
    { src: '/images/products/lifestyle-office.png', alt: 'Setup de home office con teclado ergonómico inalámbrico y mouse silencioso junto a MacBook', label: 'Home Office' },
    { src: '/images/products/keyboard-closeup.png', alt: 'Detalle del teclado ergonómico inalámbrico silencioso en español con teclas de tijera', label: 'Teclado' },
    { src: '/images/products/mouse-closeup.png', alt: 'Detalle del ratón ergonómico silencioso de 4 botones con DPI ajustable', label: 'Mouse' },
    { src: '/images/products/ergonomics-wrist.png', alt: 'Manos en posición natural sobre el teclado ergonómico para evitar dolor de muñeca', label: 'Ergonomía' },
    { src: '/images/products/compatibility.png', alt: 'Teclado compatible con Mac y Windows conectado a MacBook y laptop simultáneamente', label: 'Compatibilidad' },
    { src: '/images/products/combo-topdown.png', alt: 'Kit completo de teclado y mouse inalámbrico ergonómico con receptor USB y manual', label: 'Kit completo' },
  ];

  return (
    <section id="galeria" className="bg-[#111111] scroll-mt-32">
      <div className="max-w-[1024px] mx-auto px-6 py-24">
        <h2
          className="font-display font-semibold text-[#f5f5f7] mb-3"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.144px' }}
        >
          Galería del producto
        </h2>
        <p
          className="text-[#f5f5f7]/60 font-text mb-14 max-w-2xl"
          style={{ fontSize: '21px', lineHeight: '1.4', letterSpacing: '-0.012em' }}
        >
          Cada ángulo cuenta la misma historia: ergonomía real, silencio real, compatibilidad real.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {images.map((img, i) => (
            <div
              key={i}
              className="media-tile relative rounded-[28px] overflow-hidden bg-[#000000] group"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1344}
                height={768}
                className="w-full h-[34vh] md:h-[42vh] object-cover block"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span
                  className="inline-block bg-black/50 backdrop-blur-md text-[#f5f5f7] font-text rounded-full px-4 py-1"
                  style={{ fontSize: '12px', letterSpacing: '-0.012em' }}
                >
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
