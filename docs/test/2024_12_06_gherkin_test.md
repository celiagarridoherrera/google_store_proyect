# Feature/Cambiar color

## Escenario 1: Cambio de valor
### Given
La barra de selección de color tiene seleccionado el color por defecto o color seleccionado previamente por el usuario 
### When
La persona usuaria hace click en otro color
### Then
El color seleccionado se actualiza al nuevo color elegido.
### And
Se cumple una de las dos condiciones para desbloquear el botón de compra

## Escenario 2: No se quiere el valor por defecto
### Given
Se ha recogido NO en el mensaje "El color ... está seleccionado ¿Desea confirmar?" del escenario 2 de la feature/Añadir al carrito
### When
La persona usuaria elige otro número en el selector
### Then
El precio de la ficha de compra se actualiza
### And
Se cumple una de las dos condiciones para desbloquear el botón de compra
# Feature/Seleccionar unidades
## Escenario 1: Con valor 0
### Given
El selector de cantidades está a cero por defecto o por elección de la persona usuaria
### When
La persona usuaria elige un número en el selector
### Then
El precio de la ficha de compra se actualiza
### And
Se cumple una de las dos condiciones para desbloquear el botón de compra

## Escenario 2: Con otro valor
### Given
El selector de cantidades no está a cero tras la elección de la persona usuaria
### When
La persona usuaria elige otro número en el selector
### Then
El precio de la ficha de compra se actualiza
### And
Se cumple una de las dos condiciones para desbloquear el botón de compra

# Feature/Añadir al carrito
## Escenario 1:  Se cumplen condiciones
### Given
La persona usuaria ha elegido el color y la cantidad de unidades que desea comprar
### When
La persona usuaria hace click en el botón de añadir a la cesta
### Then
Se lanza un mensaje de "Ha elegido..."
### And
Se suma al icono de la cesta el número de productos

## Escenario 2:  No se ha elegido color
### Given
La persona usuaria no ha elegido ningún color y se mantiene el de por defecto
### When
La persona usuaria hace click en el botón de añadir a la cesta
### Then
Se lanza un mensaje de "El color ... está seleccionado ¿Desea confirmar?" 
### And
Se recoge la respuesta
## Escenario 3:  El contador está a cero
### Given
El contador de la ficha de compra está a cero
### When
La persona usuaria hace click en el botón de añadir a la cesta
### Then
Se lanza un mensaje de "Elija la cantidad en el selector"

## Escenario 4:  Mensaje de cambio de página
### Given
La persona usuaria ha elegido "SI" en el mensaje de "No ha añadido a la cesta los productos ¿Desea hacerlo?" del escenario 2 de la feature/Cambiar de página
### When
La persona usuaria hace click en el botón de añadir a la cesta
### Then
Se lanza un mensaje de "Ha elegido..."
### And
Se suma al icono de la cesta el número de productos
# Feature/Cambiar de página
## Escenario 1: Sin condiciones de compra
### Given
No se ha elegido el color o la cantidad de unidades del producto
### When
La persona usuaria hace click en un enlace
### Then
Se sigue el enlace

## Escenario 2: Se cumplen condiciones de compra
### Given
La persona usuaria ha elegido el color y la cantidad de unidades del producto
### When
La persona usuaria hace click en un enlace
### Then
Se lanza un mensaje de "No ha añadido a la cesta los productos ¿Desea hacerlo?"
## And
Se recoge la respuesta
### And
Se sigue el enlace