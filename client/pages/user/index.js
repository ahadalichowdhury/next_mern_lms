import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../ContextApi";
const UserIndex = () => {
  const [hidden, setHidden] = useState(true);
  const { state } = useContext(Context);
  const { user } = state;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/v1/current-user");
        console.log(data);
        setHidden(false);
      } catch (error) {
        console.log(error);
        setHidden(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1 className="jumbotron text-center square">
        <p>{JSON.stringify(user)}</p>
      </h1>
    </div>
  );
};

export default UserIndex;
