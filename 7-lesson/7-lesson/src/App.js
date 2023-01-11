import "./App.css";
import MeniuList from "./components/MeniuList";
import Mood from "./components/Mood";
import { useState } from "react";
import Product from "./components/Product/Product";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  const [activeMenu, setActiveMenu] = useState("single");
  const buttons = [
    {
      label: "single",
      value: "single",
    },
    {
      label: "couple",
      value: "couple",
    },
    {
      label: "family",
      value: "family",
    },
  ];

  const arr = [
    {
      id: 1,
      pic: "data:image/jpeg;base64,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6n4OVQ/7ab9m7+Fc3aVHJG7DIwsNr2ILTbtzUb9RYWRvSd++5ptHIpIF7vov1yimTa0LD6FHM40zeEC7DiEvNrbgFuelyQcuxXEqq6FhN7t1R5ObXdz4uWQPMYSb+jtKtVdPD/w0eL5Xt73K3Vxvw8uwIiLecwKvOmDaQbTcAxFxks4SEdVpa9twD8Ygn0XVhqrumuaURRswjg4gcfMy9cYT2dXPvz7Frrcxl3k5J4qF+n8/biU5UOSnaTa3NYZnXNuZW/G3DZjRd7rAAcycgFzraHr1K7vwRPui/YPGle/D1Y22xHzQ9wIw25uwm/d6QrZMEoyDWkAW872hYt1djtpKWKAAXa0F5+NIc3uPpv8AQuyr8KKUUmeQxmMdes5rbZdn337yH7wQV7gG08UefnPc9uQ7Gjt7zp2FRobq7V1dLd9teK617ut74do97bqq1UR0IsjTxtSnG0UvDUgew4tpMGCopw/PKRskWn5XWBJ7wFt7XbXYPcaXE88zJGAPG7s/AKYos+xiaalaU3fRdhVX4NbXkBc9+BxGXuoFjn72PIDMZXOi3dmUm1oy5ksAljvZrxLHiAtqSXAu8LX+pWQil7NGpaO6ZHKanqGtAMWf6bPas2Co+R/eb7V3UWPZolnZweFUfJfvN9qwytqr5Q3Hbib/ABKSIs+zQzMjQZVH4K3iW/xJwKr5MetvtUlRMiGZkTkgrc7RN9bfatZsNa5oJpy03IsXR3sDYOycRY69qmqLORDMyIU9JVg/ideeJno98uhHST82fS32rvomRDMyPVkcsbcRvbnaxt425Kn9/a3iVOZvhYG/SXf6l9Aqs9+ujjil1RSZSnN8RPVce1hPmO7tD3c9Nem3H4To8l4inRrZqmmlk/qVH2hfpclRE5jix7S17TZzXCxB7CCsJeqGU9a6itdFp9C8chdK7FaINAc2+riRhIHKwDhfvVtKn+hOmxSzy47FrQ3B8YPN8R7hhsPEq4F0MOrU0eQ5Wd8VLu9PPt4hERbznBVl000U8kUHDY58TXOxhoJOIgBpwjMi2PPvVmooyjmVjbQrOjUVRK9j5o3e3Hrql92QljQPxkgLGegkXcfAFWJuf0XPp6mOpqZmSFhxCNgcRj96S51sgc9NQPTaaKEaMVqWq3KNaonFaJhERbSgEREAREQBERAEREAREQBERAEREAREQBERARrerc+nrW9cYJQOrM0DEOwH47e4+iypHerdSponHiMvHfKVoJY70+9PcfpX0msckYcC1wBB1BFwfEFap0lPXiXcNjqlBZd49H06PTqKv6DqRmComz4hc1ncGWxCx5kkm/gFai1KGgihbhiiZG298LGhov22A1W2pQjljY04mt7aq6nSERFM0BERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/2Q==",
      name: "Germanto suris",
      price: 2.99,
    },
    {
      id: 2,
      pic: "https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_212915_PCE_LT",
      name: "Pilno riebumo pienas",
      price: 1.99,
    },
    {
      id: 3,
      pic: "https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_212915_PCE_LT",
      name: "Pilno riebumo pienas",
      price: 1.99,
    },
    {
      id: 4,
      pic: "https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_212915_PCE_LT",
      name: "Pilno riebumo pienas",
      price: 1.99,
    },
    {
      id: 5,
      pic: "https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_212915_PCE_LT",
      name: "Pilno riebumo pienas",
      price: 1.99,
    },
    {
      id: 6,
      pic: "https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_212915_PCE_LT",
      name: "Pilno riebumo pienas",
      price: 1.99,
    },
    {
      id: 7,
      pic: "https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_212915_PCE_LT",
      name: "Pilno riebumo pienas",
      price: 1.99,
    },
    {
      id: 8,
      pic: "https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_480,q_auto,w_480/d_ecommerce:backend-fallback.png/MAT_212915_PCE_LT",
      name: "Pilno riebumo pienas",
      price: 1.99,
    },
  ];
  return (
    <div className="App">
      <Mood />

      <br />
      {buttons.map((button) => (
        <button key={button.value} onClick={() => setActiveMenu(button.value)}>
          {button.label}
        </button>
      ))}
      {/*
      OR
      <button onClick={() => setActiveMenu("single")}>Single</button>
      <button onClick={() => setActiveMenu("couple")}>Couple</button>
      <button onClick={() => setActiveMenu("family")}>Family</button> */}
      <MeniuList customerType={activeMenu} />
      <br />
      {/* <Product
        image={
          "https://per4mmedia.com/wp-content/uploads/2021/11/mk2-2022-IG.jpg"
        }
        title={"Volkswagen GOLF MK2 2022 Calendar"}
        price={10.0}
        description={[
          "12 unique designs",
          "All pieces are printed on heavyweight 200 gsm art paper.",
          "Limited to 50 pieces",
          "One size:",
          "11.7x16.5 inch/(297x420mm",
        ]}
        availability={10}
        category={"Calendars"}
      /> */}
      <br />
      <ProductsList arr={arr} />
    </div>
  );
}

export default App;
