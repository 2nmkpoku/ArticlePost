import React from 'react'
//import logo from './logo.svg'
import './App.css';
import ArticlePost from './ArticlePost'

function App(){
  //render(){
  return(
    <div className='App'>
      <header className= "App-header">
      <div>
      <h1>Barstool Articles</h1>
      <ArticlePost/>

    </div>
    </header>
    </div>
  )
}

/*function App() {

  const [articles, setArticles]= useStates([])

  useEffect(()=>{
    fetch(" https://www.jalirani.com/files/barstool.json")
    .then(response=>response.json())
    .then((data)=> {setArticles(data)})
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
