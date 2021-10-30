import './App.css';
import Update from './parrent/hoc';
import Click from './child/onclick';
import Hover from './child/m-over';
import Clicks from './child/dummy';

const Updateclick=Update(Click)
const Updateclicks=Update(Clicks)
const Updatehover=Update(Hover)
function App() {
  return (
    <div className="App">
     <Updateclick />
     <Updatehover />
     <Updateclicks />

    </div>
  );
}

export default App;
