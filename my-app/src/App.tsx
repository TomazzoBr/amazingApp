import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full flex h-14">
        <Header />
      </div>
      <div className="w-full justify-center items-center h-5/6 bg-backblue">
        <ProductsList />
      </div>
    </div>
  );
}

export default App;
