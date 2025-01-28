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
      className="text-white border border-white font-semibold py-2 px-4 rounded-md btn-gradient text-xs md:text-base">
      <span className="flex gap-2 items-center">{children}</span>
    </button>
  )
}

export function ButtonMagenta({ children, onclick }: ButtonProps) {
  return (
    <button
      onClick={onclick}
      className={`bg-magentas-100 text-white font-semibold py-2 px-4 rounded-md hover:opacity-80 text-xs md:text-base ${_transition}`}
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
      className={`text-dark-200 font-semibold text-xs md:text-base py-2 px-4 rounded-md border border-transparent hover:border-magentas-100 hover:text-magentas-100 transition-all duration-300 ${_transition}`}
    >
      <span>
        {children}
      </span>
    </button>
  )
}