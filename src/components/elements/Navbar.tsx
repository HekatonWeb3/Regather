import { ButtonMagenta, ButtonSecondary } from "./Button";


interface NavbarProps {

}

export function Navbar({ }: NavbarProps) {
  return (
    <nav className="flex justify-between items-center bg-light-100/80 backdrop-blur-md border-b gradient-border py-4 px-4 md:px-8 xl:px-24">
      <h1 className="__title-nav font-semibold uppercase text-[1.2rem] text-magentas-100">Regather</h1>
      <ul className="flex gap-4">
        <ButtonMagenta>Login</ButtonMagenta>
        <ButtonSecondary>Register</ButtonSecondary>
      </ul>
    </nav>
  )
}