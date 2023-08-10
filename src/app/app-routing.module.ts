import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { UpdatePlayerComponent } from './dialogs/update-player/update-player.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:AdminLoginComponent,pathMatch:'full'},
  {path:'adminlogin',component:AdminLoginComponent,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'players',component:PlayersComponent},
    {path:'teams',component:TeamsComponent},
    {path:'updatePlayer',component:UpdatePlayerComponent}
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
