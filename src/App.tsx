import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>playground</h1>
      <nav>
        <ul>
          {['cart', 'dashboard'].map((route, index) => {
            return (
              <li key={index}>
                <Link to={route}>{route}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default App;
