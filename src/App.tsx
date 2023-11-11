import "./App.css";
import { Footer } from "./layout/footer/Footer";
import { Skills } from "./layout/skills/Skills";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { About } from "./layout/about/About";
import { Projects } from "./layout/projects/Projects";
import { Form } from "./layout/form/Form";
// import styled from "styled-components";


const SkillItems = [
  { icon: "js", title: "javascript" },
  { icon: "ts", title: "TYPESCRIPT" },
  { icon: "mongo", title: "MONGO DB" },
  { icon: "postgresql", title: "POSTGRESQL" },
  { icon: "jest", title: "JEST" },
  { icon: "express", title: "EXPRESS JS" },
  { icon: "nestjs", title: "NEST JS" },
  { icon: "docker", title: "DOKER" },
  { icon: "react", title: "REACT JS" },
  { icon: "reactnative", title: "REACT NATIVE" },
  { icon: "styledcomponent", title: "STYLED COMPONENT" },
  { icon: "redux", title: "redux" },
  { icon: "git", title: "git" },
];

function App() {
  return (
    <div className="App">
      <div className="wrapper">
          <Header />
          <Main />
          <About />
          <Projects />
          <Skills SkillItems={SkillItems} />
          <Form />
          <Footer />

      </div>
    </div>
  );
}

export default App;
