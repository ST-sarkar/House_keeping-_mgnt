import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { StaffComponent } from './staff/staff.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserServicesComponent } from './user-services/user-services.component';
import { ComplaintsComponent } from './complaints/complaints.component';

const routes: Routes = [
  {
    path:"rooms",
    component:RoomsComponent
  },
  {
    path:"staff",
    component:StaffComponent
  },
  {
    path:"task",
    component:TasksComponent
  },
  {
    path:"service",
    component:UserServicesComponent
  },
  {
    path:"complaints",
    component:ComplaintsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
