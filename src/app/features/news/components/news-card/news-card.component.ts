import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NewsInterface } from '../../interfaces/news-interface';
import { NewsServiceService } from '../../services/news-service.service'; 
import { NewsModalComponent } from '../news-modal/news-modal.component';
import { NewsColorStyle } from '../../interfaces/news-color-style';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { LoginService } from '../../../../core/auth/services/login.service';

@Component({
    selector: 'app-news-card',
    templateUrl: './news-card.component.html',
    styleUrl: './news-card.component.css',
    standalone: false
})

export class NewsCardComponent implements OnInit {
  //ATRIBUTOS

  //--- Atributos que vienen del componente padre ---
  @Input() newsItem!: NewsInterface;
  @Input() newsIndex!: number; //El índice de la noticia en la lista de noticias, no es el id de noticia de la base de datos
  @Input() newsColorStyle!: NewsColorStyle; //Color de la carta
  @ViewChild(NewsModalComponent) newsModalRef!: NewsModalComponent; //Referencia al modal de noticia

  finalImage: string = '';
  finalButtonText: string = '';
  showButton: boolean = false;
  isDeleteNewsVisible!: boolean;

  safeImage?: SafeUrl;

  //--- Para que el tamaño sea distinto en movil ---
  private mediaQueryList!: MediaQueryList;
  isMobile!: boolean;
  

  //CONSTRUCTOR
  constructor(private newsService: NewsServiceService) { }

  //MÉTODOS

  /**
   * Inicializar carta
   * */
  ngOnInit() {
    // Lógica para determinar la imagen por defecto
    this.finalImage = this.newsItem.image || this.newsService.defaultNewsImage;
    //console.log(this.finalImage == this.testImage);

    // Lógica para determinar el texto del botón por defecto
    if (this.newsItem.buttonText && this.newsItem.buttonText !== '') {
      this.finalButtonText = this.newsItem.buttonText;
    } else {
      this.finalButtonText = 'Visitar';
    }

    // Lógica para mostrar el botón
    this.showButton = !!this.newsItem.link;
    
    this.mediaQueryList = window.matchMedia('(max-width: 639.98px)');
    this.isMobile = this.mediaQueryList.matches;
  }

  /**
   * Muestra el modal de noticia, cambiando el valor de isVisible a true mediante la referencia
   */
  showModal() {
    this.newsModalRef.showModal();
  }

}
