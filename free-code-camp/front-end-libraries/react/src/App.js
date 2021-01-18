import "./App.css";
import MyForm from "./components/controlled-form";
import ControlledInput from "./components/controlled-input";
import MyApp from "./components/pass-state-as-prop-to-child-component";
import MyApp2 from "./components/pass-a-callback-as-props";
import MyComponent from "./components/component-did-mount";
import MyComponent2 from "./components/add-event-listeners";
import Controller from "./components/should-component-update";
import Colorful from "./components/inline-styles";
import MagicEightBall from "./components/javascript-in-react-render-method";
import MyComponent3 from "./components/render-with-if-else";
import MyComponent4 from "./components/concise-condition";
import CheckUserAge from "./components/ternary-expression-in-jsx";
import GameOfChance from "./components/conditionality-from-props";
import GateKeeper from "./components/conditionality-from-state";
import MyToDoList from "./components/render-with-array-map";
import Frameworks from "./components/give-sibling-element-a-key";
import MyComponent5 from "./components/filter-with-array-filter";

function App() {
  return (
    <>
      <ol>
        <li>
          React: Create a Controlled InputPassed
          <ControlledInput />
        </li>
        <li>
          React: Create a Controlled Form
          <MyForm />
        </li>
        <li>
          React: Pass State as Props to Child Components
          <MyApp />
        </li>
        <li>
          React: Pass a Callback as Props
          <MyApp2 />
        </li>
        <li>
          React: Use the Lifecycle Method componentDidMount
          <MyComponent />
        </li>
        <li>
          React: Use the Lifecycle Method componentDidMount
          <MyComponent2 />
        </li>
        <li>
          React: Optimize Re-Renders with shouldComponentUpdate
          <Controller />
        </li>
        <li>
          React: Add Inline Styles in React
          <Colorful />
        </li>
        <li>
          React: Use Advanced JavaScript in React Render Method
          <MagicEightBall />
        </li>
        <li>
          React: Render with an If-Else Condition
          <MyComponent3 />
        </li>
        <li>
          React: Use && for a More Concise Conditional
          <MyComponent4 />
        </li>
        <li>
          React: Use a Ternary Expression for Conditional Rendering
          <CheckUserAge />
        </li>
        <li>
          React: Render Conditionally from Props
          <GameOfChance />
        </li>
        <li>
          React: Change Inline CSS Conditionally Based on Component State
          <GateKeeper />
        </li>
        <li>
          React: Use Array.map() to Dynamically Render Elements
          <MyToDoList />
        </li>
        <li>
          React: Give Sibling Elements a Unique Key Attribute
          <Frameworks />
        </li>
        <li>
          React: Use Array.filter() to Dynamically Filter an Array
          <MyComponent5 />
        </li>
      </ol>
    </>
  );
}

export default App;
