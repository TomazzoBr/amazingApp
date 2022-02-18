import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="flex w-full h-14">
        <Header />
      </div>
      <div className="flex w-full h-5/6 overflow-y-scroll bg-backblue">
        <Products />
      </div>
    </div>
  );
}

export default App;
