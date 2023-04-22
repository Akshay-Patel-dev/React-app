import React, { useEffect, useState } from "react";
import {  useAppDispatch } from '../../app/hooks';   
import './togglebutton.css'
import { setLanguage } from "../../features/Reducers/languageSlice";
import { changeSidebarPostion } from "../../features/Reducers/rtlSlice";


function ToggleButton() {
  const [selected, setSelected] = useState("Left");


  // const count = useAppSelector();
  const dispatch = useAppDispatch();


  
  useEffect(() => {
    if(selected === "Left"){
        dispatch(setLanguage("en"))
        dispatch(changeSidebarPostion("ltr"))
    }
    if(selected === "Middle"){
      dispatch(setLanguage("hn"))
      dispatch(changeSidebarPostion("ltr"))
    }
    if(selected === "Right"){
      dispatch(setLanguage("hi"))
      dispatch(changeSidebarPostion("rtl"))
    }

    
  }, [selected])

  const handleButtonClick = (value:string) => {
    setSelected(value);
  };

  return (
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      <button
        type="button"
        className={`btn ${
          selected === "Left" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("Left")}
      >
        English <span className="fi fi-us  mx-1"> </span> 
      </button>
      <button
        type="button"
        className={`btn  ${
          selected === "Right" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("Right")}
      >
        Hebrew <span className="fi fi-il mx-1"> </span> 
      </button>
      <button
        type="button"
        className={`btn  ${
          selected === "Middle" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("Middle")}
      >
        Hindi <span className="fi fi-in  mx-1"></span> 
      </button>
    </div>
  );
}

export default ToggleButton;
