import AddCardWrapper from "../components/AddCardWrapper/AddCardWrapper";

// redux toolkit

import { useSelector } from "react-redux";

function AddCardPage() {
  let theme = useSelector((store) => store.settings.theme);
  return (
    <div className={theme}>
      <AddCardWrapper />
    </div>
  );
}

export default AddCardPage;
