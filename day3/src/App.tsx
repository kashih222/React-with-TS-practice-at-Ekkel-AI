import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    //first =  side Effect Function
    //second = clean up function
    //third = comma seperated dependency list
    first
  
    return () => {
      second
    }
  }, [third])
  
  return (
    <div>App</div>
  )
}

export default App