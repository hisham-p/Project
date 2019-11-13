import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  // { path: '', component: StoriesComponent },
  {path:'', component: ProfileComponent},
  { path: 'profile', component: ProfileDetailsComponent },
  { path: 'message', component: MessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
