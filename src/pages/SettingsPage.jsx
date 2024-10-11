// components
import SettingsWrapper from "../components/SettingsWrapper/SettingsWrapper";

// redux toolkit
import { useSelector } from "react-redux";

function SettingsPage() {
  let theme = useSelector((store) => store.settings.theme);
  return (
    <div className={theme}>
      <SettingsWrapper />
    </div>
  );
}

export default SettingsPage;
