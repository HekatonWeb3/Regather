import "./Button.css"

interface ButtonProps {
  children: React.ReactNode
  onclick?: () => void
}

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
      className="bg-magentas-100 text-white font-semibold py-2 px-4 rounded-md hover:opacity-80 transition-all"
    >
      <span>
        {children}
      </span>
    </button>
  )
}