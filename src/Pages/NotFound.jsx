import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h2>we <b>Not Found</b> any task with this url</h2>
        <button onClick={() => navigate('/')}>
            go back to main page
        </button>
    </div>
  )
}
