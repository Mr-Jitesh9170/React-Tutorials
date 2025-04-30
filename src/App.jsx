import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ReactMemo } from "./reactMemo/reactMemo"
import { ReactTutorial } from "./pages/reactTutorials"
import { WithoutReactMemo } from "./reactMemo/withoutReactMemo"
import { WithoutUseMemo } from "./useMemo/withoutuseMemo"
import { WithUseMemo } from "./useMemo/useMemo"
import { WithUseCallBack } from "./useCallBack/useCallBack"
import { WithoutUseCallBack } from "./useCallBack/withoutUseCallback"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReactTutorial />} >
          <Route path="/reactMemo" element={<ReactMemo />} />
          <Route path="/withoutReactMemo" element={<WithoutReactMemo />} />
          <Route path="/withoutUseMemo" element={<WithoutUseMemo />} />
          <Route path="/withUseMemo" element={<WithUseMemo />} />
          <Route path="/withUseCallback" element={<WithUseCallBack />} />
          <Route path="/withoutUseCallback" element={<WithoutUseCallBack />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App