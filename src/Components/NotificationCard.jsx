const typeColors ={
    order:"bg-green-100 text-green-800 border-green-300",
    feedback: "bg-blue-100 text-blue-800 border-blue-300",
    system: "bg-yellow-100 text-yellow-800 border-yellow-300",
};
const NotificationCard = ({title , message, type, timestamp})=>{
    const cardStyle = typeColors[type] || "bg-gray-100 text-gray-800";

    return(
        <>
        <div className={`border-l-4 p-4 rounded shadow ${cardStyle}`}>
            <h3 className="font-semibold text-lg">
                {title}
            </h3>
            <p className="text-sm mt-1">
                {message}
            </p>
            <p className="text-xs text-gray-500 mt-2">
                {timestamp.toDate().toLocaleString()}
            </p>
        </div>
        </>
    )
}
export default NotificationCard;