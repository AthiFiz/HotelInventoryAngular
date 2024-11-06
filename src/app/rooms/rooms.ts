export interface Room{
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}

export interface RoomList{
    roomType: string;
    amneties: string;
    price: number;
    roomNo: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
}
