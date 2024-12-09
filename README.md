# Proyecto: Réplica de la Google Store

## **Estado**: En desarrollo

## **Responsables:**

- **Equipo: AsturByte**

- **Integrantes**
  - Celia Garrido: Product Owner/Developer
  - Marta Bernardo: Scrum Master/Developer
  - Rosa Angélica: Developer
  - Liam Guilarte: Developer

## **Funcionalidades pactadas**

Réplica de las páginas de cinco productos en Google Store.

- Diseño y estilos responsivos para desktop y mobile.
- Cada producto debe tener un botón para añadirlo al carrito.
  - Para habilitar ese botón el usuario previamente deberá seleccionar los colores o estilos del producto
  - Al hacer clic, aparecerá la cantidad de items añadidos en el icono del carrito en la navbar
  - El usuario no podrá añadir más de una unidad del mismo producto
- El número de código postal debajo del botón de compra, DEBE abrir un formulario para que muestre al usuario la fecha tentativa de entrega
- Menú hamburguesa: Para tablet y móvil, crear un menú que se despliegue al hacer clic
- Animaciones suaves: Implementar efectos de transición en botones, cambios de cantidad, colores del producto y navegación

## **MVP**

El MVP de nuestro proyecto es la página de los earbuds con la información del producto.

## **Repositorio**

El enlace al repositorio es: [https://github.com/celiagarridoherrera/google_store_proyect.git](https://github.com/celiagarridoherrera/google_store_proyect.git)

### Contenido

- earbuds.html
- mobile.html
- tablet.html
- style.css
- README.md
- src
  - fonts
    - inter_variable_font.ttf
  - img
    - earbuds
      - earbuds.png
      - earbuds1.png
      - earbuds2.png
      - earbuds4.png
    - funda
      - funda pixel pro.png
      - funda1.png
      - funda2.png
      - funda3.png
    - icons
      - Arrow.svg
      - Avatar.svg
      - Cart.svg
      - Delivery.svg
      - Help.svg
      - menu.svg
      - Search.svg
      - SM-facebook.svg
      - SM-instagram.svg
      - SM-tiktok.svg
      - SM-x.svg
      - SM-youtube.svg
      - Spain.svg
    - mobile
      - mobile.png
      - mobile1.png
      - mobile2.png
      - mobile3.png
      - mobile4.png
    - reloj
      - reloj.jpeg
      - smartwatch black.png
      - smartwatch lila.png
      - smartwatch yellow.png
      - smartwatch.png
    - tablet
      - tablet.png
      - tablet1.png
      - tablet2.png
      - tablet3.png
    - google_logo.png
  - js
    - script.js
- docs
  - guidelines
    - 2024-12-01-naming-conventions.md
    - linkmap.png
  - research
    - 2024-12-01-documentation-standard.md
    - 2024-12-01-markdown-symbols.md
  - retrospectives
    - 2024-11-29-sprint-1-retro.md
  - test
    - 2024_12_06_gherkin_test

## **Sitemap**

Cada página de la web tiene una navbar y un footer que permite moverse por las páginas de los productos a través de enlaces internos (en lila) y acceder a la página principal de Google Store y otra información real a través de enlaces externos (en azul claro).

![Sitemap](/docs/guidelines/linkmap.png)
[Click aquí para ver la imagen en mayor tamaño](linkmap.png)

## **Retrospectivas**

- [Enlace al documento Retro 29/11/24: primer sprint proyecto Google-Store](/docs/retrospectives/2024_11_29_sprint_1_retro)

## **Test de Gherkin**

- [Enlace al documento del test de Gherkin](/docs/test/2024_12_06_gherkin_test)

## **Workflow**

![Sitemap](/docs/guidelines/linkmap.png)

- [Enlace al documento del test de Gherkin](/docs/test/2024_12_06_gherkin_test)
