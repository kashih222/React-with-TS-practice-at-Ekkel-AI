import { useState } from "react"

const App = () => {
  const [text, setText] = useState<string>("")
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);


  function handleClicktoUpperCase() {
    setText(text.toUpperCase());
  }

  function handleClicktoLowerCase() {
    setText(text.toLowerCase());
  }

  function handleClear() {
    setText("");
  }

  
  
  function handleTheme() {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('light'); // Remove the dot before 'light'
  }
 
  return (
    <div className={`main ${isDarkTheme ? '' : 'light'}`}>
      <div className="inside-main">
        <div className="heading">
          <h1 className="">
            Text Previewer
          </h1>
          <button
          onClick={handleTheme}
          className="Theme-btn">Dark / Light</button>
        </div>
        <div className="text-aria-div">
          <textarea
          onChange={(e)=>{
            setText(e.target.value)
            console.log(text)
          }}
          value={text}
          name="" id="" placeholder="Enter what you Analyze....."></textarea>
        </div>
        <div className="counts">
          <p>Character : {text.length}</p>
          <p>Words : {text.split(" ").length}</p> 
            <p>Estimate Reading Time : {text.trim() ? Math.ceil(text.split(" ").length / 200) : 0} minute(s)</p> 
        </div>
        <div className="btns ">
          <button className="All-btns" onClick={handleClicktoUpperCase}>
            To UpperCase
          </button>
          <button className="All-btns" onClick={handleClicktoLowerCase}>To LowerCase</button>
          <button className="All-btns" onClick={handleClear}>Clear</button>
        </div>
        <div className="preview-box">
          <p className="preview-pera">{text}</p>
        </div>

      </div>
    </div>
  )
}

export default App