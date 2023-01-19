import React, { useState } from "react";
import "./App.css";
import AddOrder from "./components/AddOrder";
import AddProduct from "./components/AddProduct";
import AddSetting from "./components/AddSetting";
import ListOrders from "./components/ListOrders";
import ListProducts from "./components/ListProducts";
import ListSettings from "./components/ListSettings";
import { order, product, settings } from "./types";

const initialProducts=[
  { name:'Iphone',
    description:'Apple smartphone with flagship features',
    price:'₹99,990',
    tags:['Apple','smartphone'],
    stock:150,
   },
   { name:'Iphone',
    description:'Apple smartphone with flagship features',
    price:'₹99,990',
    tags:['Apple','smartphone'],
    stock:150,
   },
   { name:'Iphone',
    description:'Apple smartphone with flagship features',
    price:'₹99,990',
    tags:['Apple','smartphone'],
    stock:150,
   },
]

const initialOrders=[
  {
    customerName:'Aman Jaiswal',
    customerAddress:'Naka,Hindola,Lucknow.',
    zipcode:226001,
    products:initialProducts,
    quantity:3,
  }
]

function App() {
  const [products, setProducts] = useState<product[]>(initialProducts);
  const [orders, setOrders] = useState<order[]>(initialOrders);
  const [settings, setSettings] = useState<settings>({ titleIncludesTags: true, defaultPrice: '₹10,000', defaultStock: 0, defaultZipcode: 111111,});

  console.log('products-',products)
  console.log('settings-',settings);
  

  return (
    <div className="App">
      <div className="d-flex justify-content-center ">
        <AddProduct products={products} setProducts={setProducts} settings={settings}/>
        <ListProducts products={products} />
      </div>
      <div className="d-flex justify-content-center">
        <AddOrder products={products} orders={orders} setOrders={setOrders} settings={settings} />
        <ListOrders orders={orders} />
      </div>
      <div className="d-flex justify-content-center">
        <AddSetting settings={settings} setSettings={setSettings} />
        <ListSettings settings={settings}/>
      </div>
    </div>
  );
}

export default App;
