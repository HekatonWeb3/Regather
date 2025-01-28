import { Navigate } from "react-router"
interface ProtectedRoutexProps {
  children: JSX.Element
  bypass: boolean
}
const ProtectedRoutex = ({ bypass, children }: ProtectedRoutexProps) => {
  if (!bypass) {
    return <Navigate to="/" replace />
  }
  return children
}
export default ProtectedRoutex