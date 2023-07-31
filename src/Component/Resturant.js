import { useState } from "react";
import Menu from "./MenuAPI.js";
import Menucard from "./Menucard.js";
import Navbar from "./Navbar.js";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu)
      return
    }
    const updateList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updateList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />

      <Menucard menuData={menuData} />
    </>
  );
};

export default Resturant;
