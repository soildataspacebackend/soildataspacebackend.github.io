/**
 * Esta clase es totalmente estúpida e innecesaria pero por algún motivo no todos los colores funcionan
 * en las tarjetas y modales de noticia y me esta volviendo loco. Por ejemplo, emerald-500 puede funcionar en el botón,
 * pero no en el borde y purple-400 puede servir para la animación del punto pero no para el botón.
 * Entonces se vana  dividir los colores de cada uno de los componentes y probar a mano las combinaciones
 * que funcionan y para eso hay que hacer esta clase. No quiero que esta clase exista pero me da un toc
 * insano que la página no se vea bonita así que aquí estamos.
 */
export interface NewsColorStyle {
    //--- Se usa para la carta ---
    borderGradientColor:string, // el que está en article
    categoryTextColor:string, // el texto de span
    categoryAnimationColor:string, // la animación de span
    titleTextColor:string, // titulo de la tarjeta
    buttonColor:string // button
    //--- Se usa para el modal ---
    titleTextColorModal:string, // titulo de la tarjeta en el modal
    categoryTextColorModal:string, // Por algun motivo la categoría funciona distinta en el modal que en la tarjeta pero el botón va bien en las 2 ???
    categoryAnimationColorModal:string
}
 