

import './App.css'

function App() {
 

  return (
    <>
       <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Hello Bootstrap in React 🚀</h1>

      <button className="btn btn-success">Click Me</button>

      <div className="progress mt-3">
        <div
          className="progress-bar progress-bar-striped bg-info"
          role="progressbar"
          style={{ width: "60%" }}
          aria-valuenow={60}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
    </>
  )
}

export default App
