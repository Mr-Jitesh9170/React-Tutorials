import { Link, Outlet } from "react-router-dom"

export const ReactTutorial = () => {
    return (
        <div className="flex">
            <div className="min-h-screen flex flex-col flex-1 gap-2  m-auto border-2  px-3 py-2">
                <Link className={"border-2 px-2 py-1 rounded hover:font-bold transition duration-700"} to={"/reactMemo"} >Memo</Link>
                <Link className={"border-2 px-2 py-1 rounded hover:font-bold transition duration-700"} to={"/withoutReactMemo"}>Without Memo</Link>
                <Link className={"border-2 px-2 py-1 rounded hover:font-bold transition duration-700"} to={"/withUseMemo"}>useMemo</Link>
                <Link className={"border-2 px-2 py-1 rounded hover:font-bold transition duration-700"} to={"/withoutUseMemo"}>without useMemo</Link>
                <Link className={"border-2 px-2 py-1 rounded hover:font-bold transition duration-700"} to={"/withUseCallback"}>useCallback</Link>
                <Link className={"border-2 px-2 py-1 rounded hover:font-bold transition duration-700"} to={"/withoutUseCallback"}>without useCallBack</Link>
            </div>
            <div className="flex-9 bg-yellow-50"><Outlet /></div>
        </div >
    )
}