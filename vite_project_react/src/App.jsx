
import './App.css'


//we can create other from the same card syntax and use it in app

const WelcomeMessage = ({argument}) =>{ //argument plays the role of data arguments in regulair functions

  //so that app can give it a value and manipulates inside the new component holder
     return (
       <h2>{argument}</h2>
     )
}
//defining the app syntax
const App = () => {

  return (
  <div>
      <h1>Hello World</h1>
       <WelcomeMessage argument="Argument 1" />
        <WelcomeMessage argument="Argument 2" />
         <WelcomeMessage argument="Argument 3" />
  </div> //we will return components here
 

  )
};

export default App; //making our app the default thing to functionalize 