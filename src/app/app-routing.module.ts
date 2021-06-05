import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';



const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'todo', 
    component: TodoComponent
  },
  {
    path: 'contact', 
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  
})
export class AppRoutingModule { }
