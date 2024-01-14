import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const inputRef = useRef();
  useEffect(() => {
    // document.getElementById("text").focus();
    inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    // document.getElementById("text").focus();
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        id="text"
        type="text"
        placeholder="Enter text here"
      />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
