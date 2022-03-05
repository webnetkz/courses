import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import General from './routers/General/General'
import Courses from './routers/Courses/Courses'
import Shop from './routers/Shop/Shop'
import News from './routers/News/News'
import './App.css';

function App() {
  return (
    <Routes> 
      <Route path="/" exact component={General} />
      <Route path="/courses" component={Courses} />
      <Route path="/shop" component={Shop} />
      <Route path="/news" component={News} />
    </Routes>
  );
}

export default App;
