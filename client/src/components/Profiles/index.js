import React from "react";
import "./style.css";
import Profile from "./Profile";

const Profiles = ({
  list,
  folder,
  alt,
  hideName,
  hideAddresses,
  hideEmail,
  hideRole
}) => (
  <section className="profiles">
    {list.map(e => (
      <Profile
        key={e.id}
        user={e}
        folder={folder ? folder : "users"}
        alt={alt ? alt : "Profile"}
        hideName={hideName}
        hideAddresses={hideAddresses}
        hideEmail={hideEmail}
        hideRole={hideRole}
      />
    ))}
  </section>
);

export default Profiles;
