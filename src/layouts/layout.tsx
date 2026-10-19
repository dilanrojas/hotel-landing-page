import Footer from "../components/home/footer";
import Header from "../components/ui/header";
import { Outlet } from "react-router-dom";
import { FavouriteContextProvider } from "../context/favourite-context";

export default function Layout() {
  return (
    <>

      <FavouriteContextProvider>

        <Header />
        <Outlet></Outlet>
        <Footer />

      </FavouriteContextProvider>
    </>
  )
}

