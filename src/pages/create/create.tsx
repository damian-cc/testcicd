import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, Row, Alert, Checkbox, Select } from "antd";
import { useTranslation } from "react-i18next";
import useAccount from "../../hooks/useAccount";

export default function Create() {
  const { t } = useTranslation("login");
  const [children, setChildren] = useState<React.ReactNode[]>();

  const [form] = Form.useForm<{
    media: Array<number>;
    type: Array<string>;
    gaoptions: Array<number>;
  }>();
  const mediaValue = Form.useWatch("media", form);
  const typeValue = Form.useWatch("type", form);

  const media = [
    { label: "SEM", value: 0 },
    { label: "RTB Display", value: 1 },
    { label: "Walled Gardens", value: 2 },
    { label: "OTT/CTV", value: 3 },
    { label: "TV (cable, spot, addressable)", value: 4 },
  ];
  const GAOptions = [
    { label: "DV360", value: 0 },
    { label: "Trade Desk", value: 1 },
    { label: "YouTube", value: 2 },
    { label: "Facebook/Instagram", value: 3 },
    { label: "Pinterest", value: 4 },
    { label: "Pandora", value: 5 },
    { label: "Roku", value: 6 },
    { label: "Others TBD", value: 7 },
  ];

  const { Option } = Select;

  const type = [
    { label: "Ghost Ads", value: "a" },
    { label: "Rolling Thunder", value: "b" },
  ];

  useEffect(() => {
    const ch: React.ReactNode[] = [];
    if (mediaValue?.includes(0) || mediaValue?.includes(4)) {
      ch.push(<Option key={type[1].value}>{type[1].label}</Option>);
    } else if (mediaValue?.includes(1) || mediaValue?.includes(2)) {
      ch.push(<Option key={type[0].value}>{type[0].label}</Option>);
      ch.push(<Option key={type[1].value}>{type[1].label}</Option>);
    }

    setChildren(ch);
  }, [mediaValue, typeValue]);

  const onFinish = (a: never) => {
    console.log(a);
  };

  return (
    <div>
      <Row justify={"space-around"}>
        <Card bordered={false} style={{ marginTop: "5em" }}>
          <Form
            // @ts-ignore
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Media"
              name="media"
              rules={[
                {
                  required: true,
                  message: "select something",
                },
              ]}
            >
              <Checkbox.Group options={media} />
            </Form.Item>

            {mediaValue?.length ? (
              <Form.Item
                label="Type"
                name="type"
                rules={[
                  {
                    required: true,
                    message: "select something",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                >
                  {children}
                </Select>
              </Form.Item>
            ) : null}

            {typeValue?.includes("a") &&
            (mediaValue?.includes(1) || mediaValue?.includes(2)) ? (
              <Form.Item
                label="Ghost Ads Options"
                name="gaoptions"
                rules={[
                  {
                    required: true,
                    message: "select something",
                  },
                ]}
              >
                <Checkbox.Group options={GAOptions} />
              </Form.Item>
            ) : null}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" block htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </div>
  );
}
