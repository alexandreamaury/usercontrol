import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  usuario;
  prilistaUsuarios = [];

  constructor(public navCtrl: NavController) {
    this.usuario = {}; // objeto sera retornado pelo construtor no formato JSON
  }
adicionaUsuario(){

};

localizaUsuarioporNome(nomeBuscado){
}


}
