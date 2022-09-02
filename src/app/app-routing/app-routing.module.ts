import { NgModule } from '@angular/core';
import{ RouterModule, Routes} from'@angular/router’;
import{ HomeComponent} from'../views/home/home.component';

const Routes: Routes= [
  { path: "", component: HomeComponent
}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
.

export class AppRoutingModule { }
