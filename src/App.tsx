import "./App.css";

import CategoryFormIterative from "./components/CategoryFormIterative";
import CategoryFormRecursive from "./components/CategoryFormRecursive";
import CateroryRecursiveRenderer2 from "./components/CateroryRecursiveRenderer";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <CategoryFormRecursive />
      <CategoryFormIterative />
      <CateroryRecursiveRenderer2 />
    </div>
  );
}

export default App;
