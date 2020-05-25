import { Component, OnInit } from '@angular/core';
import { ServicesService, IComic } from 'src/app/admin/shared/services.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  constructor(
    private service : ServicesService
  ) { }

  topComic : IComic[]
  newComic : IComic[]
  hotComic : IComic[]
  popularComic: IComic[]

  ngOnInit() {
    this.service.getAllComicByType(0,0,'','', 'top').subscribe(t => {
      this.topComic = t.comics
      console.log(this.topComic)
    })
    this.service.getAllComicByType(0,0,'','', 'new').subscribe(t => {
      this.newComic = t.comics
    })
    this.service.getAllComicByType(0,0,'','', 'hot').subscribe(t => {
      this.hotComic = t.comics
    })
    this.service.getAllComicByType(0,0,'','', '').subscribe(t => {
      this.popularComic = t.comics
    })


  }

}
