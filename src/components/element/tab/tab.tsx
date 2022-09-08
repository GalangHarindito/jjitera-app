import { Tabs } from "antd";
import React from "react";

type ITab = {
  content: any;
};

const Tab = (props: ITab) => {
  const { content } = props;

  return (
    <Tabs
      defaultActiveKey="1"
      centered
      items={content.map((el: any, i: number) => {
        const id = String(i + 1);
        return {
          label: el.header,
          key: id,
          children: el.component,
        };
      })}
    />
  );
};

export default Tab;
