import Head from "next/head";
import { FC } from "react";
import NavBar from "./NavBar";

interface ChildrenProps {
    children?: React.ReactNode;
  }

const Layout: FC <ChildrenProps> = ({ children }) => {
  return (
    <div className="layout d-flex justify-content-center || w100vw">
        <Head>
          <title>Online Menu - The best way to manage your menu</title>
          <meta name="description" content="With Online Menu you can easily manage your menu daily and present your client with your best." />
          <meta name="keywords" content="online menu, menu, easy management, food, client, restaurant, bar" />
        </Head>
        <NavBar />
        { children }
    </div>
  )
}

export default Layout;
