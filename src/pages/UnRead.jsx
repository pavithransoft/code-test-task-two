import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const UnRead = () => {
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/list")
      .then((res) => setEmailList(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="grid gap-5 lg:h-[32.75rem] xl:h-[38.2rem] px-4 overflow-auto scrollbar-thin scrollbar-thumb-pink-700 scrollbar-track-pink-100">
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
  );
};
export default UnRead;
