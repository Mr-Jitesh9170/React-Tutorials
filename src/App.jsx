import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ReactMemo } from "./reactMemo/reactMemo"
import { ReactTutorial } from "./pages/reactTutorials"
import { WithoutReactMemo } from "./reactMemo/withoutReactMemo"
import { WithoutUseMemo } from "./useMemo/withoutuseMemo"
import { WithUseMemo } from "./useMemo/useMemo"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReactTutorial />} >
          <Route path="/reactMemo" element={<ReactMemo />} />
          <Route path="/withoutReactMemo" element={<WithoutReactMemo />} />
          <Route path="/withoutUseMemo" element={<WithoutUseMemo />} />
          <Route path="/withUseMemo" element={<WithUseMemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App