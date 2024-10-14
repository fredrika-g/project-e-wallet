import Header from "../components/Header/Header";
import CardsWrapper from "../components/CardsWrapper/CardsWrapper";

import { useSelector } from "react-redux";
function HomePage() {
  let theme = useSelector((store) => store.settings.theme);
  return (
    <div className={theme}>
      <Header />
      <CardsWrapper />
    </div>
  );
}

export default HomePage;
