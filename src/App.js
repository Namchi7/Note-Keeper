//CSS imports
import "./App.css";

//Component imports
import Header from "./components/Header";
import Notes from "./components/Notes";
import AddButton from "./components/AddButton";
import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header className="headerBody" />
      <Notes className="noteBody" />
      <CreateNote className="createANewNote" />
      <Footer className="pageFooter" />
      <AddButton className="addButton" />
    </div>
  );
}

export default App;
