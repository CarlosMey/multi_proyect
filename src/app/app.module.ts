import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { PianoComponent } from './piano/piano/piano.component';
import { DadosComponent } from './dados/dados.component';
import { TareasComponent } from './tareas/tareas.component';
import { NavbarComponent } from './tareas/navbar/navbar.component';
import { ConvertidorComponent } from './convertidor/convertidor.component';
import { NavbarconvertidorComponent } from './convertidor/navbarconvertidor/navbarconvertidor.component';
import { BMICalculatorComponent } from './bmicalculator/bmicalculator.component';
// import { InicioComponent } from './BMICalculator/inicio/inicio.component';
// import { ResultadoComponent } from './BMICalculator/resultado/resultado.component';
import { EmpleadoListComponent } from './empleadoList/empleado-list.component';
import { EmpleadoCountComponent } from './empleadoList/empleado-count/empleado-count.component';
import { CitasComponent } from './citas/citas.component';
import { ListaDeCistasComponent } from './citas/lista-de-cistas/lista-de-cistas.component';
import { CrearCistasComponent } from './citas/crear-cistas/crear-cistas.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { GastosComponent } from './presupuesto/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './presupuesto/ingresar-presupuesto/ingresar-presupuesto.component';
import { IngresarGastoComponent } from './presupuesto/gastos/ingresar-gasto/ingresar-gasto.component';
import { ListarGastoComponent } from './presupuesto/gastos/listar-gasto/listar-gasto.component';
import { ClimaComponent } from './clima/clima.component';
import { NavbarClimaComponent } from './clima/navbar-clima/navbar-clima.component';
import { DashboardClimaComponent } from './clima/dashboard-clima/dashboard-clima.component';
import { BitlyComponent } from './bitly/bitly.component';
import { NavbarBitlyComponent } from './bitly/navbar-bitly/navbar-bitly.component';
import { ShortUrlComponent } from './bitly/short-url/short-url.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { FormularioComponent } from './noticias/formulario/formulario.component';
import { ListadoNoticiasComponent } from './noticias/listado-noticias/listado-noticias.component';
import { NavbarNoticiasComponent } from './noticias/navbar-noticias/navbar-noticias.component';
import { SpinnerNoticiasComponent } from './noticias/shared/spinner-noticias/spinner-noticias.component';
import { PixabayComponent } from './pixabay/pixabay.component';
import { BuscarImagenComponent } from './pixabay/buscar-imagen/buscar-imagen.component';
import { ListarImagenComponent } from './pixabay/listar-imagen/listar-imagen.component';
import { NavbarImagenComponent } from './pixabay/navbar-imagen/navbar-imagen.component';
import { ErrorComponent } from './pixabay/shared/error/error.component';
import { SpinnerPixabayComponent } from './pixabay/shared/spinner-pixabay/spinner-pixabay.component';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { CrearTarjetaComponent } from './tarjeta-credito/crear-tarjeta/crear-tarjeta.component';
import { ListarTarjetaComponent } from './tarjeta-credito/listar-tarjeta/listar-tarjeta.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AppusuariosComponent } from './appusuarios/appusuarios.component';
import { DashboardAppusuariosComponent } from './appusuarios/dashboard-appusuarios/dashboard-appusuarios.component';
import { FooterAppusuariosComponent } from './appusuarios/dashboard-appusuarios/footer-appusuarios/footer-appusuarios.component';
import { NavbarAppusuariosComponent } from './appusuarios/dashboard-appusuarios/navbar-appusuarios/navbar-appusuarios.component';
import { LayoutComponent } from './appusuarios/layout/layout.component';
import { ListUsuariosComponent } from './appusuarios/dashboard-appusuarios/list-usuarios/list-usuarios.component';
import { CardUsuarioComponent } from './appusuarios/dashboard-appusuarios/list-usuarios/card-usuario/card-usuario.component';
import { InicioProyectoComponent } from './inicio-proyecto/inicio-proyecto.component';




@NgModule({
  declarations: [
    AppComponent,
    PianoComponent,
    DadosComponent,
    TareasComponent,
    NavbarComponent,
    ConvertidorComponent,
    NavbarconvertidorComponent,
    BMICalculatorComponent,
    // InicioComponent,
    // ResultadoComponent,
    EmpleadoListComponent,
    EmpleadoCountComponent,
    CitasComponent,
    ListaDeCistasComponent,
    CrearCistasComponent,
    PresupuestoComponent,
    GastosComponent,
    IngresarPresupuestoComponent,
    IngresarGastoComponent,
    ListarGastoComponent,
    ClimaComponent,
    NavbarClimaComponent,
    DashboardClimaComponent,
    BitlyComponent,
    NavbarBitlyComponent,
    ShortUrlComponent,
    NoticiasComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    NavbarNoticiasComponent,
    SpinnerNoticiasComponent,
    PixabayComponent,
    BuscarImagenComponent,
    ListarImagenComponent,
    NavbarImagenComponent,
    ErrorComponent,
    SpinnerPixabayComponent,
    TarjetaCreditoComponent,
    CrearTarjetaComponent,
    ListarTarjetaComponent,
    AppusuariosComponent,
    DashboardAppusuariosComponent,
    FooterAppusuariosComponent,
    NavbarAppusuariosComponent,
    LayoutComponent,
    ListUsuariosComponent,
    CardUsuarioComponent,
    InicioProyectoComponent,

    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    ToastrModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
