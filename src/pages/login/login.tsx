import React from "react";
import { Form, Input, Button, Card, Row, Alert } from "antd";
import { useTranslation } from "react-i18next";
import useAccount from "hooks/useAccount";

export default function Login() {
  const { login, error, processing } = useAccount();
  const { t } = useTranslation("login");

  // @ts-ignore
  const errorMessage: string = t(`error.${error}`);

  return (
    <div
      style={{
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundImage:
          'url("https://wrc.net.pl/app/uploads/2021/09/elon-musk-zaprasza-na-parapetowke-680x345-c-center.jpg")',
      }}
    >
      <Row justify={"space-around"}>
        <Card bordered={false} style={{ marginTop: "5em" }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={login}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: t("input.email.required"),
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: t("input.password.required") },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                block
                htmlType="submit"
                disabled={processing}
              >
                {t("button.login")}
              </Button>
            </Form.Item>
            {error ? (
              <Alert type="error" message={errorMessage} banner />
            ) : null}
          </Form>
        </Card>
      </Row>
    </div>
  );
}
