import format from "date-fns/format";

const Card = (props) => {
  const date = new Date(props.date);
  const formattedDate = format(date, "dd/MM/yyyy hh:mm a");

  return (
    <div
      className="md:h-32 lg:h-36 rounded-lg bg-white border grid md:grid-cols-[20%,80%] py-3 cursor-pointer text-xs md:text-sm lg:text-base px-2 hover:border-[#E54065] active:bg-[#F2F2F2] focus:bg-[#F2F2F2]"
      onClick={() => console.log(props.id)}
    >
      <span className="justify-self-center rounded-full bg-[#E54065] text-white font-semibold h-fit px-2 py-3">
        Img
      </span>
      <div className="text-xs md:text-sm xl:text-base">
        <h1>
          From :
          <span className="px-2 font-medium text-xs xl:text-sm">
            {props.name} {"<"}
            {props.email}
            {">"}
          </span>
        </h1>
        <h1>
          Subject : <span className="px-2 font-medium">{props.subject}</span>
        </h1>
        <p className="py-2 text-xs md:text-sm xl:text-base">
          {props.short_description}
        </p>
        <div className="text-xs md:text-sm xl:text-base">
          <span className="pr-10">{formattedDate}</span>
          <button className="text-[#E54065] font-medium">Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
