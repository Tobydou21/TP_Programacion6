# Registro de Uso de Inteligencia Artificial (`IA.md`)

* **Proyecto:** Explorador de Países
* **Estudiante:** Tobias Ramirez
* **Herramientas de IA utilizadas:** Claude y Google Gemini
* **Stack técnico:** Ionic 9, Angular 21, TypeScript 5.9, arquitectura basada en `NgModules` (`standalone: false`).

---

## Roles de cada herramienta de IA
* **Claude:** Estructura base inicial del proyecto, diseño del comparador de países, revisiones de código y calidad (estados de carga/error con botón de reintento, búsqueda insensible a tildes, validación de países distintos en Comparar y ajustes visuales de banderas).
* **Google Gemini:** Configuración de `Zone.js` y `HttpClient` en Angular 21, generación del dataset local `paises.json` y banderas desde `mledoze/countries`, implementación paso a paso de servicios/rutas/páginas, depuración en PowerShell y redacción de documentación.

---

## Etapa 1: Configuración base y navegación por pestañas

### Prompts principales
* Definición de la estructura base del proyecto con `NgModules` (`standalone: false`) y tres pestañas (`paises`, `regiones`, `comparar`) mediante `loadChildren`.
* Verificación de versiones del entorno local (Node.js, npm, Angular CLI, Ionic CLI) y compatibilidad con Angular 21.

### Partes generadas con ayuda de IA
* Configuración de `Zone.js` en `angular.json` y `provideZoneChangeDetection()` en `src/main.ts`.
* Registro de `provideHttpClient()` en `src/app/app.module.ts`.
* Rutas e íconos (`earth-outline`, `map-outline`, `git-compare-outline`) en `tabs-routing.module.ts` y `tabs.page.html`.

### Problemas encontrados y cómo se resolvieron
* **Detección de cambios en Angular 21:** Angular 21 no incluye `Zone.js` activo por defecto; se habilitó manualmente para garantizar la actualización automática de las vistas.

---

## Etapa 2: Modelo de datos, JSON local, `PaisesService` y listado inicial

### Prompts principales
* Creación de la interfaz tipada `Pais` sin utilizar `any`.
* Generación de `src/assets/data/paises.json` con 30 países reales (posteriormente ampliado a 194) de las 5 regiones y sus banderas locales en `src/assets/banderas/`.
* Configuración de `environments` y creación de `PaisesService` con `HttpClient`.

### Partes generadas con ayuda de IA
* Script en Node.js para extraer y traducir al español 30 países de `mledoze/countries` y descargar sus imágenes `.png`.
* Implementación de `PaisesService` (`providedIn: 'root'`) devolviendo `Observable<Pais[]>`, y enlace en `PaisesPage` dentro de `ngOnInit()`.

### Problemas encontrados y cómo se resolvieron
* **Archivos sin guardar en VS Code:** Al editar `paises.page.html` y `generar-datos.mjs`, quedaron sin guardar antes de compilar/ejecutar, generando pantalla en negro (`Cannot read properties of null (reading 'nodeType')`). Se resolvió guardando con `Ctrl + K, S`.

---

## Etapa 3: Buscador, detalle de país y mejoras de revisión

### Prompts principales
* Implementación de buscador en tiempo real por país o capital en `PaisesPage` y pantalla `DetallePaisPage` en `/detalle-pais/:codigo`.
* Revisión de calidad: indicador de carga (`ion-spinner`) y error con botón **Reintentar**, búsqueda sin tildes, traducción completa de capitales e idiomas en `paises.json` y ajuste `object-fit: contain` en banderas.

### Partes generadas con ayuda de IA
* Método `obtenerPaisPorCodigo` en `PaisesService` con `pipe(map(...))` y vista `DetallePaisPage` con `ActivatedRoute`, `ion-back-button`, pipe `number` y manejo de estados `cargando` y `error`.
* Función `normalizar(texto)` con `normalize('NFD').replace(/[\u0300-\u036f]/g, '')` en `PaisesPage`.
* Script Node.js con escapes Unicode para corregir en UTF-8 las capitales (`París`, `Berlín`, `Roma`, `Lisboa`) y los idiomas de Noruega, Sudáfrica, Nueva Zelanda y Argentina (`["Español", "Guaraní"]`).

### Decisiones y problemas resueltos
* **Caracteres especiales en PowerShell:** Al pasar texto con tubería a Node en Windows, `Māori` se corrompía a `?`; se reemplazó por escapes Unicode (`\u0101`, `\u00ed`, etc.).
* **Reglas de `npm run lint`:** El linter sugiere sintaxis moderna (`@for`, `@if`, `inject()`), pero se mantienen `*ngFor`, `*ngIf` e inyección por constructor según lo pedido por la consigna; `npm run build` compila limpio.

---

## Etapa 4: Pestaña Regiones

### Prompts principales
* Filtrado de países por continente (`América`, `Europa`, `Asia`, `África`, `Oceanía`) mediante `ion-segment` desplazable, contador con `ion-badge` y navegación al detalle mediante `[routerLink]`.

### Partes generadas con ayuda de IA
* Lógica de filtrado por región y estados `cargando` / `error` en `RegionesPage`.
* Template con `ion-segment`, `ion-badge` y `[routerLink]="['/detalle-pais', pais.codigo]"`, más la importación de `RouterModule` en `RegionesPageModule`.

### Problemas encontrados y cómo se resolvieron
* **Archivos pendientes de guardado antes del commit:** En un primer intento de commit, los cambios de `src/app/pages/regiones/` no estaban guardados en VS Code y quedaron fuera del repositorio remoto; se guardaron todos los archivos con `Ctrl + K, S` y se subieron en un commit dedicado.

---

## Etapa 5: Pestaña Comparar y documentación

### Prompts principales
* Implementación del comparador lado a lado de dos países en `CompararPage` con selectores `ion-select`, comparación de datos y cálculo de diferencia de superficie.
* Validación para evitar comparar un país consigo mismo y redacción de `README.md`.

### Partes generadas con ayuda de IA
* Vista comparativa en `CompararPage` con selectores vinculados por `ngModel`, validación `codigoPais1 === codigoPais2` mostrando `"Elegí dos países diferentes."` y tarjetas comparativas.
* Documentación completa del proyecto en `README.md`.

### Problemas encontrados y cómo se resolvieron
* **Selección duplicada en Comparar:** Si el usuario elegía el mismo país en ambos selectores, se mostraba una comparación redundante; se añadió una validación con `*ngIf` para mostrar un aviso claro hasta que elija dos países distintos.   


---

## Etapa 6: Expansión a 194 países y correcciones finales

### Prompts principales
* Ampliación del dataset de 30 a 194 países reales utilizando el repositorio `mledoze/countries`, con nombres, capitales, regiones, idiomas y monedas traducidos al español.
* Descarga automatizada de 194 banderas en formato PNG desde `flagcdn.com` a `src/assets/banderas/`.
* Corrección del encabezado de región en `RegionesPage` que no se actualizaba al cambiar de continente (problema de `ion-segment` con lazy proxy y `OnPush`).
* Correcciones de calidad: validación de mismo país en Comparar, spinner/error/reintento en Detalle, `object-fit: contain` en banderas de Países, y corrección de datos erróneos (Zimbabue, Ciudad del Vaticano, Eslovenia, Guinea-Bisáu).

### Partes generadas con ayuda de IA
* Script Node.js (`build_paises.mjs`) para extraer, traducir y generar `paises.json` con 194 países desde `mledoze/countries`.
* Script Node.js (`download_flags.mjs`) para descargar y validar las 194 banderas PNG.
* Fix de `RegionesPage` usando `NgZone.run()`, `ChangeDetectorRef.markForCheck()` y `detectChanges()` para forzar la actualización del encabezado.
* Validación `codigoPais1 !== codigoPais2` en `comparar.page.html` con mensaje "Elegí dos países diferentes."
* Refactor de `DetallePaisPage` con método `cargarPais()`, propiedad `error`, spinner de carga y botón de reintento.
* Reescritura completa de `README.md` con secciones de instalación, componentes y capturas.

### Problemas encontrados y cómo se resolvieron
* **Encabezado "América" congelado en Regiones:** El lazy proxy de `ion-segment` de Ionic 9 usa `ChangeDetectionStrategy.OnPush` internamente y dispara `ionChange` fuera de la zona de Angular. Se resolvió con `NgZone.run()` + `ChangeDetectorRef.markForCheck()` + `detectChanges()` y un `setTimeout` para un segundo ciclo de detección.
* **Datos incorrectos en `paises.json`:** La moneda de Zimbabue aparecía como "Pula botsuano" (moneda de Botsuana); se corrigió a "ZiG (oro de Zimbabue)". El área de Ciudad del Vaticano era 0 en vez de 0.44 km². Las capitales de Eslovenia y Guinea-Bisáu no estaban en español.
