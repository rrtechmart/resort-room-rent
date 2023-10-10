import { Link } from "react-router-dom";


const RoomCard = ({ room }) => {
    return (
        <Link to={`/room/${1}`} className="col-span-1 cursor-pointer group">
            <div className="flex flex-col gap-2 w-full ">
                <div className="aspect-square w-full overflow-hidden rounded-xl">
                    <img className="object-cover w-full h-full
                    group-hover:scale-110 transition rounded-xl" src={room.image} alt="" />
                </div>
                <div className="font-semibold text-lg">
                    Location: {room.location}
                </div>
                <div className="">
                    Date: {room.dateRange}
                </div>
                <div className="flex flex-row gap-4">
                    <div className="font-semibold">
                        Price: {room.price} $
                    </div>

                    <div className="font-semibold">night </div>
                </div>
            </div>
        </Link>

        // rough
        // <div className="card object-cover h-full bg-base-100 shadow-xl group">
        //     <figure><img className="object-cover w-full h-full group-hover:scale-110 transition" src={room.image} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">Location: {room.location} </h2>
        //         <p>Date: {room.dateRange}</p>
        //         <p>Price: {room.price} $</p>
        //         <p>Category: {room.category} </p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default RoomCard;