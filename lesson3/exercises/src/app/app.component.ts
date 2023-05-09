import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;


  handleTakeOff(rocketImage: HTMLImageElement) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
      }
  }

  landMission(rocketImage: HTMLImageElement) {
    let result = window.confirm('Are we safe for landing?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Land it.';
       this.takeOffEnabled = true;
       rocketImage.style.bottom='0px'
    } 
  }

  abortMission(rocketImage: HTMLImageElement) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Abort Mission.';
       this.takeOffEnabled = true;
       rocketImage.style.bottom='0px';
    } 
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
       let movement = parseInt(rocketImage.style.left) + 10 + 'px';
       rocketImage.style.left = movement;
       this.width = this.width + 10000;
      }
    else if (direction === 'top') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.top = movement;
      this.width = this.width + 10000;
      }
   else if (direction === 'left') {
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
     }

 else if(direction === 'down') {
  let movement = parseInt(rocketImage.style.top) + 10 + 'px';
  rocketImage.style.top = movement;
  this.width = this.width + 10000;
    }
  }
}

