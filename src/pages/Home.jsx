import React from "react";
import { Img, Text, Button  } from "components";
import SelectedMenuOptionAtom from "../atoms/selectedMenuOption.atom.ts"
import  { useRecoilState } from "recoil";
import MainPage from "./mainPage/mainPage.jsx";
import Register from "./register/register.jsx";
import MainPage2 from "./mainPage/mainPage2.jsx"

const Home = () => {
  const [menuOption, setMenuOption] = useRecoilState(SelectedMenuOptionAtom);

  const renderSite = () => {
    switch(menuOption){
      case "Home":
        return <MainPage2/>;
      case "Register":
        return <Register/>; 
    }
  }

  return (
<MainPage2 />
  );
};
export default Home;
