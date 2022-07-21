import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useValidate() {
  const toDoList = useSelector((state) => state);
  const [labelList, setLabelList] = useState([]);

  useEffect(() => {
    setLabelList(toDoList.map((item) => item.label));
  }, [toDoList]);

  const validate = (data) => {
    if (!data) return "Input required";
    if (labelList.includes(data)) return "Item already exist!";
    return "";
  };

  return validate;
}

export default useValidate;
