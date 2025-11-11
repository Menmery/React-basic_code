const list = [
  { id: 1, name: 'vue' },
  { id: 2, name: 'react' },
  { id: 3, name: 'angular' }
]

function App() {
  return (
    <div className="App">
      <ul>
        {list.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
