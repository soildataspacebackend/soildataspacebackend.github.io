/**
 * Clase que representa cómo se trata una noticia internamente
 */
export interface NewsInterface {
    id: string, //Cuando se conecte con el backend, hay que tener el id de la noticia
    title:string,
    date:string,
    author:string,
    category:string,
    image:string, //La imagen es texto porque se envía en base64
    description:string,
    content:string,
    link:string,
    buttonText:string,
}
