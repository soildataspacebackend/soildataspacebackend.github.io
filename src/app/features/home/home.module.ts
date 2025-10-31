import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { NewsModule } from '../news/news.module';
import { PartnersCarrouselComponent } from './components/partners-carrousel/partners-carrousel.component';
import { PartnersCardComponent } from './components/partners-card/partners-card.component';
import { MatchMediaDirective } from '../../utils/match-media.directive';

@NgModule({
  declarations: [
    HomeComponent,
    PartnersCarrouselComponent,
    PartnersCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NewsModule, //Importar modulo de noticias
  ]
})
export class HomeModule { }
