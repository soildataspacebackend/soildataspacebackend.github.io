import { Component,OnInit,ViewChild } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NewsModule } from '../news/news.module';
import { NewsFormComponent } from '../news/components/news-form/news-form.component';
import { LoginService } from '../../core/auth/services/login.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: false
})
export class HomeComponent implements OnInit {
    //ATRIBUTOS
    @ViewChild(NewsFormComponent) newsFormRef!: NewsFormComponent; //Referencia al componente de formulario de noticias
    isCreateNewsVisible !: boolean; //Variable que dice si se puede ver el botón de crear noticia o no
    
    //CONSTRUCTOR
    constructor (private loginService: LoginService) {}

    //MÉTODOS
    ngOnInit(): void {
        if(localStorage.getItem('ROLE_MARKETING'))
        {
			this.isCreateNewsVisible = true
        }else{
            this.isCreateNewsVisible = false
        }

        this.loginService.evento$.subscribe((msg) => {
            this.isCreateNewsVisible = this.loginService.checkPermissions("ROLE_MARKETING")
            //console.log(msg)
        })
    }

    /**
     * Método que abre el formulario de noticias
     */
    openNewsForm() {
        this.newsFormRef.showModal();
    }
}
