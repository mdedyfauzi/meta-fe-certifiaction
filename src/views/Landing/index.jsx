import avatar from '../../assets/images/avatar.png';
import './styles.css';

const Landing = () => {
  return (
    <section className="landing">
      <div>
        <div>
          <img src={avatar} alt="avatar" />
          <p>Hello, I'm Maulana!</p>
        </div>
        <h1>A frontend developer specialised in React</h1>
      </div>
    </section>
  );
};

export default Landing;
