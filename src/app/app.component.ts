import { Component } from '@angular/core';
import { AuthService } from './controller/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private authService: AuthService) { }

  ngOnInit() {

   // if(this.authService.verificarAutenticacao){
     // this.authService.encerrarSessao();
    //}

}

}
