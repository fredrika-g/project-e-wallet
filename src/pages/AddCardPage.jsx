import Header from "../components/Header/Header";
import AddCardWrapper from "../components/AddCardWrapper/AddCardWrapper";

// redux toolkit

import { useSelector } from "react-redux";

function AddCardPage() {
  let theme = useSelector((store) => store.settings.theme);
  return (
    <div className={theme}>
      <Header />
      <AddCardWrapper />
    </div>
  );
}

export default AddCardPage;
