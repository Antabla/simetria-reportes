import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home.component';

import {ClienteService} from '../services/cliente.service';
import {ProductoService} from '../services/producto.service';
import {FacturaService} from '../services/factura.service';


@NgModule({
  declarations: [HomeComponent, ClientesComponent, ProductosComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ClienteService,ProductoService,FacturaService
  ]
})
export class HomeModule { }
