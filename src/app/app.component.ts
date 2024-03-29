import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registerpage';

  registerActive = false
  addCardActive = true
  subscribeActive=false
  displayRegister(active){
    this.registerActive=active
    this.addCardActive=!active
  }
  displayAddCard(active){
    this.addCardActive=active
    this.registerActive=!active
  }
  displaySubscribe(active){
    this.subscribeActive=active
    this.addCardActive=!active
  }
}