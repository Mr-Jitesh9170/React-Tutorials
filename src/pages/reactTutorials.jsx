import { Link, Outlet } from "react-router-dom"

export const ReactTutorial = () => {
    return (
        <div className="">
            <div className="flex gap-4  m-auto border-2 p-2 justify-center   px-3 py-2">
                <Link className={"w-40 border-2 px-2 py-1 rounded hover:font-bold transition duration-700"} to={"/reactMemo"} >React Memo</Link>
                <Link className={"w-50 border-2 px-2 py-1 rounded hover:font-bold transition duration-700"} to={"/withoutReactMemo"}>React Without Memo</Link>
                <Link className={"w-50 border-2 px-2 py-1 rounded hover:font-bold transition duration-700"} to={"/withoutUseMemo"}>React Without useMemo</Link>
                <Link className={"w-50 border-2 px-2 py-1 rounded hover:font-bold transition duration-700"} to={"/withUseMemo"}>React With useMemo</Link>

            </div>
            <div><Outlet /></div>
        </div >
    )
}