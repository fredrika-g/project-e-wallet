import styles from "./SettingsWrapper.module.css";

import { useState } from "react";

// redux toolkit
import { useSelector, useDispatch } from "react-redux";

import { changeTheme } from "../../redux/siteSettingsSlice";

import { deleteInactive } from "../../redux/cardSlice";

// react router
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// components
import SettingsForm from "../SettingsForm/SettingsForm";
function SettingsWrapper() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  // getting current theme setting from redux store
  let theme = useSelector((store) => store.settings.theme);
  //   getting theme options from store
  let themeOptions = useSelector((store) => store.settings.themeOptions);

  //   local states
  const [themeInput, setThemeInput] = useState(theme);
  const [msg, setMsg] = useState("");

  function handleInput(value) {
    setThemeInput(value);
  }

  function handleSave() {
    if (themeInput !== "") {
      dispatch(changeTheme(themeInput));
    }
  }

  function handleDelete() {
    dispatch(deleteInactive());

    setMsg("Inactive cards deleted");
  }
  return (
    <>
      <section className={styles.wrapper}>
        <SettingsForm
          currentTheme={theme}
          themeOptions={themeOptions}
          handleInput={handleInput}
          handleSave={handleSave}
        />
        <div>
          <button className={styles.danger} onClick={handleDelete}>
            Delete All Inactive Cards
          </button>
          {msg && <p>{msg}</p>}
        </div>
        <Link to="/">
          <button>
            <i className="fa-solid fa-house"></i> <span>Go back</span>
          </button>
        </Link>
      </section>
    </>
  );
}

export default SettingsWrapper;
