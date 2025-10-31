import Editor from "./Components/Editor"
import Previewer from "./Components/Previewer"

const App:React.FC = () => {
  return (
    <div className="bg-[#87B5B5] h-screen w-full flex flex-col items-center pt-10 gap-2">
      <Editor />
      <Previewer/>
    </div>
  )
}

export default App