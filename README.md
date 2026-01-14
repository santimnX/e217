App de Azar con Motor 3D (E217)

1. Descripción General

La aplicación E217 - Juegos de Azar es una plataforma móvil desarrollada con Expo y React Native que permite a los usuarios interactuar con elementos de juego mediante el movimiento físico del dispositivo. La funcionalidad principal consiste en un sistema de lanzamiento de dados impulsado por hardware, donde el usuario agita su teléfono para generar resultados aleatorios en un entorno tridimensional.

2. Implementaciones Técnicas Principales

A. Motor de Movimiento (Acelerómetro)

Se implementó un sistema de detección de movimiento mediante expo-sensors.

Lógica de "Shake": Se desarrolló un algoritmo que calcula la magnitud del vector de aceleración ($\sqrt{x^2 + y^2 + z^2}$) y lo compara con un umbral de fuerza (threshold) para evitar falsos positivos.

Sistema de Cooldown: Se implementó un bloqueo de 1 segundo entre lanzamientos para asegurar la estabilidad de la lógica del juego.

B. Renderizado 3D (React Three Fiber)

Se integró Three.js a través de @react-three/fiber/native para renderizar un dado interactivo.

Interconectividad: El dado no es solo visual; su rotación en los ejes X e Y responde en tiempo real a la inclinación del dispositivo mediante el hook useFrame.

Gráficos Nativo: Se configuró expo-gl como el puente para permitir gráficos de alto rendimiento en el entorno móvil.

C. Arquitectura Modular (Regla de 150 Líneas)

Para optimizar el rendimiento y cumplir con los requisitos académicos de limpieza de código, se realizó una refactorización profunda:

Separación de Estilos: Todos los StyleSheet fueron movidos a archivos .styles.ts.

Atomic Design: Se dividieron los componentes en Atoms (botones, visualizadores) y Molecules (el objeto 3D).

Hooks Personalizados: La lógica de sensores se extrajo de la UI para mantener los archivos de vista por debajo del límite estricto de 150 líneas de código.

3. Modificaciones Realizadas

Migración de 2D a 3D: Se reemplazó el visualizador de texto plano por un Canvas tridimensional.

Corrección de Entorno: Se resolvieron conflictos de dependencias en Project IDX mediante la instalación manual de expo-gl y expo-sensors.

Optimización de Memoria: Se implementó un sistema de limpieza (cleanup) en los listeners de los sensores para prevenir fugas de memoria (memory leaks).

4. Resultados Finales

Interfaz Fluida: Logramos una tasa de refresco constante en el dado 3D mientras el acelerómetro está activo.

Precisión: El generador de números aleatorios está sincronizado con la animación de "agitado", proporcionando una respuesta táctil y visual coherente.

Código Calificable: El 100% de los archivos del proyecto cumplen con la norma de brevedad (menos de 150 líneas), facilitando el mantenimiento y la escalabilidad futura para nuevos juegos de azar.

Desarrollado en Project IDX con React Native, Three.js y Expo.