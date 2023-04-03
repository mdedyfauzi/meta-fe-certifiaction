import data from '../../assets/data/works.json';
import Card from '../../components/card';
import './styles.css';

const Project = () => {
  return (
    <section id="project" className="project">
      <div>
        <h1>Here's some of my project</h1>
        <div>
          {data.map((item, index) => (
            <Card title={item.title} description={item.description} link={item.link} cover={item.cover} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
