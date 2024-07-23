import Navbar  from "./components/Navbar/Navbar";
import Header  from "./components/Header/Header";
import Skill  from "./components/Skills/Skill";
import Works  from "./components/works/Works";
import Contact  from "./components/Contact/Contact";
import Footer  from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
