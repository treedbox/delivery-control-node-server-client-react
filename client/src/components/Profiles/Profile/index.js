import React from "react";
import "./style.css";
import Picture from "../../Picture";
import Addresses from "../../Addresses";

const Profile = ({
  user,
  folder,
  alt,
  hidePicture,
  hideName,
  hideAddresses,
  hideEmail,
  hideRole
}) => (
  <article className="profile">
    {!hidePicture && (
      <Picture
        file={user ? user.picture : "unknown.png"}
        folder={folder}
        alt={alt}
      />
    )}
    {!hideName && <h3 className="name">{user ? user.name : "  ---  "}</h3>}
    {!hideEmail && <p className="email">{user ? user.email : ""}</p>}
    {!hideAddresses &&
      user.addresses && <Addresses addresses={user.addresses} />}
    {!hideRole && <p className="role">{user.role}</p>}
  </article>
);

export default Profile;
