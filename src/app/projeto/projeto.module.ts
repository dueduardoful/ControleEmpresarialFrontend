import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListarComponent } from './listar/listar.component';
import { GaleriaComponent } from './listar/galeria/galeria.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CadastrarComponent, HomeComponent, ListarComponent, GaleriaComponent, DetalhesComponent],
  imports: [
    CommonModule,
    FormsModule,
    SimplebarAngularModule,
    RouterModule
  ]
})
export class ProjetoModule { }
