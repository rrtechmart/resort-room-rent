

const CategoryBox = ({ icon: Icon, label }) => {
    return (
        <div className="
       
        flex 
        flex-col
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        transition
        cursor-pointer
        w-full
        hover:bg-red-300 rounded
         ">
            <Icon size={26} />

            <div className="text-sm font-medium">
                {label}
            </div>

            


        </div>
    );
};

export default CategoryBox;