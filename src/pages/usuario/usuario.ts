import { Component } from '@angular/core';
import { Login } from '../pages/login/login';
import { NavController , NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'usuario',
  templateUrl: 'usuario.html'
})
export class Usuario {
public usuario;


  constructor(public navCtrl: NavController, public params: NavParams, public http:Http) {
    this.usuario={};
}

inserir(){
  console.log(this.usuario);
  this.http.post('http://localhost:8080/ServicoWeb/resource/WebService/inserir', this.usuario).map(res => res.json()).subscribe(data => {
    console.log('Inserindo dados normalmente...');
        this.usuario={};
        this.fechar();
  });
}

fechar(){
    this.navCtrl.pop();
  }

}
