import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import styles from '../styles/Login.module.css';

function SignUp() {
    const [isModalVisible, setIsModalVisible] = useState(false);
	const [signUpFirstname, setSignUpFirstname] = useState('');
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');


const handleRegister = () => {
    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
    }).then(response => response.json())
      .then(data => {
        if (data.result) {
          dispatch(login(signUpUsername));
          setSignUpFirstname('');
          setSignUpUsername('');
          setSignUpPassword('');
        }
      });
  };

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
};

let modalContent;
if (!user.isConnected) {
    modalContent = (
        <div className={styles.registerContainer}>
            <div className={styles.registerSection}>
                <p>Sign-up</p>
                <input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
                <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                <button id="register" onClick={() => handleRegister()}>Sign up</button>
            </div>

        </div>
    );
}

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.title}>Create your Hackatweet account</h1>
        {userSection}
      </div>

      {isModalVisible && <div id="react-modals">
        <Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisible} closable={false} footer={null}>
          {modalContent}
        </Modal>
      </div>}
    </header >
  );

}

export default SignUp;