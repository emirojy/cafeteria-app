# 💄 Belleza Elegante - E-commerce App

Aplicación web de comercio electrónico enfocada en productos de belleza premium. Permite a los usuarios registrarse, iniciar sesión, agregar productos al carrito y simular un proceso de compra.

---

## 🚀 Características principales

* 🛍️ Catálogo de productos de belleza
* 👤 Registro e inicio de sesión de usuarios
* 🛒 Carrito de compras dinámico
* 💳 Simulación de pasarela de pago
* 🔒 Validación básica de formularios
* 📱 Diseño responsive moderno

---

## 🧩 Estructura del proyecto

```
/src/app
│
├── App.tsx                # Configuración principal y rutas
├── components/
│   ├── Home.tsx           # Página principal con productos
│   ├── Login.tsx          # Inicio de sesión
│   ├── Register.tsx       # Registro de usuario
│   ├── Checkout.tsx       # Carrito y pago
│
```

---

## ⚙️ Tecnologías utilizadas

* React
* TypeScript
* React Router DOM
* Tailwind CSS
* Lucide React (iconos)

---

## 🔐 Autenticación

La autenticación es manejada localmente usando estado (`useState`):

* Los usuarios se almacenan en memoria
* No hay backend ni persistencia (solo para fines demostrativos)

---

## 🛒 Funcionalidad del carrito

* Agregar productos
* Incrementar / disminuir cantidad
* Eliminar productos
* Cálculo automático del total

---

## 💳 Proceso de pago

* Validación básica de tarjeta:

  * Número (16 dígitos)
  * Nombre
  * Fecha de expiración
  * CVV
* Simulación de pago exitoso
* Limpieza automática del carrito tras la compra

---

## ▶️ Cómo ejecutar el proyecto

1. Clona el repositorio:

```bash
git clone <URL_DEL_REPO>
```

2. Instala dependencias:

```bash
npm install
```

3. Ejecuta el proyecto:

```bash
npm run dev
```

4. Abre en tu navegador:

```
http://localhost:5173
```

---

## ⚠️ Limitaciones

* No hay backend (datos no persisten)
* Seguridad básica (no apto para producción)
* No integración real con pasarelas de pago

---

## 📌 Mejoras futuras

* Integración con backend (Node.js / Firebase)
* Persistencia de usuarios y carrito
* Autenticación real (JWT / OAuth)
* Integración con Stripe o PayPal
* Historial de compras
* Filtros y búsqueda de productos

---

## 📄 Licencia

Este proyecto es de uso educativo.

---

## ✨ Autor

Desarrollado como proyecto de práctica en React + TypeScript.
