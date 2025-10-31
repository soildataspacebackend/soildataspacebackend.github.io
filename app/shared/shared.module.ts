import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotificationModalComponent } from './components/notification-modal/notification-modal.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotificationModalComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],exports: [
    HeaderComponent,
    FooterComponent,
    NotificationModalComponent
  ]
})
export class SharedModule { }
