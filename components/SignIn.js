import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Button, Input, Form, Modal } from "antd";

import styles from "../styles/Login.module.css";

function SignIn(props) {
  const dispatch = useDispatch();

  let viewError;
  let connectionResult = false;


  const handleHidden = () => {
    props.setSignInVisible(false);
  };

  const onFinish = (values) => {
    const formBody = {
      username: values.username,
      password: values.password,
    };
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formBody),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          const { username, firstname, token } = data;
          dispatch(login({ firstname, username, token }));
          console.log('Success:', { firstname, username, token });
        } else {
          console.error('Failed:', data.error);
          connectionResult = true;
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
    viewError = <h3>{errorInfo}</h3>;
  };

  let modalContent = (
    <>
    {viewError}
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
    </Form>
    </>
  );
  if (connectionResult) {
    modalContent = (
    <Result
      status="success"
      title={"Welcolme "+username}
      subTitle=""
      extra={[]}
    />
    )
  }

  if (props.isVisible) {
    return (
      <div id="react-modals">
        <Modal
          getContainer="#react-modals"
          className={styles.modal}
          centered
          open={props.isVisible}
          closable={true}
          onCancel={handleHidden}
          footer={null}
        >
          <div className={styles.registerContainer}>
            <div className={styles.registerSection}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g>
              </svg>
              <p>Connect to Hackatweet</p>
              {modalContent}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignIn;
