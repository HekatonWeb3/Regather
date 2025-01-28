import { Link, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { Button, ButtonMagenta } from "./Button";


export function Navbar() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login")
  }
  return (
    <nav className="flex sticky top-0 z-50 justify-between items-center bg-light-100/80 backdrop-blur-md border-b gradient-border py-4 px-4 md:px-8 xl:px-24">
      <Link to="/" className="__title-nav font-semibold uppercase text-[1.2rem] text-magentas-100">Regather</Link>
      <section className="flex gap-4 items-center ">
        {isAuthenticated && (
          <Button onclick={() => navigate("/create")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" /></svg>
            Create Novel
          </Button>
        )}
        {isAuthenticated ? (
          <figure className="flex gap-2 p-1 rounded-full items-center border border-dark-400">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.375 7H23.625M4.375 14H23.625M4.375 21H23.625" stroke="#585858" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <img src="/images/dummypfp.png" className="h-10" alt="" />
          </figure>
        ) : (
          <ul className="flex gap-4">
            <ButtonMagenta onclick={toLogin}>Register</ButtonMagenta>
          </ul>
        )}
      </section>
    </nav>
  )
}