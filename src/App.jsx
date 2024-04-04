import Categories from "./components/Categories";

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600">
      <div className="p-4">
        <h1 className="font-bold mx-2 mb-3">SELECCIONAR UN SERVICIO</h1>
        <Categories />
      </div>
    </div>
  );
}

export default App;
