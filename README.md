
```markdown
# 📱 AppSeleccionEcuador - La Tri v1.0

**Asignatura:** Desarrollo de Aplicaciones para Dispositivos Móviles  
**Estudiante:** Nando Martínez  
**Institución:** Universidad Central del Ecuador  
**Fecha:** Junio 2026  

---

## 📝 Resumen del Proyecto
Este repositorio contiene el código fuente y la documentación técnica de una aplicación móvil básica desarrollada en **React Native con Expo Go (SDK 54)**. La aplicación simula el comportamiento de una **Splash Screen (Pantalla de bienvenida)** con carga de recursos locales y realiza una transición automática y reactiva hacia una **Home Screen (Pantalla de inicio)** informativa sobre la Selección Ecuatoriana de Fútbol.

---

## 🛠️ Requisitos del Entorno Utilizados
* **Node.js:** `v25.8.0`
* **npm:** `11.11.0`
* **Expo SDK:** `54.0.0`
* **Plataforma de pruebas:** Dispositivo móvil físico con la app **Expo Go (v54.0.8)**

---

## 🚀 Proceso de Instalación y Despliegue Local

Si deseas clonar y ejecutar este proyecto en tu entorno local, sigue estos pasos desde tu terminal:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/Wmartinez1203/AppSeleccionEcuador.git](https://github.com/Wmartinez1203/AppSeleccionEcuador.git)
cd AppSeleccionEcuador

```

### 2. Instalar las dependencias de Node

```bash
npm install

```

### 3. Iniciar el servidor de desarrollo (Metro Bundler)

```bash
npm start

```

*Escanea el código QR generado en la consola utilizando la aplicación **Expo Go** en tu dispositivo móvil (asegúrate de que ambos dispositivos compartan la misma red Wi-Fi).*

---

## 📂 Estructura del Proyecto

La arquitectura interna de la aplicación está organizada de la siguiente manera para garantizar su portabilidad y orden:

```text
AppSeleccionEcuador/
├── .expo/                # Archivos de caché y configuración temporal de Expo
├── assets/               # Recursos estáticos locales de la app
│   └── LogoEcuador.png   # Escudo oficial de la selección (utilizado en la Splash)
├── node_modules/         # Dependencias físicas instaladas por npm
├── App.js                # Archivo raíz con la lógica reactiva y estilos de la app
├── app.json              # Configuración global del manifiesto de Expo
└── package.json          # Gestión de scripts de arranque y versiones de librerías

```

---

## 💻 Características Técnicas Destacadas

### Lógica de Navegación Temporal (Splash to Home)

Al no utilizar librerías externas de enrutamiento pesado en este prototipo, el flujo se controló mediante la combinación de Hooks nativos de React en `App.js`:

1. **Estado Incial (`useState`):** Se definió el estado booleano `mostrarSplash` inicializado en `true`.
2. **Efecto de Tiempo (`useEffect`):** Se configuró un temporizador asíncrono `setTimeout` de 3000ms (3 segundos) para suspender el renderizado principal, simulando una carga de base de datos o assets. Tras este lapso, el estado muta a `false` desmontando la Splash Screen.

### Diseño Interactivo y Responsivo

* **Imágenes Locales:** El logotipo principal se consume localmente desde la carpeta de recursos mediante la instrucción nativa `require('./assets/LogoEcuador.png')`, previniendo errores por enlaces web caídos.
* **Interfaz Anti-Desbordamiento:** La pantalla de inicio está envuelta en un componente `<ScrollView>`, garantizando que toda la información histórica e institucional sea legible e interactiva en cualquier tamaño de pantalla.
* **Paleta de Colores Corporativa:** Estilos personalizados que replican los colores oficiales de la federación (`#002447` para el azul marino institucional y `#FFCC00` para el amarillo oro).

---