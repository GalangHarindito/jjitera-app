import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

type DataProfile = {
  profile: any;
};

const AddressForm = (props: DataProfile) => {
  const navigate = useNavigate();
  const { profile } = props;
  const { address } = profile;

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(address);
  }, [form, address]);

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
          initialValues={address}
          {...formItemLayout}
          form={form}
        >
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Please input your city!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Street"
            name="street"
            rules={[{ required: true, message: "Please input your street!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Suite"
            name="suite"
            rules={[{ required: true, message: "Please input your suite!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Zip Code"
            name="zipcode"
            rules={[{ required: true, message: "Please input your zipcode!" }]}
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

export default AddressForm;
