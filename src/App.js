import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <h1 className="title">Saas Dashboard</h1>
        <p className="info">AWS Project.</p>
        <button className="btn">Explore now</button>
      </div>
    </div>
  )
}

export default App
