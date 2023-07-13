import styles from '../styles/Login.module.css';

function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.bg}></div>
      <div className={styles.container}>
        <h1>See what's happening</h1>
        <h2>Join Hackatweet today.</h2>
        <div>
            <button>Sign Up</button>
            <p>Already have an account</p>
            <button>Sign In</button>
        </div>
      </div>
    </main>
  );
}

export default Login;
