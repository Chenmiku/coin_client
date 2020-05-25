import { Component, OnInit } from '@angular/core';
import { ServicesService, ICategory, IFilterCategory } from 'src/app/admin/shared/services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private service : ServicesService
  ) { }

  categories : ICategory[] 

  ngOnInit() {
    this.service.getAllCategoryPublic(0, 0, '', '').subscribe(c => {
      this.categories = c.categories
    })
  }

}
