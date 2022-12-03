import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';
import { MenuHamburguesaComponent } from './componentes/menu-hamburguesa/menu-hamburguesa.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,
    SobreMiComponent,
    EducacionComponent,
    ProyectosComponent,
    FooterComponent,
    ContactoComponent,
    RedesSocialesComponent,
    MenuHamburguesaComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
