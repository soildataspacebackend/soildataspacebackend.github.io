import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NewsModalComponent } from './components/news-modal/news-modal.component';
import { NewsCarrouselComponent } from './components/news-carrousel/news-carrousel.component';
import { NewsFormComponent } from './components/news-form/news-form.component';
import { NewsEditFormComponent } from './components/news-edit-form/news-edit-form.component';
import { MatchMediaDirective } from '../../utils/match-media.directive';

@NgModule({
  declarations: [
    NewsCardComponent,
    NewsModalComponent,
    NewsCarrouselComponent,
    NewsFormComponent,
    NewsEditFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatchMediaDirective,
  ],
  exports: [
    NewsCarrouselComponent,
    NewsFormComponent
  ], //IMPORTANTE PARA QUE SE PUEDA USAR FUERA DEL MODULO PONERLO EN LOS EXPORTS
})
export class NewsModule { }