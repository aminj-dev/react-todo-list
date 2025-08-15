import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-4 absolute top-8 w-screen items-center">
        <h2 className="text-2xl">we <b className="text-red-600">Not Found</b> any task with this url</h2>
        <button onClick={() => navigate('/')} className="w-45 bg-[#252525] text-[#fafafa] rounded-lg h-8 cursor-pointer">
            go back to main page
        </button>
    </div>
  )
}
