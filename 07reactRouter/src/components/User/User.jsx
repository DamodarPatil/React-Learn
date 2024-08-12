import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
return (
    <div className="bg-blue-300 flex justify-center text-xl text-orange-700 m-1 p-5">
        User: {userid}
    </div>
);
};

export default User;
