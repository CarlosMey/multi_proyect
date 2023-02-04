import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAppusuariosComponent } from './appusuarios/dashboard-appusuarios/dashboard-appusuarios.component';
import { LayoutComponent } from './appusuarios/layout/layout.component';
import { BMICalculatorComponent } from './bmicalculator/bmicalculator.component';
import { CitasComponent } from './citas/citas.component';
import { ClimaComponent } from './clima/clima.component';
import { ConvertidorComponent } from './convertidor/convertidor.component';
import { DadosComponent } from './dados/dados.component';
import { EmpleadoListComponent } from './empleadoList/empleado-list.component';
import { InicioProyectoComponent } from './inicio-proyecto/inicio-proyecto.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PianoComponent } from './piano/piano/piano.component';
import { PixabayComponent } from './pixabay/pixabay.component';
import { GastosComponent } from './presupuesto/gastos/gastos.component';
import { IngresarGastoComponent } from './presupuesto/gastos/ingresar-gasto/ingresar-gasto.component';
import { IngresarPresupuestoComponent } from './presupuesto/ingresar-presupuesto/ingresar-presupuesto.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { TareasComponent } from './tareas/tareas.component';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';

const routes: Routes = [

  {path:'', component: InicioProyectoComponent, title:'Inicio'},

  {path:'citas', component: CitasComponent, title:'Citas'},

  {path:'clima', component: ClimaComponent, title:'Clima'},

  {path:'convertidor', component: ConvertidorComponent, title:'Clima'},

  {path:'dados', component: DadosComponent, title:'Clima'},

  {path:'list-empleados', component: EmpleadoListComponent, title:'Clima'},

  {path:'noticias', component: NoticiasComponent, title:'Clima'},

  {path:'piano', component: PianoComponent, title:'Clima'},

  {path:'pixabay', component: PixabayComponent, title:'Clima'},

  {path:'presupuesto', component: IngresarPresupuestoComponent, title:'Clima'},
  {path:'gastos', component:GastosComponent},

  {path:'tareas', component: TareasComponent, title:'Clima'},

  {path:'credit-card', component: TarjetaCreditoComponent, title:'Clima'},







  

  // {path:'',redirectTo:'layout', pathMatch:'full'},
  // {path:'layout', component: LayoutComponent},
  // {path:'dashboard-usuarios', component: DashboardAppusuariosComponent},
  // {path:'**',redirectTo:'layout', pathMatch:'full'},

  // {path:'',redirectTo:'/ingresarPresupuesto', pathMatch:'full'},
  // {path:'ingresarPresupuesto', component: IngresarPresupuestoComponent},
  // {path:'gastos', component:GastosComponent},
  // {path:'**',redirectTo:'/ingresarPresupuesto', pathMatch:'full'},


  // {path:'resultado/:bmi', component:ResultadoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
