import { Component, OnInit, ViewChild } from '@angular/core';
import { ColaboradorService } from './../../../controller/service/colaborador.service';
import { Colaborador, DadosEmpresa } from 'src/app/seguranca-trabalho/controller/models/colaborador';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertaSucessoComponent } from 'src/app/seguranca-trabalho/controller/alertas/alerta-sucesso/alerta-sucesso.component';
import { AlertaErroComponent } from 'src/app/seguranca-trabalho/controller/alertas/alerta-erro/alerta-erro.component';



@Component({
  selector: 'app-colaborador-form',
  templateUrl: './colaborador-form.component.html',
  styleUrls: ['./colaborador-form.component.css']
})
export class ColaboradorFormComponent implements OnInit {

  colaborador: Colaborador = new Colaborador();

  @ViewChild(AlertaSucessoComponent, {static: false}) msgSucesso: AlertaSucessoComponent;
  @ViewChild(AlertaErroComponent, {static: false}) msgErro: AlertaErroComponent;

  msgErros:string [];
  constructor(private colaboradorService: ColaboradorService,
              private route: ActivatedRoute,
              private router: Router) { 
                this.route.params.subscribe(params => this.colaborador.id = params['id']);
              }

  ngOnInit() {
      this.colaborador.dadosEmpresa = new DadosEmpresa();

    if(this.colaborador.id != null ){
        this.buscarColaboradorPorId();
      }
     
  }

  salvarColaborador(){

      if(this.colaborador.id == null){
          this.colaboradorService.salvarColaborador(this.colaborador).subscribe(
            res =>{
               this.msgSucesso.setMsgSucesso('Colaborador cadastrado com sucesso!');
               this.colaborador = new Colaborador();
               this.colaborador.dadosEmpresa = new DadosEmpresa();
            },
            errorResponse => {
              if(errorResponse.error.errors == null)
              {
                this.msgErro.setMsgErro('Ocorreu algum erro inesperado...');
              }else{
                this.msgErros = errorResponse.error.errors;
              } 
               
            }
          );
      }else{
        this.colaboradorService.editarColaborador(this.colaborador).subscribe(
            res => {
               this.msgSucesso.setMsgSucesso('Colaborador editado com sucesso!');
                this.router.navigateByUrl('colaborador-list');
            },
            errorResponse => {
              if(errorResponse.error.errors == null)
              {
                this.msgErro.setMsgErro('Ocorreu algum erro inesperado...');
              }else{
                this.msgErros = errorResponse.error.errors;
              } 
            }
        );
      }

      
  }

  buscarColaboradorPorId(){
      this.colaboradorService.buscarColaborador(this.colaborador.id).subscribe(res => this.colaborador = res);
  }

}
