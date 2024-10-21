import Home from "./components/User/home";

// css
import "./assets/css/app.css";
import './assets/build/tailwind.css';
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    // Thêm class 'my-body-class' vào thẻ <body> khi component được render
    document.body.classList.add('__className_da1155');
    document.getElementById("root").classList.add('wrapper');
    document.getElementById("root").classList.add('relative');


    // Cleanup function để xóa class khi component bị unmount (không bắt buộc)
    return () => {
      document.body.classList.remove('__className_da1155');
      document.getElementById("root").classList.remove('wrapper');
      document.getElementById("root").classList.remove('relative');


    };
  }, []); // Chạy một lần khi component mount

  return (
    <>
      <Home />
    </>
  );
};

export default App;
