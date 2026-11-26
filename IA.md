# Registro de Uso de Inteligencia Artificial (`IA.md`)

* **Proyecto:** Explorador de Países
* **Estudiante:** Tobias Ramirez
* **Herramienta de IA utilizada:** Google Gemini
* **Stack técnico:** Ionic 9, Angular 21, TypeScript 5.9, arquitectura basada en `NgModules` (`standalone: false`).

---

## Etapa 1: Configuración base y navegación por pestañas

### Prompts principales
* Verificación de versiones del entorno local (Node.js, npm, Angular CLI, Ionic CLI) y compatibilidad con Angular 21.
* Configuración de `Zone.js` y `HttpClient` en la aplicación base.
* Creación de la estructura de navegación inferior (`ion-tabs`) con tres pestañas (`paises`, `regiones`, `comparar`) mediante carga perezosa (`loadChildren`).

### Partes generadas con ayuda de IA
* Configuración de `provideZoneChangeDetection()` en `src/main.ts` y verificación de `zone.js` en `angular.json`.
* Registro de `provideHttpClient()` en `src/app/app.module.ts`.
* Módulos, rutas e íconos (`earth-outline`, `map-outline`, `git-compare-outline`) en `tabs-routing.module.ts` y `tabs.page.html`.

### Problemas encontrados y cómo se resolvieron
* **Detección de cambios en Angular 21:** Al iniciar el proyecto, Angular 21 no incluye `Zone.js` activo por defecto; se habilitó manualmente mediante `polyfills` en `angular.json` y `provideZoneChangeDetection()` en `main.ts` para que las vistas se actualicen automáticamente al recibir datos.

---

## Etapa 2: Modelo de datos, JSON local, `PaisesService` y listado inicial

### Prompts principales
* Creación de la interfaz tipada `Pais` sin utilizar `any`.
* Generación de `src/assets/data/paises.json` con 30 países reales de las 5 regiones (incluyendo Paraguay y sus países vecinos) y descarga de sus banderas locales en `src/assets/banderas/`.
* Configuración de la ruta de datos en `environment.ts` y `environment.prod.ts`, y creación de `PaisesService` usando `HttpClient`.
* Enlace de `PaisesService` en `PaisesPage` dentro de `ngOnInit()` para mostrar la lista ordenada alfabéticamente.

### Partes generadas con ayuda de IA
* Script temporal en Node.js (`generar-datos.mjs`) utilizando únicamente módulos nativos (`node:fs`, `node:path`, `node:https`) para extraer y traducir al español 30 países del dataset abierto `mledoze/countries` y descargar sus imágenes `.png`.
* Implementación de `PaisesService` (`providedIn: 'root'`) devolviendo `Observable<Pais[]>`.
* Template HTML de `PaisesPage` con `ion-list`, `ion-item`, `ion-thumbnail`, `*ngIf` y `*ngFor`.

### Problemas encontrados y cómo se resolvieron
1. **Archivos sin guardar antes de ejecutar Node:** Al crear `pais.model.ts` y `generar-datos.mjs` en el editor, quedaron sin guardar en disco (`•` en la pestaña). Se guardaron ambos archivos con `Ctrl + S` y el script generó los 30 registros y las 30 banderas correctamente.
2. **Pantalla en negro en `/tabs/paises` (`Cannot read properties of null (reading 'nodeType')`):** Al probar la app en el navegador, `paises.page.html` había quedado vacío sin guardar. Se inspeccionó el error en la consola del navegador (`F12`), se verificó el contenido con `Get-Content` en PowerShell, se pegó el template con `<ion-header>` y `<ion-content>` y se guardó el archivo.

---

## Etapa 3: Buscador en tiempo real y pantalla de Detalle del país

### Prompts principales
* Implementación de un buscador en tiempo real por nombre de país o capital en `PaisesPage`.
* Creación de la pantalla de detalle `DetallePaisPage` con ruta dinámica `/detalle-pais/:codigo` y botón de regreso.

### Partes generadas con ayuda de IA
* Lógica de filtrado en `PaisesPage` manteniendo un arreglo original (`paises`) y uno filtrado (`paisesFiltrados`), enlazado con `ion-searchbar`, `[(ngModel)]` y `(ionInput)`.
* Método `obtenerPaisPorCodigo(codigo: string)` en `PaisesService` utilizando `pipe(map(...))` de RxJS.
* Módulo, enrutamiento, componente (`ActivatedRoute`) y vista con `ion-card`, `ion-back-button` y el pipe `number` para formatear el área en km².

### Problemas encontrados y cómo se resolvieron
* **Error de sintaxis en PowerShell al hacer commit:** Al ejecutar el commit del buscador, se pegó texto extra delante del comando `git commit`. Se verificó el estado del repositorio con `git status` y `git log`, y se ejecutó el commit limpio.

---

## Etapa 4: Pestaña Regiones *(en curso)*

### Prompts principales
* Filtrado de países por continente (`América`, `Europa`, `Asia`, `África`, `Oceanía`) mediante `ion-segment` en `RegionesPage`, reutilizando `PaisesService` y la navegación hacia `/detalle-pais/:codigo`.

### Partes generadas con ayuda de IA
* *(Completar al finalizar la Etapa 4)*

### Problemas encontrados y cómo se resolvieron
* *(Completar al finalizar la Etapa 4)*

---

## Etapa 5: Pestaña Comparar y cierre *(pendiente)*

### Prompts principales
* *(Completar al finalizar la Etapa 5)*

### Partes generadas con ayuda de IA
* *(Completar al finalizar la Etapa 5)*

### Problemas encontrados y cómo se resolvieron
* *(Completar al finalizar la Etapa 5)*