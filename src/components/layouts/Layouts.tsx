import {  Outlet, useNavigate } from "react-router";
import { Navbar } from "../elements/Navbar";
import Footer from "../elements/Footer";
import { useAuth } from "../../hooks/useAuth";

export default function Layouts() {
  const { loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }
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