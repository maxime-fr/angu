import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { EmployesComponent } from './employes/employes.component';
import { EmployeComponent } from './employe/employe.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';


const appRoutes: Routes = [
  { path: 'employes', component: EmployesComponent },
  { path: 'addemploye', component: AddEmployeComponent},
  { path: '', redirectTo: 'employes', pathMatch: 'full'},
  { path: '**', redirectTo: '/'}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployesComponent,
    EmployeComponent,
    AddEmployeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
