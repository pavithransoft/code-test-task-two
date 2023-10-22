import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import ViewCard from "../components/ViewCard";

const Read = () => {
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/list")
      .then((res) => setEmailList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid md:grid-cols-[50%,50%] xl:grid-cols-[40%,60%] gap-2 lg:gap-10 lg:h-[32.75rem] xl:h-[38.2rem]">
      <div className="flex md:grid gap-5 text-sm pr-5 md:h-[32rem] lg:h-[32.75rem] xl:h-[38.2rem] overflow-auto scrollbar-thin scrollbar-thumb-pink-700 scrollbar-track-pink-100">
        {emailList.map((eList) => (
          <Card
            key={eList.id}
            name={eList.from.name}
            email={eList.from.email}
            subject={eList.subject}
            short_description={eList.short_description}
            date={eList.date}
            id={eList.id}
          />
        ))}
      </div>
      <div className="bg-white sticky top-24 z-50 lg:h-[32.75rem] xl:h-[38.2rem] rounded-lg">
        <ViewCard />
      </div>
    </div>
  );
};

export default Read;
