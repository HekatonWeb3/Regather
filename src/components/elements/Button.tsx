interface ButtonProps {
  children: React.ReactNode
}

export default function Button ({children}: ButtonProps) {
  return (
    <button className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
    {children}
    </button>
  )
}