import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../hooks/store";
import EditProfile from "../../components/fragment/editProfile/editProfile";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");

  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }

  const { state } = useContext(AppContext);
  const [profile, setProfile] = useState({
    email: "",
    name: "",
    phone: "",
    username: "",
    website: "",
    company: {
      bs: "",
      catchPhrase: "",
      name: "",
    },
    address: {
      city: "",
      geo: { lat: "", lng: "" },
      street: "",
      suite: "",
      zipcode: "",
    },
  });

  useEffect(() => {
    const filter = state.user.filter(
      (item: { id: string | null }) => item.id?.toString() === id
    );
    setProfile(filter[0]);
  }, [state.user, id]);

  return (
    <>
      {profile ? (
        <div className="layout">
          <EditProfile data={profile} />
        </div>
      ): goBack()}
    </>
  );
};

export default Profile;
