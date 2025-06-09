# Weather Forecast

This static website serves as an only purpouse to do API requests (in this case, Visual Crossing). 

Technologies used:
-i18n (translations)
-ChartJS (charts)
-API Visual Crossing
-React MUI (backbone of the website)
-Lighthouse (performance upgrades)

SRC structure:
-components: anything that couldn't be as big as a view is inside this folder.
-locales: anything related to i18n.jsx and translations is inside this folder.
-route: as this is related to Router DOM, I decided to create its solely folder to it, however, it serves as a component as well.
-views: anything that serves as pages is inside this folder.


Original Vite README.md:

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
