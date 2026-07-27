# Expediente Oculto · Demo V2.3

Demo funcional de una PWA de investigación basada en casos reales documentados.

## Contenido de la demo

- 3 expedientes jugables de principio a fin.
- Sopa de letras táctil.
- Palabra ausente escrita manualmente.
- Letras sobrantes para descifrar responsable y ubicación.
- 4 códigos secretos por expediente.
- Deducción final mediante campos de texto.
- Historia completa y fuentes al resolver.
- Progreso guardado en el dispositivo.

## Corrección principal de V2.3

Se reparó el gestor de estado. Antes, el cálculo del porcentaje sustituía el objeto de progreso mientras los botones conservaban una referencia antigua; por eso la interfaz reaccionaba pero no guardaba ni desbloqueaba las fases. V2.3 mantiene una única referencia de progreso y verifica el flujo completo de los tres casos.

## Publicación en GitHub Pages

Sube todos los archivos a la raíz del repositorio. En GitHub, abre **Settings → Pages**, elige **Deploy from a branch**, selecciona `main` y `/(root)`.
