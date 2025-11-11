const type = 2

const getArticle = () => {
  if (type === 1) {
    return <div>无图模式模版</div>
  } else if (type === 2) {
    return <div>有图模式模版</div>
  }
}

function App() {
  return (
    <div className="App">
      {getArticle(type)}
    </div>
  );
}

export default App;
