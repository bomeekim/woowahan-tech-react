import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  title: string;
  color: string;
}

function App(props: AppProps) {
  return <h1>{props.title}</h1>;
}

/**
 * React 엘리먼트를 container DOM에 렌더링하고 컴포넌트에 대한 참조를 반환
 * 최상위에서 한번만 호출된다.
 * @param element 컴포넌트 인자
 * @param container
 */
ReactDOM.render(
  <React.StrictMode>
    <App title="Woowahan Tech React" color="red" />
  </React.StrictMode>,
  document.getElementById("root")
);
