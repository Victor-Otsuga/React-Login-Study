
import '../style/style.css'
import Main from '../routes/MainPage.jsx';


function Login() {
  return (
    <>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Login;
