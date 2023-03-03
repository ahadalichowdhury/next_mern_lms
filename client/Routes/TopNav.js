import { Menu } from "antd";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../ContextApi";

// for navbar current location changle
import { useState, useEffect } from "react";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

const TopNav = () => {
  //submenu

  const { SubMenu, ItemGroup } = Menu;

  const [current, setCurrent] = useState("");

  //logout functionality
  const { state, dispatch } = useContext(Context);
  const router = useRouter();

  //conditional route
  const { user } = state;

  useEffect(() => {
    //this is for current location
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  //logout
  const logout = async () => {
    dispatch({
      type: "LOGOUT",
    });

    window.localStorage.removeItem("user");
    const { data } = await axios.get("http://localhost:8000/api/v1/logout");
    toast.success(data.message);
    //redirect
    router.push("/login");
  };

  return (
    <Menu mode="horizontal" selectedKeys={[current]} className="">
      <div className="w-100">
        <Item
          icon={<AppstoreOutlined />}
          key="/"
          onClick={(e) => setCurrent(e.key)}
        >
          <Link href="/" legacyBehavior>
            <a>App</a>
          </Link>
        </Item>
        {user === null && (
          <>
            <Item
              icon={<LoginOutlined />}
              key="/login"
              onClick={(e) => setCurrent(e.key)}
            >
              <Link href="/login" legacyBehavior>
                <a>Login</a>
              </Link>
            </Item>
            <Item
              icon={<UserAddOutlined />}
              key="/register"
              onClick={(e) => setCurrent(e.key)}
            >
              <Link href="/register" legacyBehavior>
                <a>Register</a>
              </Link>
            </Item>
          </>
        )}
      </div>
      <div className="w-100">
        {user !== null && (
          <SubMenu
            icon={<CoffeeOutlined />}
            title={user && user.name}
            className="float-end md:float-none"
          >
            <ItemGroup>
              <Item>
                <Link href="/user" legacyBehavior>
                  <a>Dashboard</a>
                </Link>
              </Item>
              <Item onClick={logout}>
                <a>Logout</a>
              </Item>
            </ItemGroup>
          </SubMenu>
        )}
      </div>
    </Menu>
  );
};

export default TopNav;
