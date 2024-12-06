
# Organización de Documentación en un Repositorio

No existe un estándar para organizar la documentación de apoyo en un repositorio, pero hay **prácticas recomendadas** que facilitan el trabajo en equipo, el mantenimiento y la búsqueda de información.

---

## **1. Posible estructura**

Crea carpetas separadas para cada tipo de documentación. Por ejemplo:

```plaintext
/docs
  /research           # Documentación de investigación
  /retrospectives     # Notas de retrospectivas
  /specifications     # Especificaciones técnicas
  /meeting-notes      # Resúmenes de reuniones
  /guidelines         # Guías internas (estilo, prácticas, etc.)
  README.md           # Índice o introducción a la documentación
```

---

## **2. Nombres claros

- Usa nombres de archivos y carpetas descriptivos, sin espacios. Ejemplo:

  ```plaintext
  retrospectives/
    2024-12-01-sprint-12-retro.md
    2024-11-25-sprint-11-retro.md
  ```

- Si hay documentos extensos, agrúpalos en subcarpetas:

  ```plaintext
  /specifications
    /api
      v1-spec.md
      v2-spec.md
    /database
      schema-overview.md
      migration-plan.md
  ```

---

## **3. Usa un archivo `README.md`**

En cada carpeta principal, incluye un `README.md` que explique el contenido. Ejemplo:

```markdown
# Retrospectives
Este directorio contiene las notas de retrospectivas del equipo. 
Cada archivo sigue el formato `YYYY-MM-DD-sprint-X-retro.md`.

## Contenido
- `2024-12-01-sprint-12-retro.md`: Retrospectiva del Sprint 12.
- `2024-11-25-sprint-11-retro.md`: Retrospectiva del Sprint 11.
```

---

## **4. Control de versiones**

- Usa el control de versiones del repositorio (Git) para rastrear cambios en los documentos.
- Asegúrate de incluir documentación relevante en los _pull requests_ si afecta el desarrollo o decisiones técnicas.

---

## **5. Estandariza formatos**

Define un formato claro para cada tipo de documentación:

### Retrospectivas

```markdown
# Retrospectiva Sprint 12
Fecha: 2024-12-01

## Keep
- Comunicación efectiva en el equipo.

## Improve
- Reducir interrupciones durante las reuniones.

## Action Items
1. Implementar una política de silencio en reuniones importantes.
```

### Especificaciones técnicas

```markdown
# API Specification v1
## Endpoints
- GET /users: Obtiene una lista de usuarios.
- POST /users: Crea un nuevo usuario.

## Data Models
- User:
  - id (integer)
  - name (string)
```

---

## **6. Herramientas específicas**

- Para documentar: Obsidian, Colab...
- Almacena documentación extensa en herramientas como **Confluence**, **Notion** o **SharePoint**, pero vincúlala desde el repositorio.
- Para esquemas o diagramas técnicos, usa archivos como `.drawio` o PDF generados desde herramientas como **Lucidchart** o **PlantUML**.

---

## **7. Ejemplo de repositorio completo**

```plaintext
/docs
  /research
    2024-11-30-user-survey-results.md
    2024-10-15-competitor-analysis.md
  /retrospectives
    2024-12-01-sprint-12-retro.md
    README.md
  /specifications
    api-spec-v1.md
    database-schema.md
  /guidelines
    code-style-guide.md
    branching-strategy.md
README.md
LICENSE
```

## Fuentes

<details> 
	<summary>Haz clic para ver fuentes</summary> 
	<li><italic>ChatGPT. Pendiente de revisar.</italic></li>
</details>
