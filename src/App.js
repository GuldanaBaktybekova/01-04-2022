
function App() {
  const example1 = ["apple", "red", "big"];
  const example2 = ["toyota", "camry",  "expensive","black"];
  const example4 =  ["toyota", "camry",  "expensive","black"];
  const [name, color, size] = example1;
  const [make, model, price, carColor] = example4;
  return (
    <div className="App">
     This {example1[0]} is {example1[1]} and {example1[2]}
     This {name} is {color} and {size}
     This {example4[0]}{example4[1]} is {example4[2]} and {example4[3]}
     This {make}{model} is {price} and {carColor}
    </div>
  );
}

export default App;
