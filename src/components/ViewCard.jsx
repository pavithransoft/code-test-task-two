import Message from "./Message";
import { useParams } from "react-router-dom";

const ViewCard = (props) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="grid">
      <div className="sticky top-0 z-50 md:h-40 lg:h-32 backdrop-blur grid md:grid-cols-[8%,92%] xl:grid-cols-[10%,90%] p-5">
        <span className="rounded-full bg-pink-700 text-white font-semibold h-fit w-fit px-2 py-3">
          Img
        </span>
        <div className="grid grid-cols-2 md:px-8 lg:px-0 text-xs md:text-sm lg:text-base">
          <div className="grid gap-6 lg:px-9 xl:px-0">
            <h1 className="text-2xl font-semibold">Lorem Ipsum</h1>
            <h1 className="whitespace-pre">{props.date}</h1>
          </div>
          <button className="justify-self-end px-2 lg:px-3 py-1 rounded-full bg-pink-700 text-white h-fit">
            Mark as favorite
          </button>
        </div>
      </div>
      <Message />
    </div>
  );
};

export default ViewCard;
