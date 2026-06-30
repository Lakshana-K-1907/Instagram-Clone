import Side from "./Sidebar";
import Feed from "./Feed";
import Suggestions from "./Suggestions.jsx";

function App() {
  return (
    <div className="d-flex vh-100">
      <Side />
      <div className="feed"><Feed /></div>
      <div className="suggestions"><Suggestions /></div>
    </div>
  );
}

export default App;