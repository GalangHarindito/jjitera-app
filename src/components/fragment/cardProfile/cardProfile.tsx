import React, { useState } from "react";
import {
  EditOutlined,
  DeleteFilled,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import "./style.css";
import { Card, Typography, Skeleton, Tooltip, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";


type ICardProps = {
  datas: any;
};

const { Text, Title } = Typography;

const CardProfile = (props: ICardProps) => {
  const { datas } = props;

  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
  };

  const handleLikes = () => {
    if (like) {
      return <HeartFilled style={{ color: "#fe251b" }} />;
    }
    return <HeartOutlined style={{ color: "#fe251b" }} />;
  };

  const text = 'Are you sure to delete this user?';

  const confirm = () => {
    message.info('Clicked on Yes.');
  };

  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          datas ? (
            <img
              style={{ backgroundColor: "#E8E8E8", width: 300 }}
              alt="example"
              src={`https://avatars.dicebear.com/v2/avataaars/${datas.username}.svg?options[mood][]=happy`}
            />
          ) : (
            <Skeleton.Image style={{ width: 300 }} active={datas} />
          )
        }
        actions={[
          <Tooltip placement="bottom" title={"Like!"}>
            <div onClick={handleClick}>{handleLikes()}</div>
          </Tooltip>,
          <Tooltip placement="bottom" title={"Edit Profile"}>
            <Link to={`/profile?id=${datas.id}`}><EditOutlined key="edit"/></Link>
          </Tooltip>,
          <Tooltip placement="bottom" title={"Delete Profile"}>
            <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <DeleteFilled key="delete" />
            </Popconfirm>
            
          </Tooltip>,
        ]}
      >
        <Skeleton loading={!datas} active>
          <Title level={5}>{datas.name}</Title>
          <div className="profile">
            <PhoneOutlined />
            <Text className="texProfile">{datas.phone}</Text>
          </div>
          <div className="profile">
            <MailOutlined />
            <Text className="texProfile">{datas.email}</Text>
          </div>
          <div className="profile">
            <GlobalOutlined />
            <Text className="texProfile"><a href={`https://avatars.dicebear.com/v2/avataaars/${datas.username}.svg?options[mood][]=happy"`}>{datas.website}</a></Text>
          </div>
        </Skeleton>
      </Card>
    </div>

  );
  
};

export default CardProfile;
