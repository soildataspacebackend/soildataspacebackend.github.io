import { Injectable, signal } from '@angular/core';
import { NewsInterface } from '../interfaces/news-interface';
import { ApiServiceService } from '../../../core/services/api-service.service';
import { LoginService } from '../../../core/auth/services/login.service';
import { FormGroup } from '@angular/forms';
import { pipe,map,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Se llama Service Service, se que es muy estupido pero bueno
export class NewsServiceService {
  //ATRIBUTOS
  defaultNewsImage = "assets/hero.png"; //Imagen por defecto 
  defaultButtonText = "Visitar"; //Texto del botón por defecto
  newsColorList = [
      "sky", 
      "slate", 
      "blue",   
      "rose", 
      "lime",    
      "orange"
  ]; 
  newsColorStyleList = [
      {
        borderGradientColor:"emerald-500",
        categoryTextColor:"emerald-700",
        categoryAnimationColor:"emerald-500",
        titleTextColor:"emerald-500",
        buttonColor:"emerald-500",
        titleTextColorModal:"emerald-700", 
        categoryTextColorModal:"emerald-600",
        categoryAnimationColorModal:"emerald-500"
      },
      {
        borderGradientColor:"purple-500",
        categoryTextColor:"purple-600",
        categoryAnimationColor:"purple-600",
        titleTextColor:"purple-500",
        buttonColor:"purple-600",
        titleTextColorModal:"purple-600", 
        categoryTextColorModal:"purple-600",
        categoryAnimationColorModal:"purple-600"
      },
      {
        borderGradientColor:"blue-500",
        categoryTextColor:"blue-700",
        categoryAnimationColor:"blue-600",
        titleTextColor:"blue-500",
        buttonColor:"blue-600",
        titleTextColorModal:"blue-700", 
        categoryTextColorModal:"blue-600",
        categoryAnimationColorModal:"blue-600"
      }
  ]; //Lista de estilos colores para el carrusel y el modal que sé que funcionan
  newsList : NewsInterface[] = []; //Lista de noticias, son de tipo newsInterface

  //--- señales ---
  //private newsListChangedSignal = signal(0); //Señal que se activa cuando se añade 
  //public newsListChanged = this.newsListChangedSignal.asReadonly(); //forma

  //CONSTRUCTOR
  constructor(private apiService: ApiServiceService, private loginService: LoginService) { }

  //MÉTODOS

  /**
   * Conversor de imagen a base64
   * recibe una imagen y devuelve un texto con la imagen codificada en base64
   */
  async base64Convert(img:File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        // Cuando la lectura termina correctamente, reader.result contiene un DataURL (string).
        reader.onload = () => resolve(reader.result);
        // En caso de error, rechazar
        reader.onerror = reject;
        // Convertir fichero a Base64
        reader.readAsDataURL(img);
    });
  }

  /**
   * Conversor de formdata a NewsInterface
   * Función que obtiene los valores de un formulario de noticia, los transforma
   * a NewsInterface y los devuelve, justo para poder añadirla como body a un post.
   * Pasa como argumentos el formulario de noticia y el archivo a añadir
   */
  async parseFormDataToNewsInterface(newsForm:FormGroup, file:File) : Promise<NewsInterface> {
    const formValue = newsForm.value;
    //--- Si la imagen no es nula, la convierte a base64 ---
    let base64Image = '';
    if (formValue.image != null) {
      base64Image = await this.base64Convert(file) as string;
    }
    const newNews: NewsInterface = {
      id: formValue.id,
      title: formValue.title,
      date: formValue.date,
      author: formValue.author,
      category: formValue.category,
      image: base64Image,
      description: formValue.description,
      content: formValue.content,
      link: formValue.link,
      buttonText: formValue.buttonText
      }
    return newNews;
  }

  //--- Llamadas API ---
  /**
   * Hace una llamada a la api con un get para consguir la lista de noticias en formato any (JSON)
   * Las parsea a NewsInterface, las añade al y lo devuelve
   */
  getAllNews(): NewsInterface[]{
    this.newsList = []; //vacía la lista antes de cargarla
    this.apiService.httpGet<any>(`/news/public/all`).subscribe(data => {
      //console.log(data);
      for (let news of data.news) {
        let newNews : NewsInterface = news;
        this.newsList.unshift(newNews);
      }
    });
    return this.newsList;
  }

  /**
   * Hace una llmada a la api con un POST para enviar la info de la noticia parseada a JSON
   * Primero crea el body y el header del psot del post, y se lo pasa como argumento al httpclient
   */
  createNews(news:NewsInterface) {
    const body = {
        title: news.title,
        date: news.date,
        author: news.author,
        category: news.category,
        image: news.image,
        description: news.description,
        content: news.content,
        link: news.link,
        buttonText: news.buttonText
      }

    this.apiService.httpPost<any>(`/news/marketing/news`,body).subscribe(
      data => {
        if(data.status=200){
          window.location.reload(); //Recargar página si la respuesta es correcta
        }
      }
    );

    
  }

  /**
   * Hace una llamada a la api para hacer un delete
   * utiliza el indice de la lista local de noticias para obtener el id de la noticia que se quiere
   * borrar y luego la borra
   */
  deleteNews(index:number){
    const newsId = this.newsList.at(index)?.id as string;
  
    this.apiService.httpDelete<any>(`/news/marketing/news/`+newsId).subscribe(
      data => {
        if(data.status=200){
          window.location.reload(); //Recargar página si la respuesta es correcta
        }
      }
    );
  }

  /**
   * Hace una llamada a la api para editar la noticia seleccionada
   * utiliza el indice de la lista local de noticias para obtener el id de la noticia que se quiere editar
   * el cuerpo contiene los mismos campos que crear una noticia, salvo que estos no son obligatorios
   */
  editNews(newsEdit:NewsInterface, index:number) {
    const newsId = this.newsList.at(index)?.id as string;

    const body = {
        id: newsId,
        title: newsEdit.title,
        date: newsEdit.date,
        author: newsEdit.author,
        category: newsEdit.category,
        image: newsEdit.image,
        description: newsEdit.description,
        content: newsEdit.content,
        link: newsEdit.link,
        buttonText: newsEdit.buttonText
      }

    this.apiService.httpPut<any>(`/news/marketing/news/`+newsId,body).subscribe(
      data => {
        if(data.status=200){
          window.location.reload(); //Recargar página si la respuesta es correcta
        }
      }
    );
  }

  //--- Seguridad ---

  /**
   * Comprobaciones de imagen, recibe como parámetro el tipo de la imagen
   * Si la imagen es del tipo correcto, devuelve true
  */
  imageValidation(fileType:string){
      const correctFileTypes = ['image/jpeg', 'image/png'];

      if (!correctFileTypes.includes(fileType)) return false

      return true
  }

  /**
   * Comprobaciones de texto
   * Si el texto no contiene caracteres problemáticos, devuelve true
   */
  textValidation(text:string){
    // Expresiones regulares de url
    const urlRegex = /(?:https?:\/\/|ftps?:\/\/|www\.|[a-z0-9-]+\.[a-z]{2,})(?:\S*)/gi;

    // Caracteres y palabras reservadas para HTML y JS
    const keyCharacters = /[<>&\//]/g; 
    const keyWords = /(<script|javascript:|eval\(|onload=|onerror=|onmouseover=|document\.|window\.|alert\(|prompt\(|confirm\()/i;

    // Saltos de línea
    const lineBreaks = /[\n\r\t]/g;

    // Limpiar texto de saltos de línea
    var cleanText = text.replace(lineBreaks, '');

    // Limpiar texto de expresiones de url
    cleanText = cleanText.replace(urlRegex, '');

    // Devuelve true si son inseguras para palabras y caracteres
    const insecureCharacters = keyCharacters.test(cleanText);
    const insecureWords = keyWords.test(cleanText);
    
    return !insecureCharacters && !insecureWords;
  }


  /**
   * Ejecuta las validaciones de archivo y de contenido del formulario
   * Si la imagen está vacía, no hace las comprobaciones (usa la iamgen por defecto)
   */
  formValidation(newsForm: FormGroup, fileName: string | null, fileType: string) : boolean {
    //Validación de texto
    const formValue = newsForm.value; //Pilla de los valores del formulario
    for (const [key, value] of Object.entries(formValue)){
      if (key!='date'&&key!='image'&&value!=null){
        if (!this.textValidation(value as string)){
          return false; //Si alguno del texto no cumple, devuelve false
        }
      }
     }
    if (fileName!=null){
       if (!this.imageValidation(fileType)) return false; //Si no cumple la validación de iamgen, da false
    }
    return true;
  }
    

}
