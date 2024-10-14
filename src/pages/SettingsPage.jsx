// components
import Header from "../components/Header/Header";
import SettingsWrapper from "../components/SettingsWrapper/SettingsWrapper";

// redux toolkit
import { useSelector } from "react-redux";

function SettingsPage() {
  let theme = useSelector((store) => store.settings.theme);
  return (
    <div className={theme}>
      <Header />
      <SettingsWrapper />
    </div>
  );
}

export default SettingsPage;
