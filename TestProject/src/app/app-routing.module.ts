import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'feed',component:FeedComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
path:'**', redirectTo:'home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
