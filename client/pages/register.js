import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../ContextApi/index";
import { useRouter } from "next/router";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //protecting route
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const router = useRouter();

  useEffect(() => {
    if (user !== null) {
      router.push("/");
    }
  }, [user]);

  let URL = "http://localhost:8000/api/v1/register";
  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      let { data } = await axios.post(URL, {
        name,
        email,
        password,
      });
      toast.success("successfully registered");
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return (
    <>
      <h1 className="jumbotron bg-primary pt-5 text-center square">register</h1>
      <div className="container col-md-4 offset-md-4 mt-5">
        <form onSubmit={handleSubmit}>
          <input
            type="Name"
            className="form-control mb-4 p-2"
            placeholder="Name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="Email"
            className="form-control mb-4 p-2"
            placeholder="Email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-4 p-2"
            placeholder="Password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* disabled use for spinning */}
          <button
            type="submit"
            className="btn btn-block btn-primary mx-auto px-5 d-flex items-center"
            disabled={!name || !email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
          <p className="text-center p-3">
            Already have an account?
            <Link href="/login" legacyBehavior>
              <a>Login</a>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default register;
