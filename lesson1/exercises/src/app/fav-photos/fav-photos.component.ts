import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'SB Images';
  image1 = 'https://www.nikesb.com/assets/imager/uploads/70969/FD8777-100-PHCFH001_020d4294749750daa11b9b866154bc17.png';
  image2 = 'https://www.nikesb.com/assets/imager/uploads/75666/DO9404-400-PHCFH001_020d4294749750daa11b9b866154bc17.png';
  image3 = 'https://www.nikesb.com/assets/imager/uploads/75174/DR5415-103-PHCFH001_020d4294749750daa11b9b866154bc17.png';

  constructor() { }

  ngOnInit() {
  }

}