import { RouterModule, Routes,  } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';

const appRoutes: Routes = [
  { path: '', loadChildren: () => HomeModule },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {}