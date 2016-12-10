import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ListaUsuarios page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-usuarios',//relativo ao arquivo de scss ou estilização da página
  templateUrl: 'lista-usuarios.html' //relativo a pagina html que este arquivo .ts manipula
})
export class ListaUsuarios {
private listaUsuarios;

  constructor(public navCtrl: NavController, public params: NavParams, public http:Http) {
    this.listaUsuarios = [];
    this.listarUsuarios();
  }

  listarUsuarios(){
      this.http.get('http://localhost:8080/ServicoWeb/resource/WebService/listar').map(res => res.json()).subscribe(data => {
        this.listaUsuarios = data;
      });
    }


  ionViewDidLoad() {

  }

}
