import { useReducer } from "react";
import NavBarComponent from "./appcomponent/NavBarComponent";
import BodyComponent from "./appcomponent/BodyComponent";
import FooterComponent from "./appcomponent/FooterComponent";
import AdditionalInfo from "./appcomponent/AdditionalInfo";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBarComponent />

      <div className="flex-grow">
        <BodyComponent />
        <AdditionalInfo />
      </div>

      <FooterComponent />
    </div>
  );
};

export default App;
