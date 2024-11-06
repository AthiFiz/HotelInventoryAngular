import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {

  hotelName = "Hotel Hilton";
  noRooms = 10;
  hideRooms = false;

  selectedRoom! :RoomList;

  rooms: Room = {
    totalRooms : 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  title = "Room List";

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent, ) headerComponent!: HeaderComponent;

  constructor() {}

  ngOnInit(): void {

    // console.log(this.headerComponent);
    this.roomList = [{
      roomType : "Delux Room",
      roomNo: 1,
      amneties: "Air Conditionor, Free Wifi",
      price: 5000,
      photos: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      checkinTime: new Date('11-Nov-2024'),
      checkoutTime: new Date('12-Nov-2024')
    },
    {
      roomType : "Delux Room",
      roomNo: 2,
      amneties: "Air Conditionor, Free Wifi",
      price: 5000,
      photos: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      checkinTime: new Date('15-Nov-2024'),
      checkoutTime: new Date('16-Nov-2024')
    },
    {
      roomType : "Suit Room",
      roomNo: 3,
      amneties: "Air Conditionor, Free Wifi, Kitchen",
      price: 15000,
      photos: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      checkinTime: new Date('15-Nov-2024'),
      checkoutTime: new Date('16-Nov-2024')
    }
  ];
  }

  ngDoCheck(){
    console.log("On change is called");
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }

  addRoom(){
    const room: RoomList = {
      roomType : "Suite Room large",
      roomNo: 3,
      amneties: "Air Conditionor, Free Wifi, Kitchen",
      price: 15000,
      photos: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      checkinTime: new Date('15-Nov-2024'),
      checkoutTime: new Date('16-Nov-2024')
    };

    this.roomList = [...this.roomList, room];
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
  }
}
