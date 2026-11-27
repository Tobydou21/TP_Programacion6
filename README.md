# Explorador de Países

Aplicación móvil híbrida desarrollada con **Ionic 9** y **Angular 21** para explorar información geográfica, demográfica básica y cultural de 194 países de los cinco continentes, con funcionamiento 100 % offline.

* **Estudiante:** Tobias Ramirez
* **Asignatura:** Programación VI — Ingeniería Informática (Universidad del Norte)
* **Repositorio:** [https://github.com/Tobydou21/TP_Programacion6](https://github.com/Tobydou21/TP_Programacion6)

---

## Funcionalidades principales

1. **Países (`/tabs/paises`):**
   * Listado ordenado alfabéticamente de 194 países con su bandera, nombre y capital.
   * Buscador en tiempo real por nombre de país o capital, insensible a mayúsculas y tildes.
   * Indicador de carga (`ion-spinner`) y manejo de error con botón **Reintentar**.
2. **Detalle del país (`/detalle-pais/:codigo`):**
   * Ficha individual con bandera completa, código ISO, capital, región, subregión, área formateada en km², idiomas oficiales y moneda.
   * Navegación de regreso mediante `ion-back-button`.
3. **Regiones (`/tabs/regiones`):**
   * Selector horizontal (`ion-segment`) por continente: **América (35)**, **Europa (45)**, **Asia (46)**, **África (54)** y **Oceanía (14)**.
   * Contador dinámico de países por región y acceso directo al detalle de cada país.
4. **Comparar (`/tabs/comparar`):**
   * Selección de dos países mediante `ion-select` para comparar lado a lado bandera, capital, región, subregión, superficie en km², idiomas y moneda.
   * Validación que avisa cuando se selecciona el mismo país en ambos campos.

---

## Fuente de datos

Los datos y banderas locales se generaron a partir del repositorio abierto **[mledoze/countries](https://github.com/mledoze/countries)** y se almacenan localmente en el proyecto para funcionar sin conexión a internet:

* **Datos estructurados:** `src/assets/data/paises.json` (194 países reales de América, Europa, Asia, África y Oceanía, incluyendo Paraguay y sus países vecinos).
* **Banderas:** `src/assets/banderas/*.png` (194 imágenes locales en formato PNG).

---

## Tecnologías y arquitectura

* **Ionic Framework 9** (`@ionic/angular/lazy`)
* **Angular 21** con arquitectura modular tradicional (`NgModules`, `standalone: false`) y `Zone.js`
* **TypeScript 5.9** con tipado estricto (`interface Pais` en `src/app/models/pais.model.ts`)
* **RxJS / HttpClient** centralizado en `PaisesService` (`src/app/services/paises.service.ts`)

---

## Instalación y ejecución

1. Clonar el repositorio e ingresar a la carpeta del proyecto:
   ```bash
   git clone [https://github.com/Tobydou21/TP_Programacion6.git](https://github.com/Tobydou21/TP_Programacion6.git)
   cd TP_Programacion6