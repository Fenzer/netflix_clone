import React, { useState, useContext, useEffect } from "react";
import { SelectProfileContainer } from "../containers/profiles";
import { FirebaseContext } from "../context/firebase";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log("profile", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile, profile.DisplayName]);

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}
