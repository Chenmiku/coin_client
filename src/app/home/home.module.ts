import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MenuComponent } from './core/menu/menu.component';
import { HeaderComponent } from './core/header/header.component';
import { AdvertiseComponent } from './core/advertise/advertise.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './core/footer/footer.component';
import { CategoryModule } from './category/category.module';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { ComicComponent } from './comic/comic.component';
import { ChapterComponent } from './chapter/chapter.component';
import { CollectionComponent } from './collection/collection.component';
import { ServicesService } from '../admin/shared/services.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [ HeaderComponent, MenuComponent, AdvertiseComponent, FooterComponent, HomeComponent, HomeDetailComponent, ComicComponent, ChapterComponent, CollectionComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule, HomeRoutingModule, CategoryModule
  ],
  providers: [ServicesService]
})
export class HomeModule { }
