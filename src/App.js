import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
 

const App =() =>  {
  const pageSize=5;
  // apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = '41875034ddda46cfb420ae35965f7282'
   
  const [progress, setProgress] = useState(0) 
 
 
   
     return (
       
      <div>
      <Router>
        <Navbar />
         
      <LoadingBar
      height={3}
        color='#f11946'
        progress={progress}
         
      />
        <Routes>
          <Route path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='us' category='general' />}></Route>
          <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='us' category='business' />}></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='us' category='entertainment' />}></Route>
          <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='us' category='health' />}></Route>
          <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country='us' category='science' />}></Route>
          <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='us' category='sports' />}></Route>
          <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='us' category='technology' />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;

// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
 

// export default class App extends Component {
//   pageSize=5;
//   // apiKey = process.env.REACT_APP_NEWS_API;
//   apiKey = '41875034ddda46cfb420ae35965f7282'
  
//   state = {
//     progress:0
//   }
//   setProgress = (progress) => {
//     setState({progress: progress})

//   }
//    render() {
//      return (
       
//       <div>
//       <Router>
//         <Navbar />
         
//       <LoadingBar
//       height={3}
//         color='#f11946'
//         progress={state.progress}
         
//       />
//         <Routes>
//           <Route path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='us' category='general' />}></Route>
//           <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='us' category='business' />}></Route>
//           <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='us' category='entertainment' />}></Route>
//           <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='us' category='health' />}></Route>
//           <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country='us' category='science' />}></Route>
//           <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='us' category='sports' />}></Route>
//           <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='us' category='technology' />}></Route>
//         </Routes>
//       </Router>
//     </div>
//   )
// }
// }

