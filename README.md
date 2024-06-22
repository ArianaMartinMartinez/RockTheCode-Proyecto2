# RockTheCode-Proyecto2

## Requisitos

¿Recuerdas el proyecto anterior dónde has creado una Landing Page para una “supuesta” tienda? Pues ha llegado el momento de mejorar este proyecto utilizando JavaScript en el DOM 🤘.

Busca un web de productos donde inspirarte, al igual que en proyecto anterior, la web PcComponentes es un buen lugar para ello.

Una vez tengas todo preparado, tendrás que hacer código de JavaScript que permita crear una página parecida pero con menor cantidad de objetos.

## Criterios JS

[X] El HTML de la web se genera de forma dinámica mediante los tag templates que se habrá definido en Javascript. Se permitirá tener de base dos secciones .filter y .products para introducir elementos dentro con Javascript para el DOM.

[X] Se recorrerá la lista de productos y se creará una carta de producto para cada elemento de forma dinámica por medio de for o de .forEach.

[X] Se mostrará un mensaje tipo "Productos no encontrados" con una sección debajo de "Productos sugeridos" donde se muestren productos aleatorios o en oferta que puedan llamar la atención cuando por causa de los filtros no haya productos que coincidan con lo solicitado.

[X] Se definirán al menos dos filtros para los productos en la parte izquidar del documento:

    [X] El primer filtro será un elemento [select] que muestra todos los **vendedores** (seller) distintos que hay en los productos del proyecto; y que al ser clickado, hará que el documento solamente muestre los elementos que tengan la propiedad seller con el mismo valor. Para esto, se definirán al menos 4 seller distintos en los productos del objeto **products**.

    [X] El segundo filtro será un input de tipo number acompañado de un botón que contenga el texto "Buscar". El usuario podrá introducir una cantidad de dinero en el filtro y pulsar buscar, esto hará que solo aparezcan en pantalla los elementos cuyo **precio** (price) sea menor que esta cantidad.

[X] Habrá un botón "Limpiar Filtros" que al ser pulsado, volverá a pintar en pantalla todos los productos, sin aplicar filtro ninguno.

## Criterios HTML y CSS

[] El código HTML está correctamente estructurado. Hay dos elementos section o article principales que representan los filtros de búsqueda (a la izquierda en escritorio, arriba del contenido en móvil), y los elementos a vender en la tienda (a la derecha en escritorio, abajo de los filtros en móvil).

[X] Los elementos a vender en la tienda comparten la misma clase de CSS, que define una carta de producto y tiene algún efecto :hover cuando pasa el ratón sobre ellas.

[] La web cuenta con media queries para escritorio y móvil. Así como una correcta estructura y posicionamiento de elementos por medio de flex o grid.

[X] Los productos tienen imágenes correctas que se ven en la carta de componente de cada uno.