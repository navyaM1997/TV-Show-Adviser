import { Search } from "react-bootstrap-icons";
import style from "./style.module.css";
import { useState } from "react";
export const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Search size={27} className={style.icon} />
      <input
        onKeyUp={submit}
        onChange={handleChange}
        className={style.input}
        type="text"
        value={value}
        placeholder={"search a tv show you may like"}
      />
    </>
  );
};
