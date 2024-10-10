import { useLocation, useParams } from "react-router-dom";

function CardInfoPage() {
  let location = useLocation();
  console.log("location", location);

  let params = useParams();

  return (
    <>
      <h2>
        ID: {location.state?.thisCard?.id ? location.state.id : params.id}
      </h2>
    </>
  );
}

export default CardInfoPage;
