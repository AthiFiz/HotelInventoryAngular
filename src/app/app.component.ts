import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'invapp';
  // role = "users";

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //     const componentRef = this.vcr.createComponent(RoomsComponent);
  // }
}
