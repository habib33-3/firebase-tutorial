import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <p>home</p>
    </div>
  );
};

export default Home;
