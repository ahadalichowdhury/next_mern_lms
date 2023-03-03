import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";
import { SyncOutlined } from "@ant-design/icons";
import { Context } from "../ContextApi";

const ForgotPassword = () => {
  // state
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  // router
  const router = useRouter();

  // context
  const { state } = useContext(Context);
  const { user } = state;

  // redirect if user is logged in
  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/v1/forgot-password`, {
        email,
      });
      setSuccess(data);
      setLoading(false);
      toast("Check your email for password reset link");
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">
        Forgot Password
      </h1>
      <div className="container col-md-4 offset-md-4 pb-5 mt-5">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-4 p-3 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <button
            type="submit"
            className="btn btn-block btn-primary mx-auto d-flex items-center"
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
