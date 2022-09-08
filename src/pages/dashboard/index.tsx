/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { useEffect } from "react";
import CardProfile from "../../components/fragment/cardProfile/cardProfile";
import { fetchUsers } from "../../service/users";
import { Col, Row } from "antd";
import { AppContext } from '../../hooks/store';

const Dashboard = () => {
  const {state, dispatch} = useContext(AppContext);

  const fetchData = async () => {
    const users = await fetchUsers();
    const { status, data } = users;

    if (status === 200) {
      dispatch({ type: 'GET_USER', payload: data });
    }
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="layout">
      <Row gutter={[40, 24]} justify="center" align="middle">
        {state.user &&
          state.user.map((item: any) => {
            return (
              <Col key={item.id}>
                <CardProfile datas={item} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Dashboard;