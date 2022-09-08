import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

type DataProfile = {
  profile: any;
};

const CompanyForm = (props: DataProfile) => {
  const navigate = useNavigate();
  const { profile } = props;
  const { company } = profile;

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(company);
  }, [form, company]);

  const onFinish = (values: any) => {
    const myJSON = JSON.stringify(values);
    message.success(`Changes Successful, ${myJSON}`);
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error(`Changes Failed, ${errorInfo}`);
  };

  const onBack = () => {
    navigate("/");
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 8 },
      sm: { span: 8 },
      md: { span: 8 },
      lg: { span: 8 },
    },
  };

  return (
    <div>
      {profile && (
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          initialValues={company}
          {...formItemLayout}
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="CatchPhrase"
            name="catchPhrase"
            rules={[
              { required: true, message: "Please input your catchPhrase!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Bs"
            name="bs"
            rules={[{ required: true, message: "Please input your bs!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button style={{ marginRight: "1rem" }} onClick={onBack}>
              Back
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default CompanyForm;
