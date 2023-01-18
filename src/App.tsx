import React, { useState } from "react";
import "./App.css";
import AddOrder from "./components/AddOrder";
import AddProduct from "./components/AddProduct";
import AddSetting from "./components/AddSetting";
import ListOrders from "./components/ListOrders";
import ListProducts from "./components/ListProducts";
import ListSettings from "./components/ListSettings";
import { order, product, settings } from "./types";

function App() {
  const [products, setProducts] = useState<product[]>([]);
  const [orders, setOrders] = useState<order[]>([]);
  const [settings, setSettings] = useState<settings>({ titleIncludesTags: false, defaultPrice: 0, defaultStock: 0, defaultZipcode: 111111,
  });

  const addSettings = () => {};

  return (
    <div className="App">
      <div className="d-flex justify-content-center ">
        <AddProduct products={products} setProducts={setProducts}/>
        <ListProducts />
      </div>
      <div className="d-flex justify-content-center">
        <AddOrder products={products} orders={orders} setOrders={setOrders} />
        <ListOrders />
      </div>
      <div className="d-flex justify-content-center">
        <AddSetting addSettings={addSettings} />
        <ListSettings />
      </div>
    </div>
  );
}

export default App;
