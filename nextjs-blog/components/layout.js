import Head from "next/head";
import {UserContext} from "../contexts/User";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Content from "./layouts/Content";

const user = {
  email: "ivan.ivanov@gmail.com",
  firstName: "Ivan",
  lastName: "Ivanov",
  avatarUrl: "https://www.viawater.nl/files/default-user.png"
}

export default function Layout({children, home}) {
  return (
    <div className="container">
      <UserContext.Provider value={user}>
        <Head>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"/>
        </Head>

        <Header/>
        <Content content={children} />
        <Footer/>
      </UserContext.Provider>
    </div>
  )
}