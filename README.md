# Spider-Man: Brand New Day

Web promocional de *Spider-Man: Brand New Day* ([spidermanbrandnewday.es](https://www.spidermanbrandnewday.es)): tráiler, sinopsis, vídeos y galería para el estreno en cines.

## Stack

- [Astro](https://astro.build) 7
- [Tailwind CSS](https://tailwindcss.com) 4
- [GSAP](https://gsap.com) (ScrollTrigger + SplitText)

Requiere Node.js `>=22.12.0` y [pnpm](https://pnpm.io).

## Desarrollo

```sh
pnpm install
pnpm dev
```

| Comando | Acción |
| :------ | :----- |
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Build de producción en `./dist/` |
| `pnpm preview` | Previsualiza el build localmente |

## Estructura

```text
/
├── public/          # Fuentes, imágenes, vídeos y favicon
├── src/
│   ├── components/  # Hero, sinopsis, vídeos, galería, UI fija…
│   ├── data/        # Contenido editorial
│   ├── layouts/     # Layout base y SEO
│   ├── lib/         # Helpers (DOM, GSAP, loading)
│   ├── pages/       # Rutas
│   └── styles/      # Estilos globales
└── package.json
```
