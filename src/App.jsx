import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Provider } from "react-redux";
 
import bookStore from "./redux/bookStore";
 
import View from "./components/View";

function App() {
  return (
    <Provider store={bookStore}>
     
        <div className="mt-5 ">
          <h1 className="text-center text-success">Book Management System</h1>
           <View/>
        </div>
       
    </Provider>
  );
}

export default App;
