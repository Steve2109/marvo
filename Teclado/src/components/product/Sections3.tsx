'use client';

import { useState } from 'react';
import { PlusIcon, CheckIcon } from './Sections1';

/* ============================================================
   Part 3 — FAQ, Growth Hacking, SEO, AI-SEO, Retail, Footer
   ============================================================ */

/* ---------- FAQ Section (H2/H3) — expanded ---------- */
export function FAQ() {
  const faqs = [
    {
      q: '¿Este combo de teclado y mouse inalámbrico sirve para MacBook Air?',
      a: 'Sí, nuestro kit teclado y mouse para MacBook Air y Pro se conecta de forma inmediata mediante el receptor USB 2.4G o adaptadores Type-C. Es 100% compatible con macOS sin necesidad de drivers, e incluye las teclas Cmd y Fn con la funcionalidad esperada en macOS.',
    },
    {
      q: '¿El ratón incluye botones laterales?',
      a: 'Sí, es un ratón ergonómico silencioso de 4 botones (izquierdo, derecho, rueda de scroll con clic y botón lateral) que te permite navegar de forma fluida entre pestañas. Además, su DPI es ajustable en tres niveles: 800, 1200 y 1600.',
    },
    {
      q: '¿El teclado ergonómico realmente ayuda a evitar el dolor de muñeca?',
      a: 'Sí. Su diseño curvado en onda mantiene las manos en una posición natural y neutra, reduciendo la tensión en muñecas y antebrazos durante jornadas prolongadas de trabajo en home office. El reposamuñecas integrado y la pendiente ajustable completan la postura ergonómica.',
    },
    {
      q: '¿Qué batería usa el combo y cuánto dura?',
      a: 'El teclado funciona con 1 pila AA y el mouse con 1 pila AA (no incluidas). El teclado dura hasta 12 meses y el mouse hasta 18 meses en uso normal gracias a su sistema de ahorro de energía inteligente que los suspende automáticamente tras 8 minutos de inactividad.',
    },
    {
      q: '¿El teclado tiene distribución en español con la letra Ñ?',
      a: 'Sí, el teclado inalámbrico silencioso español incluye la letra Ñ y la distribución QWERTY en español, ideal para usuarios de España y Latinoamérica. Existe también variante latinoamericana.',
    },
    {
      q: '¿Funciona con Windows y Linux además de Mac?',
      a: 'Sí, es un teclado compatible con Mac y Windows, y también funciona en Linux, ChromeOS y Android. Solo conecta el receptor USB 2.4G en un puerto libre y empieza a escribir al instante, sin instalar ningún driver ni software adicional.',
    },
    {
      q: '¿Qué distancia de conexión tiene el receptor 2.4G?',
      a: 'El receptor USB 2.4G ofrece una conexión estable hasta 10 metros (33 pies) sin latencia perceptible, ideal para presentaciones, trabajar desde el sofá o controlar un equipo conectado a la TV.',
    },
    {
      q: '¿Las teclas son realmente silenciosas?',
      a: 'Sí. Tanto el teclado como el mouse silencioso reducen el ruido de clic hasta un 90% frente a un teclado convencional, perfectos para oficinas compartidas, bibliotecas, salas de estudio y videollamidas sin molestar a quienes te rodean.',
    },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#000000] scroll-mt-32">
      <div className="max-w-[1024px] mx-auto px-6 py-24">
        <h2
          className="font-display font-semibold text-[#f5f5f7] mb-3"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.144px' }}
        >
          Preguntas frecuentes
        </h2>
        <p
          className="text-[#f5f5f7]/60 font-text mb-14 max-w-2xl"
          style={{ fontSize: '21px', lineHeight: '1.4', letterSpacing: '-0.012em' }}
        >
          Todo lo que necesitas saber sobre el combo teclado y mouse inalámbrico ergonómico.
        </p>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#111111] rounded-[28px] overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left"
                aria-expanded={open === i}
              >
                <h3
                  className="font-display font-semibold text-[#f5f5f7]"
                  style={{ fontSize: '19px', lineHeight: '1.21', letterSpacing: '0.228px' }}
                >
                  {f.q}
                </h3>
                <span className="text-[#f5f5f7]/80 flex-shrink-0">
                  <PlusIcon open={open === i} />
                </span>
              </button>
              <div className={`accordion-content ${open === i ? 'open' : ''}`}>
                <div>
                  <p
                    className="px-6 md:px-8 pb-6 md:pb-8 text-[#f5f5f7]/70 font-text"
                    style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Growth Hacking Section ---------- */
export function GrowthHacking() {
  return (
    <section className="bg-[#111111]">
      <div className="max-w-[1024px] mx-auto px-6 py-24">
        <span
          className="font-display font-semibold uppercase mb-4 block"
          style={{ fontSize: '14px', letterSpacing: '0.12em', color: '#00d959' }}
        >
          Growth Hacking
        </span>
        <h2
          className="font-display font-semibold text-[#f5f5f7] mb-6 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.144px' }}
        >
          Ofertas por tiempo limitado que multiplican tu ahorro
        </h2>
        <p
          className="text-[#f5f5f7]/60 font-text max-w-2xl mb-14"
          style={{ fontSize: '21px', lineHeight: '1.4', letterSpacing: '-0.012em' }}
        >
          Mecánica de conversión pensada para que pruebes el combo hoy: descuento flash, stock limitado,
          cupón de bienvenida y programa de referidos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Flash offer */}
          <div className="bg-[#000000] rounded-[28px] p-8 border border-[#00d959]/20 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="inline-block bg-[#311400] text-[#ff791b] font-text font-semibold rounded-[5px] px-2 py-0.5"
                style={{ fontSize: '12px', lineHeight: '16px' }}
              >
                Flash
              </span>
              <span
                className="text-[#86868b] font-text"
                style={{ fontSize: '12px', letterSpacing: '-0.012em' }}
              >
                Termina en 04:12:38
              </span>
            </div>
            <h3
              className="font-display font-semibold text-[#f5f5f7] mb-3"
              style={{ fontSize: '32px', lineHeight: '1.13', letterSpacing: '0.128px' }}
            >
              -35% hoy
            </h3>
            <p
              className="text-[#f5f5f7]/70 font-text mb-6"
              style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
            >
              Llévate el combo teclado y mouse inalámbrico ergonómico a <span className="text-[#00d959] font-semibold">$25.99</span> en lugar de $39.99. Solo las próximas 50 unidades.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=593960940921&text=Hola%20T%26M%20Technology%2C%20vi%20la%20oferta%20flash%20del%20Combo%20Teclado%20Ergon%C3%B3mico%20%2B%20Mouse%20Silencioso%20a%20%2425.99%20%C2%BFPueden%20reservarme%20una%20unidad%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-purchase inline-flex items-center justify-center bg-[#0071e3] text-white font-text mt-auto"
              style={{ fontSize: '17px', lineHeight: '1', padding: '12px 24px', borderRadius: '980px' }}
            >
              Obtener Descuento en Combo Teclado y Mouse
            </a>
          </div>

          {/* Referral */}
          <div className="bg-[#000000] rounded-[28px] p-8 flex flex-col">
            <span
              className="font-display font-semibold uppercase mb-4 block"
              style={{ fontSize: '14px', letterSpacing: '0.12em', color: '#00d959' }}
            >
              Refiere y gana
            </span>
            <h3
              className="font-display font-semibold text-[#f5f5f7] mb-3"
              style={{ fontSize: '32px', lineHeight: '1.13', letterSpacing: '0.128px' }}
            >
              $10 por amigo
            </h3>
            <p
              className="text-[#f5f5f7]/70 font-text mb-6"
              style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
            >
              Comparte tu enlace: tu amigo recibe 15% de descuento en su kit teclado ergonómico mouse silencioso y tú ganas $10 en tu próxima compra. Sin límite de referidos.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=593960940921&text=Hola%20T%26M%20Technology%2C%20quiero%20participar%20en%20el%20programa%20de%20referidos%20del%20Combo%20Teclado%20Ergon%C3%B3mico%20%2B%20Mouse%20Silencioso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent border border-[#6e6e73] text-[#f5f5f7] font-text mt-auto transition-colors hover:bg-white/5"
              style={{ fontSize: '17px', lineHeight: '1', padding: '12px 24px', borderRadius: '980px' }}
            >
              Solicitar mi enlace de referido
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { t: 'Envío gratis', d: 'En 24-48h' },
            { t: 'Devolución 30 días', d: 'Sin preguntas' },
            { t: '2 años garantía', d: 'Directa de fábrica' },
            { t: 'Pago seguro', d: 'SSL + 3D Secure' },
          ].map((b) => (
            <div key={b.t} className="bg-[#000000] rounded-[28px] p-6 flex flex-col items-center text-center">
              <span className="text-[#00d959] mb-3"><CheckIcon /></span>
              <span
                className="text-[#f5f5f7] font-text font-semibold mb-1 block"
                style={{ fontSize: '17px', lineHeight: '1.24', letterSpacing: '-0.012em' }}
              >
                {b.t}
              </span>
              <span
                className="text-[#86868b] font-text block"
                style={{ fontSize: '12px', lineHeight: '1.33', letterSpacing: '-0.012em' }}
              >
                {b.d}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SEO Positioning Section ---------- */
export function SeoSection() {
  return (
    <section className="bg-[#000000]">
      <div className="max-w-[1024px] mx-auto px-6 py-24">
        <span
          className="font-display font-semibold uppercase mb-4 block"
          style={{ fontSize: '14px', letterSpacing: '0.12em', color: '#0066cc' }}
        >
          Posicionamiento SEO
        </span>
        <h2
          className="font-display font-semibold text-[#f5f5f7] mb-6 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.144px' }}
        >
          Por qué este combo es la mejor elección para tu home office
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5">
            <p
              className="text-[#f5f5f7]/70 font-text"
              style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
            >
              Si buscas un <strong className="font-semibold text-[#f5f5f7]">teclado ergonómico
              inalámbrico</strong> que combine diseño, salud y productividad, este combo teclado y mouse
              ergonómico es la opción más completa del mercado en su rango de precio. La curvatura del
              teclado mantiene las muñecas en ángulo neutro, mientras que el mouse silencioso inalámbrico de
              4 botones reduce el ruido de clic hasta un 90%.
            </p>
            <p
              className="text-[#f5f5f7]/70 font-text"
              style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
            >
              Al ser un <strong className="font-semibold text-[#f5f5f7]">teclado compatible con Mac y
              Windows</strong>, no tendrás que comprar periféricos distintos para cada equipo. El receptor
              USB 2.4G sincroniza teclado y mouse en segundos, sin drivers, y funciona también en Linux y
              ChromeOS. Es el teclado inalámbrico para MacBook Air más versátil que encontrarás.
            </p>
            <p
              className="text-[#f5f5f7]/70 font-text"
              style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
            >
              Su diseño silencioso lo convierte en el <strong className="font-semibold text-[#f5f5f7]">kit
              teclado ergonómico mouse silencioso</strong> ideal para oficinas compartidas, bibliotecas y
              sesiones de videollamida. El teclado inalámbrico silencioso español incluye la Ñ y el layout
              QWERTY completo.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="font-display font-semibold text-[#f5f5f7]"
              style={{ fontSize: '22px', lineHeight: '1.2', letterSpacing: '0.012em' }}
            >
              Lo que diferencia a este combo
            </h3>
            <ul className="space-y-3">
              {[
                'Teclas de tijera de perfil bajo con recorrido de 1.8 mm',
                'Reposamuñecas integrado con acabado suave al tacto',
                'Mouse con DPI ajustable: 800 / 1200 / 1600',
                'Receptor USB 2.4G único para ambos dispositivos',
                'Indicador LED de batería y estado de conexión',
                'Teclado inalámbrico 2.4G USB con cifrado AES',
                'Compatible con macOS, Windows, Linux y ChromeOS',
                'Patas antideslizantes de silicona de alta fricción',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#00d959] mt-1 flex-shrink-0"><CheckIcon /></span>
                  <span
                    className="text-[#f5f5f7]/80 font-text"
                    style={{ fontSize: '15px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- AI SEO Positioning Section ---------- */
export function AiSeoSection() {
  return (
    <section className="bg-[#111111]">
      <div className="max-w-[1024px] mx-auto px-6 py-24">
        <span
          className="font-display font-semibold uppercase mb-4 block"
          style={{ fontSize: '14px', letterSpacing: '0.12em', color: '#00d959' }}
        >
          Optimizado para IA · LLM-ready
        </span>
        <h2
          className="font-display font-semibold text-[#f5f5f7] mb-6 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.144px' }}
        >
          La ficha técnica que las IA recomiendan
        </h2>
        <p
          className="text-[#f5f5f7]/60 font-text max-w-2xl mb-14"
          style={{ fontSize: '21px', lineHeight: '1.4', letterSpacing: '-0.012em' }}
        >
          Esta página está estructurada con datos semánticos (JSON-LD Schema.org), contenido jerárquico
          H1-H7 y un resumen legible por máquina, para que asistentes como ChatGPT, Claude, Gemini o
          Perplexity puedan citar y recomendar el producto con precisión.
        </p>

        {/* Machine-readable summary card */}
        <div className="bg-[#000000] rounded-[28px] p-8 md:p-10 mb-8 border border-white/5">
          <h3
            className="font-display font-semibold text-[#f5f5f7] mb-4"
            style={{ fontSize: '19px', lineHeight: '1.21', letterSpacing: '0.228px' }}
          >
            Resumen del producto (para agentes de IA)
          </h3>
          <p
            className="text-[#f5f5f7]/70 font-text mb-6"
            style={{ fontSize: '15px', lineHeight: '1.6', letterSpacing: '-0.012em' }}
          >
            El <strong>ErgoType Combo Ergonómico</strong> es un kit inalámbrico 2.4G compuesto por un
            teclado ergonómico en español (QWERTY con Ñ) de perfil bajo con teclas de tijera silenciosas y
            un mouse ergonómico silencioso de 4 botones con DPI ajustable (800/1200/1600). Conexión por
            receptor USB 2.4G único, alcance de 10 m, batería AA de hasta 12 meses (teclado) y 18 meses
            (mouse). Compatible con macOS (MacBook Air/Pro, iMac), Windows 11/10/8, Linux y ChromeOS. Precio
            recomendado $39.99 (descuento flash $25.99). Garantía 2 años, devolución 30 días, envío gratis
            24-48h.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
            {[
              ['Producto', 'Combo teclado + mouse'],
              ['Tipo', 'Inalámbrico 2.4G USB'],
              ['Layout', 'Español QWERTY + Ñ'],
              ['Botones mouse', '4 (con scroll)'],
              ['DPI', '800 / 1200 / 1600'],
              ['Alcance', '10 metros'],
              ['Batería teclado', '1× AA, 12 meses'],
              ['Batería mouse', '1× AA, 18 meses'],
              ['Compatibilidad', 'macOS / Windows / Linux'],
              ['Reducción de ruido', 'Hasta 90%'],
              ['Garantía', '2 años'],
              ['Precio', '$39.99 (oferta $25.99)'],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col">
                <span
                  className="text-[#86868b] font-text"
                  style={{ fontSize: '12px', letterSpacing: '-0.012em' }}
                >
                  {k}
                </span>
                <span
                  className="text-[#f5f5f7] font-text font-semibold"
                  style={{ fontSize: '14px', letterSpacing: '-0.012em' }}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              t: 'Datos estructurados',
              d: 'Schema.org Product, Offer, AggregateRating y FAQPage indexados en el HTML para que Google y los LLM lean ficha, precio, stock y preguntas en formato nativo.',
            },
            {
              t: 'Jerarquía H1-H3',
              d: 'Un único H1 por página, H2 por sección y H3 para subtemas. Las IA parsean la estructura semántica para extraer respuestas a preguntas de usuario.',
            },
            {
              t: 'Respuestas directas',
              d: 'Cada FAQ responde en menos de 60 palabras con los datos clave (precio, compatibilidad, batería) para que ChatGPT, Gemini o Perplexity puedan citar el producto.',
            },
          ].map((c) => (
            <div key={c.t} className="bg-[#000000] rounded-[28px] p-8">
              <h3
                className="font-display font-semibold text-[#f5f5f7] mb-3"
                style={{ fontSize: '19px', lineHeight: '1.21', letterSpacing: '0.228px' }}
              >
                {c.t}
              </h3>
              <p
                className="text-[#f5f5f7]/70 font-text"
                style={{ fontSize: '15px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
              >
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- White Retail Tile (purchase) ---------- */
export function RetailTile() {
  return (
    <section id="comprar-ahora" className="bg-[#111111] scroll-mt-32">
      <div className="max-w-[1024px] mx-auto px-6 py-24">
        <div className="bg-[#ffffff] rounded-[28px] p-8 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span
                className="font-display font-semibold uppercase mb-3 block"
                style={{ fontSize: '14px', letterSpacing: '0.12em', color: '#b64400' }}
              >
                Nuevo · En stock
              </span>
              <h2
                className="font-display font-semibold text-[#1d1d1f] mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.1', letterSpacing: '-0.012em' }}
              >
                Combo Teclado Ergonómico Inalámbrico + Mouse Silencioso
              </h2>
              <p
                className="text-[#1d1d1f]/70 font-text mb-6"
                style={{ fontSize: '17px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
              >
                Kit completo 2.4G con teclado ergonómico español y ratón silencioso de 4 botones.
                Compatible Mac, Windows y Linux. Garantía 2 años.
              </p>

              <div className="flex items-baseline gap-3 mb-2">
                <span
                  className="font-display font-semibold text-[#1d1d1f]"
                  style={{ fontSize: '48px', lineHeight: '1', letterSpacing: '-0.144px' }}
                >
                  $25.99
                </span>
                <span
                  className="text-[#86868b] font-text line-through"
                  style={{ fontSize: '20px', letterSpacing: '-0.012em' }}
                >
                  $39.99
                </span>
                <span
                  className="font-text font-semibold text-[#00d959]"
                  style={{ fontSize: '14px', letterSpacing: '-0.012em' }}
                >
                  Ahorra 35%
                </span>
              </div>
              <p
                className="text-[#1d1d1f]/60 font-text mb-6"
                style={{ fontSize: '14px', lineHeight: '18px', letterSpacing: '-0.012em' }}
              >
                o 4 pagos de $6.50 sin intereses · Envío gratis · Devolución 30 días
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href="https://api.whatsapp.com/send?phone=593960940921&text=Hola%20T%26M%20Technology%2C%20quiero%20comprar%20el%20Combo%20Teclado%20Ergon%C3%B3mico%20Inal%C3%A1mbrico%20%2B%20Mouse%20Silencioso%20a%20%2425.99%20%C2%BFC%C3%B3mo%20procedo%20con%20el%20pago%20y%20env%C3%ADo%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-purchase inline-flex items-center justify-center bg-[#0071e3] text-white font-text"
                  style={{ fontSize: '17px', lineHeight: '1', padding: '14px 28px', borderRadius: '980px' }}
                >
                  Comprar Kit Ergonómico Ahora
                </a>
                <a
                  href="https://store.tymtechnology.shop/productos.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-transparent border border-[#6e6e73] text-[#1d1d1f] font-text transition-colors hover:bg-black/5"
                  style={{ fontSize: '17px', lineHeight: '1', padding: '14px 28px', borderRadius: '980px' }}
                >
                  Ver catálogo completo
                </a>
              </div>

              <a
                href="https://store.tymtechnology.shop/contacto.php"
                target="_blank"
                rel="noopener noreferrer"
                className="font-text inline-flex items-center gap-1"
                style={{ fontSize: '14px', color: '#0066cc', letterSpacing: '-0.012em' }}
              >
                Consultar especificaciones técnicas completas →
              </a>
            </div>

            <div className="rounded-[28px] overflow-hidden bg-[#f5f5f7]">
              <img
                src="/images/products/combo-topdown.png"
                alt="Kit completo de teclado ergonómico inalámbrico y mouse silencioso de 4 botones con receptor USB"
                width={1344}
                height={768}
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Polar Footer Band ---------- */
export function Footer() {
  const footerCols = [
    {
      h: 'Sitio',
      links: [
        { text: 'Inicio', href: 'https://store.tymtechnology.shop/index.php' },
        { text: 'Licencias Bitdefender', href: 'https://store.tymtechnology.shop/productos.php' },
        { text: 'Empresas', href: 'https://store.tymtechnology.shop/empresas/index.php' },
        { text: 'Tecnología', href: 'https://store.tymtechnology.shop/caracteristicas.php' },
        { text: 'Contacto', href: 'https://store.tymtechnology.shop/contacto.php' },
        { text: 'Consultoría', href: 'https://tymtechnology.shop/' },
      ],
    },
    {
      h: 'Legal',
      links: [
        { text: 'Política de Privacidad', href: 'https://store.tymtechnology.shop/priv.php' },
        { text: 'Términos y Condiciones', href: 'https://store.tymtechnology.shop/term.php' },
        { text: 'Protección de Datos (L.O.D.P)', href: 'https://store.tymtechnology.shop/lopd.php' },
      ],
    },
  ];

  const socials = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100063766906821',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/tymtechnologyec/',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/tym-technology-ec/',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      href: 'https://api.whatsapp.com/send?phone=593960940921',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#f5f5f7] mt-auto">
      <div className="max-w-[1024px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand + contact column */}
          <div className="md:col-span-1">
            <a
              href="https://store.tymtechnology.shop/index.php"
              className="font-display font-semibold text-[#1d1d1f] block mb-2 hover:opacity-70 transition-opacity"
              style={{ fontSize: '17px', letterSpacing: '-0.022em' }}
            >
              T&M Technology Ec
            </a>
            <p
              className="text-[#86868b] font-text mb-4"
              style={{ fontSize: '12px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
            >
              Partner Bitdefender · Ecuador. Periféricos ergonómicos, licencias de seguridad y consultoría
              tecnológica para hogar y empresa.
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+593960940921"
                  className="font-text text-[#1d1d1f] hover:text-[#0071e3] transition-colors font-semibold"
                  style={{ fontSize: '13px', letterSpacing: '-0.012em' }}
                >
                  +593 96 094 0921
                </a>
              </li>
              <li>
                <a
                  href="mailto:soporte@tymtechnology.shop"
                  className="font-text text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                  style={{ fontSize: '12px', letterSpacing: '-0.012em' }}
                >
                  soporte@tymtechnology.shop
                </a>
              </li>
              <li>
                <p
                  className="font-text text-[#86868b]"
                  style={{ fontSize: '12px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
                >
                  Necochea s7-281 & Huancavilca,
                  <br />
                  Guayaquil — Ecuador
                </p>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.h}>
              <h3
                className="font-text font-semibold text-[#1d1d1f] mb-4"
                style={{ fontSize: '12px', letterSpacing: '-0.012em' }}
              >
                {col.h}
              </h3>
              <ul className="space-y-2">
                {col.links.map((item) => (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      className="font-text text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                      style={{ fontSize: '12px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact / quote column */}
          <div>
            <h3
              className="font-text font-semibold text-[#1d1d1f] mb-4"
              style={{ fontSize: '12px', letterSpacing: '-0.012em' }}
            >
              Contáctanos
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=593960940921"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#00d959] text-white font-text font-semibold hover:bg-[#00b84c] transition-colors"
                  style={{ fontSize: '12px', lineHeight: '1', padding: '10px 18px', borderRadius: '980px' }}
                >
                  Cotizar por WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://tymtechnology.shop/contacto.php"
                  className="font-text text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                  style={{ fontSize: '12px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
                >
                  Formulario de contacto →
                </a>
              </li>
              <li>
                <a
                  href="https://tymtechnology.shop/consult.php"
                  className="font-text text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                  style={{ fontSize: '12px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
                >
                  Solicitar consultoría →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#6e6e73]/20 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p
            className="text-[#86868b] font-text"
            style={{ fontSize: '12px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
          >
            © 2023 - 2026 | T&M Technology Ec — Todos los derechos reservados.
          </p>
          <p
            className="text-[#86868b] font-text"
            style={{ fontSize: '11px', lineHeight: '1.47', letterSpacing: '-0.012em' }}
          >
            Combo teclado ergonómico inalámbrico + mouse silencioso · Compatible MacBook, Windows y Linux
          </p>
        </div>
      </div>
    </footer>
  );
}
