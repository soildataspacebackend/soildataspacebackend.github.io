import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NewsInterface } from '../../interfaces/news-interface';
import { NewsServiceService } from '../../services/news-service.service';
import { NewsColorStyle } from '../../interfaces/news-color-style';
import { SafeUrl } from '@angular/platform-browser';
import { LoginService } from '../../../../core/auth/services/login.service';
import { NewsEditFormComponent } from '../news-edit-form/news-edit-form.component';

@Component({
    selector: 'app-news-modal',
    templateUrl: './news-modal.component.html',
    styleUrl: './news-modal.component.css',
    standalone: false,
})

export class NewsModalComponent implements OnInit{
  //ATRIBUTOS
  //--- Atributos que vienen del componente padre ---
  @Input() newsItem!: NewsInterface;
  @Input() newsIndex!: number;
  @Input() newsColorStyle!: NewsColorStyle;
  @Input() finalImage!: SafeUrl | string;
  @Input() finalButtonText!: string;

  @Input() isVisible!:boolean;
  isDeleteNewsVisible!: boolean;

  //--- Que no se vea la imagen en movil landscape ---
  private mediaQueryList!: MediaQueryList;
  isInMobileLandscape!: boolean; //Variable estúpida que serive para decir si la página se está viendo en movil, en específico en modo landscape. Cuando es true se oculta la imagen para que se pueda leer el texto.

  @ViewChild(NewsEditFormComponent) newsEditForm!: NewsEditFormComponent; 

  //--- Constructor ---
  constructor(private newsService: NewsServiceService, private loginService: LoginService) {}

  //MÉTODOS
  ngOnInit(): void {
    //--- Recibir permisos ---
    if(localStorage.getItem('ROLE_MARKETING'))
    {
      	this.isDeleteNewsVisible = true
    }else{
      	this.isDeleteNewsVisible = false
    }

    this.loginService.evento$.subscribe(msg => {
      this.isDeleteNewsVisible = this.loginService.checkPermissions("ROLE_MARKETING")
    })

    //--- Reconocer si estamos en movil landscape ---
    this.mediaQueryList = window.matchMedia('(orientation: landscape)');
    this.isInMobileLandscape = this.mediaQueryList.matches;
    this.mediaQueryList.addEventListener('change', this.onOrientationChange); //Listener que se activa cuando se pone el movil en landscape

    this.isVisible=false;
  }

  //MÉTODOS

  //Metodo que se lanza cuando se gira la orientación del móvil
  onOrientationChange = (event: MediaQueryListEvent) => {this.isInMobileLandscape = event.matches;}

  showModal(){
    this.isVisible=true;
    document.body.style.overflow = 'hidden'; //IMPORTANTE PARA QUE NO SE HAGA SCROLL DE LO DE ATRÁS
  }

  closeModal(){
    this.isVisible=false;
    document.body.style.overflow = '';
  }

  /**
   * Hace una llamada API para que se borre la noticia actual
   */
  onDelete(){
    this.isVisible=false;
    this.newsService.deleteNews(this.newsIndex);
  }

  /**
   * Vuelve esto componente invisible y hace visible al componente de
   * editar noticia
   */
  onEdit(){
    this.closeModal();
    this.newsEditForm.showModal();
  }

}
