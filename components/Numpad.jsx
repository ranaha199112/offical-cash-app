import React, { useState } from "react";

function Numpad() {
  const [pin, setPin] = useState("");

  console.log(pin);
  return (
    <div className="mx-40">
      <h1 className="text-xl">Numpad</h1>
      <div className="mt-10">
        <div>{pin}</div>
        <div className="space-y-10 text-3xl">
          <div className="space-x-40">
            <button onClick={() => setPin((pin) => `${pin}1`)}>1</button>
            <button onClick={() => setPin((pin) => `${pin}2`)}>2</button>
            <button onClick={() => setPin((pin) => `${pin}3`)}>3</button>
          </div>
          <div className="space-x-40">
            <button onClick={() => setPin((pin) => `${pin}4`)}>4</button>
            <button onClick={() => setPin((pin) => `${pin}5`)}>5</button>
            <button onClick={() => setPin((pin) => `${pin}6`)}>6</button>
          </div>
          <div className="space-x-40">
            <button onClick={() => setPin((pin) => `${pin}7`)}>7</button>
            <button onClick={() => setPin((pin) => `${pin}8`)}>8</button>
            <button onClick={() => setPin((pin) => `${pin}9`)}>9</button>
          </div>
          <div>
            <button
              onClick={() => setPin((pin) => pin.slice(0, pin.length - 1))}
            >
              &lt;
            </button>
            <button onClick={() => setPin((pin) => `${pin}0`)}>0</button>
            <button onClick={() => setPin("")}>C</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numpad;
