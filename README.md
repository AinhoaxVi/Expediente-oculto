# Expediente Oculto · Demo V2.2

Demo técnica y jugable de **Expediente Oculto**. No es la aplicación final de 80 casos.

## Incluye

- 3 expedientes históricos reales documentados.
- Sopas de letras táctiles.
- Una palabra ausente que el jugador debe escribir.
- Letras sobrantes que el jugador debe leer, descifrar y escribir.
- 4 códigos secretos por expediente.
- Pistas documentales progresivas en lugar de preguntas tipo test.
- Conclusión final con respuestas de texto libre.
- Historias iniciales y finales ampliadas.
- Progreso, puntuación, modo papel y funcionamiento sin conexión.

## Publicar en GitHub Pages

1. Sube todos los archivos y carpetas a la raíz del repositorio.
2. En GitHub, abre **Settings → Pages**.
3. Selecciona **Deploy from a branch**, rama `main` y carpeta `/(root)`.
4. Guarda y espera a que GitHub muestre la dirección publicada.

Para una subida rápida desde móvil también se incluye una versión autónoma en un solo `index.html`, aunque la carpeta completa es la recomendada para instalación PWA.

## Fuentes

Cada expediente contiene enlaces a fuentes institucionales o museísticas verificables. Los casos distinguen hechos documentados, resoluciones judiciales y controversias posteriores.


## Corrección V2.2
- La fase 2 acepta variantes y pequeños errores al escribir el arma.
- Al acertar, desplaza automáticamente a la fase 3.
- Añade confirmación visible y permite validar con Enter.


## Corrección V2.2

- La fase 3 siempre aparece en pantalla: bloqueada antes de resolver el arma y jugable después.
- El expediente se vuelve a renderizar antes de actualizar el resto de pantallas.
- Al desbloquear una fase, la app se desplaza hasta ella y la resalta.
- El service worker usa navegación con red primero para evitar versiones antiguas atrapadas en caché.
