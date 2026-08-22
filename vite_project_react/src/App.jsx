import "./App.css";
import { useState } from "react"; //we will be using to handle data changing
import { useEffect } from "react";

//we can create other from the same card syntax and use it in app

const WelcomeMessage = ({ argument }) => {
  //argument plays the role of data arguments in regulair functions
  //useEffect hook:
  //runs the code when sth changes

  useEffect(() => {
    //js code can be run here
    console.log("useEffect is working");
  });

  //so that app can give it a value and manipulates inside the new component holder
  return (
    <h2 style={{ fontFamily: "Arial" }}>{argument}</h2> //we can style the elements by adding style property inside the htm elements
  );
};
//defining the app syntax
const App = () => {
  const [myvariable, setmyvariable] = useState(false); //this variable is controlled by useState  and 0 is the default value for the variable
  return (
    //or style using the class name and a seperate css file
    <div>
      <h1 className="myFirstLine">Hello World</h1>
      <WelcomeMessage argument="Argument 1" />
      <WelcomeMessage argument="Argument 2" />
      <WelcomeMessage argument="Argument 3" />
      <button
        onClick={() => {
          setmyvariable(!myvariable);
        }}
      >
        {myvariable ? "Clicked" : "Click"}
      </button>
    </div> //we will return components here
  );
};

export default App; //making our app the default thing to functionalize
