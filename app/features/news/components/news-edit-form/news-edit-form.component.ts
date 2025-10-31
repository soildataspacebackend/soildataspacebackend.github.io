import { Component, Input, OnInit } from '@angular/core';
import { NewsInterface } from '../../interfaces/news-interface';
import { NewsServiceService } from '../../services/news-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-news-edit-form',
  standalone: false,
  templateUrl: './news-edit-form.component.html',
  styleUrl: './news-edit-form.component.css'
})
export class NewsEditFormComponent implements OnInit {
  //ATRIBUTOS
  //--- Atributos de entrada ---
  @Input() newsItem!: NewsInterface;
  @Input() newsIndex!: number;
  isVisible!: boolean;
  newsForm!:FormGroup; //Objeto de formulario
  editedNews!:NewsInterface;  //Noticia editada
  errorMessage = "ERROR: No se pudo editar la noticia. Revisa los caracteres introducidos y el archivo.";
  errorActive!:boolean
  //--- Atributos de la imagen ---
  file!: File; 
  fileName: string | null = null; 
  fileType!: string; 

  //CONSTRUCTOR
  constructor(private fb: FormBuilder, private newsService:NewsServiceService) {}

  //MÉTODOS
  ngOnInit(): void {
    this.isVisible = false;
    this.errorActive = false;
    this.resetForm();
    
  }

  //-- Métodos privados
  /**
   * Resetea el formulario, poniendo los datos de la noticia que se quiere editar
   */
  private resetForm(){
    this.newsForm = this.fb.group({ //Por defecto toman los valores del newsItem del modal de donde cuelga 
      id: [this.newsItem.id, Validators.required],
      title: [this.newsItem.title, Validators.required],
      date: [this.newsItem.date, Validators.required],
      author: [this.newsItem.author, Validators.required],
      category: [this.newsItem.category, Validators.required],
      description: [this.newsItem.description, Validators.required],
      content: [this.newsItem.content, Validators.required],
      link: [this.newsItem.link],
      buttonText: [this.newsItem.buttonText ],
      image: [null]
    });
  }

  //--- Métodos visuales ---

  /**
   * Muestra el modal
   */
  showModal(){
    this.isVisible = true;
    document.body.style.overflow = 'hidden'; 
  }

  /**
   * Función que muestra el error cuando no se cumplen las validaciones
   */
  showError(){
    this.errorActive = true;
  }

  hideError(){
    this.errorActive = false;
  }

  /**
   * Esconde el modal y resetea el formulario*/
  closeModal(){
    this.isVisible = false;
    this.hideError();
    document.body.style.overflow = '';
    this.fileName = null;
    this.resetForm();
  }

  //--- Métodos del formulario

  /**
   * Se lanza cuando se añade un nuevo archivo, sirve para cambiar el texto
   * del botón de subir archivo y quede pero que bien bonito
   */
  onFileSelected(event: any): void {
    const file: File | null = event.target.files[0];
    if (file) {
      this.file = file;
      this.fileName = file.name;
      this.fileType = file.type;
    } else {
      this.fileName = null;
      this.fileType = "";
    }
  }

  /**
   * Llamada API que sube el formulario, es asíncrona, espera a que la llamada desde el servicio
   * se complete para cerrar el modal*/
  async onSubmit() : Promise<void> {
    //Si falla la validación del formulario propia o la del objeto newsform devuelve el error
    if (this.newsService.formValidation(this.newsForm,this.fileName,this.fileType) && !this.newsForm.invalid){
      this.newsService.editNews( await this.newsService.parseFormDataToNewsInterface(this.newsForm,this.file),this.newsIndex);
      this.closeModal()
    } else {
      this.showError();
    }
  }

}
