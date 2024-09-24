import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ListadoEstudianteComponent } from './components/listado-estudiante/listado-estudiante.component';
import { AgregarEditarEstudianteComponent } from './components/agregar-editar-estudiante/agregar-editar-estudiante.component';
import { VerEstudianteComponent } from './components/ver-estudiante/ver-estudiante.component';

const routes: Routes = [
  { path: '', redirectTo: 'listStudents', pathMatch: 'full'},
  { path: 'listStudents', component: ListadoEstudianteComponent },
  { path: 'addStudents', component: AgregarEditarEstudianteComponent },
  { path: 'infoStudents/:id', component: VerEstudianteComponent },
  { path: 'editStudents/:id', component: AgregarEditarEstudianteComponent },
  { path: '**', redirectTo: 'listStudents', pathMatch: 'full' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
