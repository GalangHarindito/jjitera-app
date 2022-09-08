import Tab from "../../element/tab/tab";
import ProfileForm from "../../form/editProfileForm/profile/profile";
import CompanyForm from "../../form/editProfileForm/company/company";
import AddressForm from "../../form/editProfileForm/address/address";
import { Image } from "antd";
import "./style.css";

type IProfile = {
  data: any;
};

const EditProfile = (props: IProfile) => {
  const { data } = props;
  const tabContent = [
    { header: "Profile", component: <ProfileForm profile={data} /> },
    { header: "Company", component: <CompanyForm profile={data} /> },
    { header: "Address", component: <AddressForm profile={data} /> },
  ];

  return (
    <>
      {data && (
        <div className="editProfile">
          <div className="image">
            <Image
              width={200}
              style={{ backgroundColor: "#E8E8E8" }}
              src={`https://avatars.dicebear.com/v2/avataaars/${data.username}.svg?options[mood][]=happy`}
            />
          </div>
          <Tab content={tabContent} />;
        </div>
      )}
    </>
  );
};

export default EditProfile;
