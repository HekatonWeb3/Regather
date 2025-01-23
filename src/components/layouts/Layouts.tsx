import { Outlet } from "react-router";
import { Navbar } from "../elements/Navbar";
import Footer from "../elements/Footer";

export default function Layouts() {
  return (
    <main className="">
      <Navbar />
      <section className="min-h-screen 2xl:container mx-auto">
        <Outlet />
      </section>
      <Footer />
    </main >
  )
}