import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import { Provider } from "react-redux";
import { ProductStore } from "./Features/ProductStore";

function App() {
  return (
    <>
    <Provider store={ProductStore}>
      <Header />
      <ProductList />
    </Provider>
         </>
  );
}

export default App;