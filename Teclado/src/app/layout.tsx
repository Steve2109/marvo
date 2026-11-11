import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://store.tymtechnology.shop"),
  title: "Combo Teclado Ergonómico Inalámbrico 2.4G y Mouse Silencioso | Compatible Mac y PC",
  description:
    "Compra el kit de teclado ergonómico inalámbrico 2.4G con ratón silencioso de 4 botones. Ideal para MacBook, Windows y laptop. Evita el dolor de muñeca. ¡Envío rápido!",
  keywords: [
    "teclado ergonomico inalambrico",
    "combo teclado y mouse inalambrico",
    "teclado y mouse silencioso",
    "mouse silencioso inalambrico",
    "teclado inalambrico para macbook",
    "teclado para laptop inalambrico",
    "combo teclado y mouse ergonomico",
    "mouse 4 botones inalambrico",
    "teclado inalambrico 2.4g usb",
    "teclado compatible con mac y windows",
    "teclado ergonomico para evitar dolor de muñeca",
    "kit teclado y mouse para macbook air",
    "mouse silencioso 4 botones dpi",
    "teclado inalambrico silencioso español",
    "teclado y mouse inalambrico para laptop",
    "raton ergonomico silencioso 4 botones",
    "teclado 2.4g inalambrico con receptor usb",
    "kit teclado ergonomico mouse silencioso",
    "teclado bluetooth y 2.4g receptor mac windows",
    "teclado ergonomico silencioso home office",
  ],
  authors: [{ name: "T&M Technology Ec" }],
  creator: "T&M Technology Ec",
  publisher: "T&M Technology Ec",
  alternates: {
    canonical: "https://store.tymtechnology.shop/teclado-ergonomico-inalambrico",
  },
  openGraph: {
    title: "Combo Teclado Ergonómico Inalámbrico 2.4G y Mouse Silencioso | Compatible Mac y PC",
    description:
      "Kit de teclado ergonómico inalámbrico 2.4G con ratón silencioso de 4 botones. Ideal para MacBook, Windows y laptop. Evita el dolor de muñeca.",
    url: "https://store.tymtechnology.shop/teclado-ergonomico-inalambrico",
    siteName: "T&M Technology Ec",
    images: [
      {
        url: "/images/products/hero-combo.png",
        width: 1344,
        height: 768,
        alt: "Combo de teclado ergonómico inalámbrico 2.4G y mouse silencioso de 4 botones",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Combo Teclado Ergonómico Inalámbrico y Mouse Silencioso",
    description:
      "Kit ergonómico inalámbrico 2.4G con ratón silencioso de 4 botones. Compatible Mac y PC. Evita el dolor de muñeca.",
    images: ["/images/products/hero-combo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "shopping",
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Combo Teclado Ergonómico Inalámbrico 2.4G y Mouse Silencioso de 4 Botones",
  image: [
    "https://store.tymtechnology.shop/images/products/hero-combo.png",
    "https://store.tymtechnology.shop/images/products/keyboard-closeup.png",
    "https://store.tymtechnology.shop/images/products/mouse-closeup.png",
    "https://store.tymtechnology.shop/images/products/combo-topdown.png",
    "https://store.tymtechnology.shop/images/products/ergonomics-wrist.png",
    "https://store.tymtechnology.shop/images/products/compatibility.png",
    "https://store.tymtechnology.shop/images/products/lifestyle-office.png",
    "https://store.tymtechnology.shop/images/products/usb-dongle.png",
  ],
  description:
    "Kit de teclado ergonómico inalámbrico 2.4G con ratón silencioso de 4 botones y DPI ajustable. Diseñado para evitar el dolor de muñeca durante largas jornadas de trabajo. Compatible con MacBook Air/Pro, Windows y laptop mediante receptor USB 2.4G.",
  brand: { "@type": "Brand", name: "T&M Technology Ec" },
  category: "Periféricos de computadora",
  offers: {
    "@type": "Offer",
    url: "https://store.tymtechnology.shop/teclado-ergonomico-inalambrico",
    priceCurrency: "USD",
    price: "25.99",
    availability: "https://schema.org/InStock",
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingDestination: { "@type": "DefinedRegion", addressCountry: "EC" },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
        transitTime: { "@type": "QuantitativeValue", minValue: 2, maxValue: 5, unitCode: "DAY" },
      },
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "2483",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Este combo de teclado y mouse inalámbrico sirve para MacBook Air?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, nuestro kit teclado y mouse para MacBook Air y Pro se conecta de forma inmediata mediante el receptor USB 2.4G o adaptadores Type-C. Es 100% compatible con macOS sin necesidad de drivers.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ratón incluye botones laterales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, es un ratón ergonómico silencioso de 4 botones (izquierdo, derecho, scroll y botón lateral) que te permite navegar de forma fluida entre pestañas con DPI ajustable hasta 1600.",
      },
    },
    {
      "@type": "Question",
      name: "¿El teclado ergonómico realmente ayuda a evitar el dolor de muñeca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Su diseño curvado en onda mantiene las manos en una posición natural y neutra, reduciendo la tensión en muñecas y antebrazos durante jornadas prolongadas de trabajo en home office.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué batería usa el combo y cuánto dura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El teclado funciona con 1 pila AA y el mouse con 1 pila AA (no incluidas). El teclado dura hasta 12 meses y el mouse hasta 18 meses en uso normal gracias a su sistema de ahorro de energía inteligente.",
      },
    },
    {
      "@type": "Question",
      name: "¿El teclado tiene distribución en español con la letra Ñ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, el teclado inalámbrico silencioso español incluye la letra Ñ y la distribución QWERTY en español, ideal para usuarios de España y Latinoamérica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona con Windows y Linux además de Mac?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, es un teclado compatible con Mac y Windows, y también funciona en Linux, ChromeOS y Android. Solo conecta el receptor USB 2.4G y empieza a escribir al instante, sin drivers.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué distancia de conexión tiene el receptor 2.4G?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El receptor USB 2.4G ofrece una conexión estable hasta 10 metros (33 pies) sin latencia, ideal para presentaciones o trabajar desde el sofá.",
      },
    },
    {
      "@type": "Question",
      name: "¿Las teclas son realmente silenciosas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Tanto el teclado como el mouse silencioso reducen el ruido de clic hasta un 90% frente a un teclado convencional, perfectos para oficinas compartidas, bibliotecas y videollamadas.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://store.tymtechnology.shop/index.php" },
    { "@type": "ListItem", position: 2, name: "Licencias y productos", item: "https://store.tymtechnology.shop/productos.php" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Teclados ergonómicos",
      item: "https://store.tymtechnology.shop/teclado-ergonomico-inalambrico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
