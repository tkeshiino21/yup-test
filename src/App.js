import React from "react";
// import BookList from "./components/BookList";
import Basic from "./components/Basic";
import { Hello, TwoDimensionalHello } from "./components/Hello";
import { items, twoDimensional } from "./components/Array";
import MyButton from "./components/MyButton";
import MyText from "./components/MyText";

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      {/* <BookList /> */}
      <div>
        <Basic name="World" color="blue" backgroundColor="yellow" />
        <Basic name="Ebisu" color="red" backgroundColor="green" />
        <Basic name="Osaki" color="white" backgroundColor="purple" />
        {items.map(item => (
          <Hello key={item.name} name={item.name} color={item.color} />
        ))}
        {twoDimensional.map(twoDimensional => (
          <TwoDimensionalHello
            key={twoDimensional[1].name}
            name={twoDimensional[1].name}
            color={twoDimensional[1].color}
          />
        ))}
        <section>
          <MyButton />
          <MyText />
        </section>
      </div>
    </div>
  );
}

export default App;
