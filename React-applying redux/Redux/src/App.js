// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Header from "./feature/website/Header";
// import Footer from "./feature/website/Footer";
// import Home from "./feature/website/Home";
// import Add_data from "./feature/website/Add_data";
// import Manage_contact from "./feature/website/Manage_contact";
// import Add_Contact from "./feature/website/Add_contact";

// function App() {
//   return (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<> <Header/> <Home/> <Footer/> </>}></Route>
//             <Route path="/add_data" element={<> <Header/> <Add_data/> <Footer/> </>}></Route>
//             <Route path="/manage_contact" element={<> <Header/> <Manage_contact/> <Footer/> </>}></Route>
//             <Route path="/add_contact" element={<> <Header/> <Add_Contact/> <Footer/> </>}></Route>
//         </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./features/website/Header";
import Header from "./Feature/website/Header"
import Footer from "./Feature/website/Footer"
import Home from "./Feature/website/Home"
import AddData from "./Feature/website/Add_data";
import Mng_contact from "./Feature/website/Manage_contact";
import Add_contact from "./Feature/website/Add_contact";
import Edit_data from "./Feature/website/Edit_data";
import Edit_contact from "./Feature/website/Edit_contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<><Header /><Home /><Footer /></>}></Route>
          <Route path="/Home" element={<><Header /><Home /><Footer /></>}></Route>
          <Route path="/Add_data" element={<><Header /><AddData /><Footer /></>}></Route>
          <Route path="/Add_contact" element={<><Header /><Add_contact /><Footer /></>}></Route>
          <Route path="/Mng_contact" element={<><Header /><Mng_contact /><Footer /></>}></Route>
          <Route path="/edit_data/:id" element={<> <Header /> <Edit_data/><Footer /> </>}></Route>
          <Route path="/edit_contact/:id" element={<> <Header /> <Edit_contact/><Footer /> </>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

