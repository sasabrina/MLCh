# Desafío técnico MeLi Deals Marketplace

El desafío consiste en maquetar la pantalla de Ofertas de Mercado Libre y hacerla funcionar, consumiendo los recursos proporcionados en un archivo .json.

## Stack de tecnologías

- **React** (Hooks, Context).
- **Sass** (Variables, Mixins).
- Material-UI

## Features

- Barra de búsqueda.

  - Filtra los productos por titulo y se muestran los resultados en la pantalla principal.

- Historial.
  - Se registra cada producto que el usuario visita y se muestran en una nueva pantalla.
  - A la pantalla de historial se accede desde el enlace que se encuentra en el header.
  - Se puede eliminar el historial completo, o de a un producto a la vez.

## Setup

El proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).  
Desde el directorio raíz se deben ejecutar los siguiente comandos:

1.  `yarn install` para instalar dependencias.
2.  `yarn start` para correr el proyecto en modo desarrollo.

Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador (`yarn start` lo abre automáticamente :raised_hands:).

## Observaciones

- Toda la información desplegada en la pantalla principal, en el header y en las tarjetas de productos se obtiene del archivo data.json.
- Los información de los productos carece de detalles claves como categorías o ID de atajos que facilitarían poder filtrarlos.
- La resolución de las imágenes es 90x90 y por eso se ven pixeladas.

---

### To do

- [x] Búsqueda de productos por titulo.
- [x] Historial de productos visitados.
- [ ] Favoritos.
- [ ] Tests y métricas.
