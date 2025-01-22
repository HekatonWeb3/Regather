import "./Button.css"

interface ButtonProps {
  children: React.ReactNode
  onclick?: () => void
}
let _transition = "transition-all duration-300";
export function Button({ children, onclick }: ButtonProps) {
  return (
    <button
      onClick={onclick}
      className="text-white font-semibold py-2 px-4 rounded-md btn-gradient">
      <span>{children}</span>
    </button>
  )
}

export function ButtonMagenta({ children, onclick }: ButtonProps) {
  return (
    <button
      onClick={onclick}
      className={`bg-magentas-100 text-white font-semibold py-2 px-4 rounded-md hover:opacity-80 ${_transition}`}
    >
      <span>
        {children}
      </span>
    </button>
  )
}

export function ButtonSecondary({ children, onclick }: ButtonProps) {
  return (
    <button
      onClick={onclick}
      className={`text-dark-200 font-semibold py-2 px-4 rounded-md border border-transparent hover:border-magentas-100 hover:text-magentas-100 transition-all duration-300 ${_transition}`}
    >
      <span>
        {children}
      </span>
    </button>
  )
}