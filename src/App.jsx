import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ReactMemo } from "./reactMemo/reactMemo"
import { ReactTutorial } from "./pages/reactTutorials"
import { WithoutReactMemo } from "./reactMemo/withoutReactMemo"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReactTutorial />} >
          <Route path="/reactMemo" element={<ReactMemo />} />
          <Route path="/withoutReactMemo" element={<WithoutReactMemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App