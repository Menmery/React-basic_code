const flag = false

function App() {
  return (
    <div className="App">
      {/* 逻辑与运算符 */}
      {flag && <h1>Welcome to React</h1>}
      {/* 三元运算符 */}
      {flag ? <h1>Welcome to React</h1> : <h1>Sorry, you are not authorized to access this page</h1>}
    </div>
  );
}

export default App;
