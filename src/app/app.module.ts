import { ListarComponent } from 'src/app/cliente/listar/listar.component';
import { NgxViacepService } from '@brunoc/ngx-viacep';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './fragments/navbar/navbar.component';
import { FooterComponent } from './fragments/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteModule } from './cliente/cliente.module';
import { ProjetoModule } from './projeto/projeto.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FornecedorModule,
    HttpClientModule,
    ClienteModule,
    ProjetoModule,
  ],
  providers: [ NgxViacepService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
