import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './componente/acerca-de/edit-acerca-de.component';
import { EditeducacionComponent } from './componente/educacion/editeducacion.component';
import { NeweducacionComponent } from './componente/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componente/experiencia/editexperiencia.component';
import { NewExperienciaComponent } from './componente/experiencia/newexperiencia.component';
import { HomeComponent } from './componente/home/home.component';
import { EditSkillComponent } from './componente/hys/edit-skill.component';
import { NewtSkillComponent } from './componente/hys/newt-skill.component';
import { LoginComponent } from './componente/login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path:'editexp/:id', component:EditExperienciaComponent},
  {path:'nuevaedu', component:NeweducacionComponent},
  {path:'editedu/:id', component:EditeducacionComponent},
  {path:'newtskill', component:NewtSkillComponent},
  {path:'editskill/:id', component:EditSkillComponent},
  {path:'editacercade/:id', component:EditAcercaDeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
