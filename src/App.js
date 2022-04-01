import Paragraph from "./components/Paragraph/Paragraph";
import Example from "./components/Example/Example";
function App() {
  // const example1 = ["apple", "red", "big"];
  // const example2 = ["toyota", "camry",  "expensive","black"];
  // const example3 = {name: "pear", color:"yellow", size:"small"}
  
  // // const [name, color, size] = example1;
  // // const [make, model, price, carColor] = example2;
  // const {name, color, size} = example3
  return (
    <div className="App">

      <Example/>
     {/* {/* This {example1[0]} is {example1[1]} and {example1[2]}
     This {name} is {color} and {size}
     This {example4[0]}{example4[1]} is {example4[2]} and {example4[3]}
     This {make}{model} is {price} and {carColor} */}

    </div>
  );
}

export default App;
