import Layout from './components/layout';
import Contact from './views/Contact';
import Landing from './views/Landing';
import Project from './views/Project';

function App() {
  return (
    <div className="App">
      <Layout>
        <Landing />
        <Project />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
