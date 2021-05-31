import React from "react";
import PropTypes from "prop-types";

function Profile({
  myinfo: { name, lastName, profession, phoneNumber, adress, bio, imgSrc },
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "2px solid blue",
        borderRadius: "1rem",
        width: "30%",
        padding: "1%",
      }}
    >
      <img src={imgSrc} />
      <div
        style={{
          diplay: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h1>
          {name} {lastName}
        </h1>
        <p>
          <b>Profession :</b> {profession}
        </p>
        <p>
          <b>Phone:</b> {phoneNumber}
        </p>
        <p>
          <b>Adress:</b> {adress}
        </p>
        <p>
          <b>Bio:</b> {bio}
        </p>
      </div>
    </div>
  );
}

Profile.defaultProps = {
  myinfo: {
    name: "undefined",
    lastName: "undefined",
    profession: "undefined",
    phoneNumber: "undefined",
    adress: "undefined",
    bio: "undefined",
  },
};
Profile.propTypes = {
  myinfo: PropTypes.objectOf(PropTypes.string),
};

export default Profile;
