import { GiConfirmed } from "react-icons/gi";

const ConfirmedBooking = () => {
  return (
    <div className="under-construction">
      <GiConfirmed style={{ fontSize: "100px", color: "#495E57" }} />
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
    </div>
  );
};

export default ConfirmedBooking;
