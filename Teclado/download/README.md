# Combo Teclado Ergonómico Inalámbrico + Mouse Silencioso

> Landing page de producto para **T&M Technology Ec** (Partner Bitdefender · Ecuador), construida con Next.js 16, TypeScript y Tailwind CSS 4, siguiendo un design system estilo Apple (tema oscuro "midnight endurance") con efecto skeleton screen, optimización SEO completa y posicionamiento para motores de IA (LLM).

---

## Tabla de contenidos

1. [Visión general](#visión-general)
2. [Características principales](#características-principales)
3. [Stack tecnológico](#stack-tecnológico)
4. [Estructura del proyecto](#estructura-del-proyecto)
5. [Requisitos previos](#requisitos-previos)
6. [Instalación local](#instalación-local)
7. [Comandos disponibles](#comandos-disponibles)
8. [Configuración](#configuración)
9. [Design System (Apple Style Reference)](#design-system-apple-style-reference)
10. [SEO y Posicionamiento para IA](#seo-y-posicionamiento-para-ia)
11. [Despliegue en producción](#despliegue-en-producción)
    - [Opción A: VPS con Node.js + Caddy (recomendado)](#opción-a-vps-con-nodejs--caddy-recomendado)
    - [Opción B: Vercel](#opción-b-vercel)
    - [Opción C: Docker](#opción-c-docker)
    - [Opción D: Nginx + PM2](#opción-d-nginx--pm2)
12. [Configuración del dominio y SSL](#configuración-del-dominio-y-ssl)
13. [Integración con la tienda existente](#integración-con-la-tienda-existente)
14. [Verificación post-despliegue](#verificación-post-despliegue)
15. [Solución de problemas](#solución-de-problemas)
16. [Licencia](#licencia)

---

## Visión general

Esta landing page presenta el **Combo Teclado Ergonómico Inalámbrico 2.4G + Mouse Silencioso de 4 Botones**, un producto vendido por T&M Technology Ec. La página está diseñada para:

- **Convertir visitantes en clientes** mediante CTAs que abren WhatsApp con mensajes pre-llenados de cotización.
- **Posicionar en Google** con metadatos optimizados, datos estructurados Schema.org y contenido jerárquico H1-H3.
- **Ser recomendada por IA** (ChatGPT, Claude, Gemini, Perplexity) mediante un archivo `llms.txt`, robots.txt permisivo para crawlers de IA, y un resumen legible por máquina.
- **Aplicar growth hacking** con oferta flash, contador regresivo, programa de referidos y trust badges.

### Datos del producto

| Campo | Valor |
|-------|-------|
| Producto | Combo Teclado Ergonómico Inalámbrico 2.4G + Mouse Silencioso de 4 Botones |
| Marca | T&M Technology Ec |
| Precio | $39.99 (oferta flash: $25.99, -35%) |
| Conectividad | Inalámbrico 2.4G USB (receptor único) |
| Layout | Español QWERTY con Ñ |
| Compatibilidad | macOS, Windows 11/10/8, Linux, ChromeOS |
| Batería | Teclado 12 meses / Mouse 18 meses (1× AA c/u) |
| Garantía | 2 años · Devolución 30 días |

---

## Características principales

### Diseño
- **Tema oscuro estilo Apple** ("midnight endurance"): canvas Carbon `#111111`, escenarios Absolute Black `#000000`, acentos Battery Green `#00d959` y Purchase Blue `#0071e3`.
- **Tipografía SF Pro** (Display + Text) con escala completa de 10px a 64px y tracking preciso.
- **Sin sombras**: la profundidad se logra por contraste de canvas y clipping de bordes redondeados (28px en cards/media tiles, 980px en pills, 36px en selector chips).
- **Skeleton screen**: animación shimmer de 1.6s al cargar, con fade-in-up del contenido real.

### Interactividad
- **Selector pills** en el módulo "Un vistazo de cerca" (4 vistas intercambiables).
- **Acordeón FAQ** expandible con 8 preguntas.
- **Scroll reveal**: las secciones aparecen con animación al entrar en viewport.
- **Navegación sticky** de dos niveles (Global Nav 44px + Local Nav 52px).

### SEO y Growth Hacking
- **20 palabras clave** integradas naturalmente (sin keyword stuffing).
- **Datos estructurados JSON-LD**: Product, Offer, AggregateRating, FAQPage, BreadcrumbList.
- **3 secciones de marketing digital**: Growth Hacking, Posicionamiento SEO, Posicionamiento SEO IA.
- **CTAs transaccionales** conectados a WhatsApp con mensajes pre-llenados.

---

## Stack tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.x |
| Lenguaje | TypeScript | 5.x |
| UI | React | 19.x |
| Estilos | Tailwind CSS | 4.x |
| Componentes | shadcn/ui (New York) | — |
| Iconos | Lucide React | 0.525.x |
| Animaciones | Framer Motion + CSS | 12.x |
| Runtime | Bun | 1.3.x |
| ORM (opcional) | Prisma | 6.11.x |
| Fuente | Inter (Google Fonts) | — |

> **Nota:** El proyecto usa `output: "standalone"` en `next.config.ts`, lo que genera un servidor Node.js autocontenido optimizado para producción.

---

## Estructura del proyecto

```
.
├── public/
│   ├── images/products/          # 8 imágenes del producto (PNG)
│   │   ├── hero-combo.png
│   │   ├── keyboard-closeup.png
│   │   ├── mouse-closeup.png
│   │   ├── usb-dongle.png
│   │   ├── lifestyle-office.png
│   │   ├── compatibility.png
│   │   ├── ergonomics-wrist.png
│   │   └── combo-topdown.png
│   ├── llms.txt                  # Resumen del producto para crawlers de IA
│   ├── robots.txt                # Permite GPTBot, Claude, Perplexity, etc.
│   └── logo.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Metadata SEO + JSON-LD (Product, FAQ, Breadcrumb)
│   │   ├── page.tsx              # Página principal (skeleton + scroll reveal)
│   │   ├── globals.css           # Tokens Apple + animaciones skeleton/shimmer
│   │   └── api/route.ts
│   ├── components/
│   │   ├── product/
│   │   │   ├── Sections1.tsx     # Skeleton, GlobalNav, LocalNav, Hero
│   │   │   ├── Sections2.tsx     # Benefits, Compatibility, CloseLook, Gallery
│   │   │   └── Sections3.tsx     # FAQ, GrowthHacking, SeoSection, AiSeoSection, RetailTile, Footer
│   │   └── ui/                   # shadcn/ui components
│   ├── hooks/
│   └── lib/
├── next.config.ts                # output: "standalone"
├── Caddyfile                     # Reverse proxy para el sandbox
├── package.json
└── README.md
```

---

## Requisitos previos

- **Node.js** ≥ 20.0.0 (o **Bun** ≥ 1.3.x)
- **npm**, **pnpm** o **bun** como gestor de paquetes
- Un servidor con al menos **512 MB de RAM** (recomendado 1 GB)
- **Dominio** apuntando al servidor (ej. `store.tymtechnology.shop`)
- Acceso **root** o sudo al servidor de producción

---

## Instalación local

```bash
# 1. Clonar o copiar el proyecto
cd /ruta/al/proyecto

# 2. Instalar dependencias (elegir uno)
bun install          # recomendado (más rápido)
# o
npm install
# o
pnpm install

# 3. Iniciar servidor de desarrollo
bun run dev
# o
npm run dev
```

La página estará disponible en `http://localhost:3000`.

> **Importante:** Solo la ruta `/` es visible para el usuario. No crear rutas adicionales en `src/app/`.

---

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `bun run dev` | Inicia servidor de desarrollo en puerto 3000 |
| `bun run build` | Compila para producción (genera `.next/standalone/`) |
| `bun run start` | Inicia servidor de producción con el build standalone |
| `bun run lint` | Ejecuta ESLint para verificar calidad de código |
| `bun run db:push` | Sincroniza el schema de Prisma con la base de datos |
| `bun run db:generate` | Genera el cliente de Prisma |

---

## Configuración

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto (opcional, solo si usas Prisma):

```env
# Base de datos (opcional, solo si activas Prisma)
DATABASE_URL="file:./db/custom.db"

# URL del sitio (para metadata y canonical)
NEXT_PUBLIC_SITE_URL="https://store.tymtechnology.shop"
```

### Personalización rápida

- **Dominio**: Reemplaza `store.tymtechnology.shop` en `src/app/layout.tsx`, `public/llms.txt` y `public/robots.txt`.
- **WhatsApp**: El número `+593960940921` está en `Sections1.tsx` (Hero), `Sections3.tsx` (Growth Hacking, RetailTile, Footer).
- **Imágenes**: Reemplaza los PNG en `public/images/products/` por fotos reales del producto.
- **Precios**: Actualiza `$39.99` / `$25.99` en `Sections1.tsx` (Hero) y `Sections3.tsx` (RetailTile, GrowthHacking).

---

## Design System (Apple Style Reference)

La página implementa los tokens del DESIGN.md de Apple:

### Colores clave
| Token | Hex | Uso |
|-------|-----|-----|
| `--color-polar-white` | `#f5f5f7` | Headlines sobre negro, footer |
| `--color-absolute-black` | `#000000` | Hero, media stages |
| `--color-carbon` | `#111111` | Canvas de página, nav bars |
| `--color-battery-green` | `#00d959` | Métricas de batería, acentos |
| `--color-purchase-blue` | `#0071e3` | Botones de compra |
| `--color-steel` | `#86868b` | Texto muted |

### Radios de borde
- **Cards / media tiles**: 28px
- **Pills / botones**: 980px
- **Selector chips**: 36px
- **Badges**: 5px

### Surfaces (niveles de elevación)
1. Carbon Canvas `#111111` — fondo de página
2. Black Media Stage `#000000` — hero e imágenes inmersivas
3. Control Charcoal `#333336` — chips y selectores
4. White Retail Tile `#ffffff` — cards de compra
5. Polar Footer Band `#f5f5f7` — footer

> **Regla:** No usar box-shadows. La profundidad viene del contraste entre `#111111` y `#000000`.

---

## SEO y Posicionamiento para IA

### Optimización SEO tradicional
- **Meta title**: "Combo Teclado Ergonómico Inalámbrico 2.4G y Mouse Silencioso | Compatible Mac y PC"
- **Meta description**: Optimizada con palabras clave y CTA
- **20 keywords** en metadata + integradas naturalmente en el contenido
- **Jerarquía semántica**: 1× `<h1>`, múltiples `<h2>` por sección, `<h3>` por subtema
- **Alt text** en todas las imágenes con palabras clave
- **Canonical**: `https://store.tymtechnology.shop/teclado-ergonomico-inalambrico`

### Datos estructurados (JSON-LD)
Inyectados en `layout.tsx`:
1. **Product** — nombre, imagen, descripción, marca, oferta, precio, disponibilidad
2. **FAQPage** — 8 preguntas frecuentes con respuestas
3. **BreadcrumbList** — ruta de navegación
4. **AggregateRating** — valoración 4.7/5 (2483 reseñas)

### Posicionamiento para IA (LLM-SEO)
- **`/llms.txt`**: Resumen estructurado del producto legible por ChatGPT, Claude, Gemini, Perplexity.
- **`/robots.txt`**: Permite explícitamente a `GPTBot`, `Claude-Web`, `ClaudeBot`, `Google-Extended`, `PerplexityBot`, `CCBot`, `anthropic-ai`, `Bytespider`.
- **Sección "LLM-ready"** en la página: ficha técnica en formato clave-valor para que las IA extraigan datos precisos.
- **Respuestas directas en FAQ**: Cada respuesta < 60 palabras con datos clave (precio, compatibilidad, batería).

### Growth Hacking
- **Oferta flash** con contador regresivo (-35%, $25.99)
- **Programa de referidos** ($10 por amigo)
- **Trust badges**: envío gratis, devolución 30 días, garantía 2 años, pago seguro

---

## Despliegue en producción

El proyecto usa `output: "standalone"`, lo que genera un servidor Node.js autocontenido en `.next/standalone/`. A continuación se detallan **4 opciones de despliegue**, ordenadas por recomendación.

### Opción A: VPS con Node.js + Caddy (recomendado)

Esta es la opción más adecuada para integrar la landing page en el subdominio `store.tymtechnology.shop` junto a tu tienda PHP existente.

#### A.1. Preparar el servidor

```bash
# Conectarse al servidor por SSH
ssh root@tu-servidor

# Instalar Node.js 20.x y Bun
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# Instalar Caddy (reverse proxy + SSL automático)
apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
apt update
apt install -y caddy

# Crear usuario para la app
useradd -m -s /bin/bash tymtech
```

#### A.2. Subir el código al servidor

```bash
# Desde tu máquina local, compilar el build standalone
bun run build

# Subir el build al servidor (ej. con rsync)
rsync -avz --exclude node_modules --exclude .next \
  ./ tymtech@tu-servidor:/home/tymtech/landing-combo/

# Subir el standalone y static por separado
rsync -avz .next/standalone/ tymtech@tu-servidor:/home/tymtech/landing-combo/.next/standalone/
rsync -avz .next/static/ tymtech@tu-servidor:/home/tymtech/landing-combo/.next/standalone/.next/static/
rsync -avz public/ tymtech@tu-servidor:/home/tymtech/landing-combo/.next/standalone/public/
```

#### A.3. Probar el servidor manualmente

```bash
sudo -u tymtech bash
cd /home/tymtech/landing-combo/.next/standalone
PORT=3000 node server.js
# Verificar: curl http://localhost:3000 → debe responder HTML
```

#### A.4. Configurar como servicio con systemd

Crear `/etc/systemd/system/tymtech-landing.service`:

```ini
[Unit]
Description=T&M Technology - Landing Combo Ergonómico
After=network.target

[Service]
Type=simple
User=tymtech
WorkingDirectory=/home/tymtech/landing-combo/.next/standalone
Environment=NODE_ENV=production
Environment=PORT=3000
Environment=HOSTNAME=0.0.0.0
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```

Activar el servicio:

```bash
systemctl daemon-reload
systemctl enable tymtech-landing
systemctl start tymtech-landing
systemctl status tymtech-landing   # debe estar "active (running)"
journalctl -u tymtech-landing -f   # ver logs en tiempo real
```

#### A.5. Configurar Caddy como reverse proxy con SSL automático

Editar `/etc/caddy/Caddyfile`:

```caddyfile
# Landing page del combo ergonómico
store.tymtechnology.shop {
    encode gzip zstd

    # La landing de Next.js corre en el puerto 3000
    reverse_proxy localhost:3000 {
        header_up Host {host}
        header_up X-Real-IP {remote_host}
        header_up X-Forwarded-For {remote_host}
        header_up X-Forwarded-Proto {scheme}
    }

    # Cache de imágenes estáticas (30 días)
    @images path /images/* /_next/static/*
    handle @images {
        reverse_proxy localhost:3000
        header Cache-Control "public, max-age=2592000, immutable"
    }

    # Compresión y headers de seguridad
    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains"
        X-Content-Type-Options "nosniff"
        X-Frame-Options "SAMEORIGIN"
        Referrer-Policy "strict-origin-when-cross-origin"
    }
}
```

Recargar Caddy:

```bash
caddy validate --config /etc/caddy/Caddyfile
systemctl reload caddy
```

> **SSL automático:** Caddy obtiene y renueva certificados Let's Encrypt automáticamente al detectar el dominio. No necesitas configurar certbot.

---

### Opción B: Vercel

La forma más rápida, ideal si no quieres gestionar servidores.

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Desde la raíz del proyecto
vercel

# Responder:
#   - Set up and deploy? Y
#   - Which scope? (tu cuenta)
#   - Link to existing project? N
#   - Project name: tymtech-combo-ergonomico
#   - Framework preset: Next.js
#   - Build command: (default)
#   - Output directory: (default)
#   - Install command: (default)

# 3. Despliegue a producción
vercel --prod
```

**Ventajas:**
- SSL automático
- CDN global
- Preview deployments en cada PR
- Integración con dominio personalizado en 2 clics

**Para conectar el dominio:**
1. En el dashboard de Vercel → Settings → Domains
2. Añadir `store.tymtechnology.shop`
3. En tu proveedor de DNS, crear un registro `CNAME` apuntando a `cname.vercel-dns.com`

---

### Opción C: Docker

Crear `Dockerfile` en la raíz del proyecto:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

Crear `docker-compose.yml`:

```yaml
version: '3.8'
services:
  landing:
    build: .
    ports:
      - "3000:3000"
    restart: always
    environment:
      - NODE_ENV=production
      - PORT=3000
      - HOSTNAME=0.0.0.0
```

Desplegar:

```bash
docker-compose up -d --build
docker-compose logs -f
```

---

### Opción D: Nginx + PM2

Alternativa a Caddy si ya usas Nginx en tu servidor.

#### D.1. Instalar PM2

```bash
npm install -g pm2
```

#### D.2. Iniciar la app con PM2

```bash
cd /home/tymtech/landing-combo/.next/standalone
pm2 start server.js --name "tymtech-landing" --env production
pm2 save
pm2 startup    # seguir instrucciones para auto-arranque
```

#### D.3. Configurar Nginx

Crear `/etc/nginx/sites-available/tymtech-landing`:

```nginx
server {
    listen 80;
    server_name store.tymtechnology.shop;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache de estáticos
    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    location /images/ {
        proxy_pass http://127.0.0.1:3000;
        expires 30d;
        add_header Cache-Control "public";
    }
}
```

#### D.4. SSL con Certbot

```bash
ln -s /etc/nginx/sites-available/tymtech-landing /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx

# Obtener certificado SSL
apt install -y certbot python3-certbot-nginx
certbot --nginx -d store.tymtechnology.shop
```

---

## Configuración del dominio y SSL

### Si la landing va en un subdominio nuevo (ej. `combo.tymtechnology.shop`)

1. **DNS**: Crear un registro `A` apuntando a la IP del servidor:
   ```
   combo.tymtechnology.shop.  IN  A  IP_DEL_SERVIDOR
   ```

2. **Caddy** (recomendado, SSL automático): añadir al `Caddyfile`:
   ```caddyfile
   combo.tymtechnology.shop {
       reverse_proxy localhost:3000
   }
   ```

3. **Nginx**: crear un nuevo server block y obtener SSL con `certbot --nginx -d combo.tymtechnology.shop`.

### Si la landing va en una ruta de la tienda existente (ej. `store.tymtechnology.shop/combo-ergonomico`)

Dado que tu tienda corre en PHP, necesitas que Nginx/Caddy sirva PHP para todas las rutas excepto `/combo-ergonomico`, que se redirige a Node.js:

```caddyfile
store.tymtechnology.shop {
    # Landing Next.js
    @combo path /combo-ergonomico /combo-ergonomico/*
    handle @combo {
        rewrite * /combo-ergonomico{uri}
        reverse_proxy localhost:3000
    }

    # Tienda PHP existente
    handle {
        root * /var/www/tymtechnology
        php_fastcgi unix//run/php/php8.2-fpm.sock
        file_server
    }
}
```

> **Recomendación:** Usar un subdominio dedicado (ej. `combo.tymtechnology.shop`) es más limpio y evita conflictos con la tienda PHP.

---

## Integración con la tienda existente

La landing page ya está integrada con tu marca T&M Technology Ec:

| Elemento | Enlace |
|----------|--------|
| Logo header | `https://store.tymtechnology.shop/index.php` |
| Nav: Inicio | `https://tymtechnology.shop/` |
| Nav: Consultorías | `https://tymtechnology.shop/consult.php` |
| Nav: Tienda | `https://store.tymtechnology.shop/` |
| Nav: Licencias | `https://store.tymtechnology.shop/productos.php` |
| Nav: Empresas | `https://store.tymtechnology.shop/empresas/index.php` |
| Nav: Contacto | `https://store.tymtechnology.shop/contacto.php` |
| CTA "Comprar" | WhatsApp `+593960940921` con mensaje pre-llenado |
| Footer: Legal | `priv.php`, `term.php`, `lopd.php` |
| Footer: Redes | Facebook, Instagram, LinkedIn, WhatsApp |
| Footer: Contacto | `soporte@tymtechnology.shop`, `+593 96 094 0921` |

---

## Verificación post-despliegue

Después de desplegar, ejecuta estas verificaciones:

### 1. Página cargando correctamente

```bash
# Debe responder 200
curl -I https://store.tymtechnology.shop
# o
curl -I https://combo.tymtechnology.shop
```

### 2. Datos estructurados visibles

```bash
# Verificar JSON-LD en el HTML
curl -s https://combo.tymtechnology.shop | grep -o 'application/ld+json'
# Debe mostrar: application/ld+json (3 veces)
```

### 3. Archivos SEO accesibles

```bash
curl -I https://combo.tymtechnology.shop/robots.txt    # 200
curl -I https://combo.tymtechnology.shop/llms.txt      # 200
curl -I https://combo.tymtechnology.shop/sitemap.xml   # 200 (si lo creas)
```

### 4. Imágenes cargando

```bash
curl -I https://combo.tymtechnology.shop/images/products/hero-combo.png   # 200
```

### 5. Google Rich Results Test

Visita https://search.google.com/test/rich-results e introduce la URL de la landing para verificar que Google lee correctamente los datos estructurados (Product, FAQ, Breadcrumb).

### 6. PageSpeed Insights

Visita https://pagespeed.web.dev/ y analiza la URL para verificar el rendimiento (Core Web Vitals).

### 7. Test en móviles

Visita https://search.google.com/test/mobile-friendly con la URL de la landing.

---

## Solución de problemas

### El servicio no inicia

```bash
# Ver logs de systemd
journalctl -u tymtech-landing -n 50 --no-pager

# Verificar que el puerto 3000 no está en uso
ss -tlnp | grep :3000

# Probar manualmente
cd /home/tymtech/landing-combo/.next/standalone
PORT=3000 node server.js
```

### Error de hidratación en consola

Si aparece `Hydration mismatch`, suele ser por extensiones del navegador (Grammarly, traductores). El `<body>` ya tiene `suppressHydrationWarning`. Si persiste, verifica que no haya contenido dinámico (Date.now(), Math.random()) en el render inicial del servidor.

### Las imágenes no cargan en producción

Verifica que el directorio `public/images/products/` se copió al servidor standalone:

```bash
ls /home/tymtech/landing-combo/.next/standalone/public/images/products/
# Debe listar 8 archivos .png
```

### Caddy no obtiene el certificado SSL

```bash
# Verificar que el dominio apunta al servidor
dig store.tymtechnology.shop

# Ver logs de Caddy
journalctl -u caddy -f

# Forzar re-emisión
caddy reload --config /etc/caddy/Caddyfile
```

### El build falla por memoria insuficiente

En servidores con ≤1 GB RAM, el build de Next.js puede agotar la memoria. Compila localmente y sube el `standalone` ya construido (ver Opción A.2).

### Actualizar el sitio tras cambios

```bash
# 1. Localmente: reconstruir
bun run build

# 2. Subir el nuevo build
rsync -avz --delete .next/standalone/ tymtech@tu-servidor:/home/tymtech/landing-combo/.next/standalone/

# 3. Reiniciar el servicio
ssh root@tu-servidor "systemctl restart tymtech-landing"
```

---

## Licencia

© 2023-2026 T&M Technology Ec — Todos los derechos reservados.

Este proyecto es propietario de T&M Technology Ec (Partner Bitdefender · Ecuador). Queda prohibida su reproducción, distribución o modificación sin autorización expresa.

**Contacto:**
- 📧 soporte@tymtechnology.shop
- 📱 +593 96 094 0921
- 📍 Necochea s7-281 & Huancavilca, Guayaquil — Ecuador
- 🌐 https://tymtechnology.shop
- 🛒 https://store.tymtechnology.shop
