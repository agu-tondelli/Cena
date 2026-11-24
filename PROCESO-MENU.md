# Carga del menú mensual de Cena

Cada vez que llega el PDF del menú de L'Olivera (Paidos), se hace todo de una vez, a principio de mes:

1. **Transcribir el menú**: almuerzo y cena sugerida de cada día, para las 16 variantes (General, sin gluten, sin lactosa, vegano, etc.). Se carga en el bloque `=== MENÚS NUEVOS ===` (`EXTRA`).
2. **Recetas A, B y C** para cada cena sugerida que todavía no esté en `D`:
   - A: la del cole.
   - B: la misma "con 💫".
   - C: otra opción rápida que equilibre el mediodía.
   - Recetas sencillas, con la medida de cocina y los gramos entre paréntesis.
3. **Versión Thermomix (`TMX`)**: buscar en Cookidoo la receta que mejor encaje y guardar solo el nombre, el ID y los ingredientes en gramos. Los pasos se quedan en Cookidoo.
4. **Revisar las trampas** de cada receta (normal y Thermomix) y, si hay alguna, ponerle un aviso (`w` en `TMX`):
   - masa que hay que amasar o dejar levar → "Requiere amasado… o usá masa ya hecha";
   - remojos de la noche anterior (legumbre seca);
   - marinados o reposos largos;
   - más de 45 minutos un día de semana;
   - ingredientes difíciles de conseguir.
   La idea es que la familia decida antes de comprar, por ejemplo entre harina y levadura o una masa ya hecha.
5. **Probar** cada día con A, B, C y Thermomix, en todas las variantes y en las tres pestañas.
6. **Subir la versión**: incrementar `APPV` y `version.json`.
