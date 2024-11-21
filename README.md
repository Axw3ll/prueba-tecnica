# Simpsons Quotes App

Este proyecto es una aplicación de React Native que muestra personajes de la serie _Los Simpson_ utilizando la API pública [The Simpsons Quote API](https://thesimpsonsquoteapi.glitch.me/quotes).

## 📝 Descripción

La aplicación permite a los usuarios visualizar citas de _Los Simpson_ con la imagen y el nombre del personaje correspondiente. Incluye la funcionalidad de cargar una nueva cita mediante un botón interactivo.

## 🚀 Características

- **Citas aleatorias**: Obtiene una cita aleatoria de la API.
- **Interfaz limpia y sencilla**: Muestra el personaje, la cita y la imagen en una tarjeta.
- **Indicador de carga**: Muestra un `ActivityIndicator` mientras se cargan los datos.
- **Gestión de estado con hooks**: Usa un hook personalizado para manejar la lógica de la API y el estado.

## 📋 Requisitos previos

Asegúrate de tener instalados los siguientes elementos:

- Node.js y npm (o Yarn)
- Expo CLI (si estás usando Expo)
- React Native CLI (si estás desarrollando en un entorno nativo)

## 📂 Estructura del proyecto

src/ ├── components/ │ └── Card.js # Componente para mostrar la cita en una tarjeta ├── hooks/ │ └── useSimpson.js # Hook personalizado para gestionar las citas ├── styles/ │ └── CardStyle.js # Estilos del componente Card └── App.js # Archivo principal de la aplicación

## 🛠️ Instalación y uso

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tuusuario/simpsons-quotes-app.git
   cd simpsons-quotes-app
    Instalar dependencias:
    Copiar código
    npm install
    Ejecutar la aplicación:
        Si usas Expo:
        Copiar código
        npx expo start
        Si usas React Native CLI:
        Copiar código
    npx react-native run-android # Para Android
    npx react-native run-ios     # Para iOS
   ```

## 🧑‍💻 Autor

    Axel Omar Arredondo Viera
