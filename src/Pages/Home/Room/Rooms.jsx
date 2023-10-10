import RoomCard from "./RoomCard";
import rooms from '../../../data/rooms.json'


const Rooms = () => {
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-10">
            {
                rooms.map((room, index) => (<RoomCard
                key={index}
                room={room}
                ></RoomCard>))
            }
            
        </div>
    );
};

export default Rooms;