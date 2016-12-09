import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Usuario } from '../pages/usuario/usuario';
import { ListaUsuarios } from '../pages/lista-usuarios/lista-usuarios';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Usuario,
    ListaUsuarios
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Usuario,
    ListaUsuarios
  ],
  providers: []
})
export class AppModule {}
