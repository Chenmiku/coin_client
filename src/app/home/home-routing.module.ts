import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryModule } from './category/category.module';
import { HomeComponent } from './home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { ComicComponent } from './comic/comic.component';
import { ChapterComponent } from './chapter/chapter.component';
import { CollectionComponent } from './collection/collection.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const children : Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'the-loai'},
  { path: 'the-loai', loadChildren: () => CategoryModule },
  { path: 'trang-chu', component: HomeDetailComponent },
  { path: 'comic', component: ComicComponent },
  { path: 'chapter', component: ChapterComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
]

export const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    children: children
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
