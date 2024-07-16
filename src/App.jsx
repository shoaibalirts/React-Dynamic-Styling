import { useState } from "react";

function App() {
  const [isClass, setIsClass] = useState(false);
  function clickHandle() {
    setIsClass((prevState) => !prevState);
  }
  return (
    <div>
      <p className={isClass === true ? "active" : undefined}>Style me!</p>
      <button onClick={clickHandle}>Toggle style</button>
    </div>
  );
}

export default App;
