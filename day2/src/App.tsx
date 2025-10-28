
interface User {
  name: string;
  age: number;
  address: string;
}

const App: React.FC = () => {
  localStorage.setItem("Name", "Kashaf")
  localStorage.setItem("age", "24")
  sessionStorage.setItem("Age", "26")



  const obj: User = {
    name: "Kashaf",
    age: 26,
    address: "Lahore",
  };

  localStorage.setItem("user", JSON.stringify(obj))

  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const getValue: User = JSON.parse(storedUser);
    console.log(typeof getValue);
    console.log(getValue);
  } else {
    console.log("No user found in localStorage");
  }

  return (
    <div>

    </div>
  )
}

export default App