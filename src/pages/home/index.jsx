import './style.css';

function Home() {
  return (
    <div className="calculadora">
      <p id="resultado"></p>
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              <button className="colspan2 softGrey">{'<'}</button>
            </td>
            <td>
              <button className="softGrey">c</button>
            </td>
            <td>
              <button className="yellow">x</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="grey">1</button>
            </td>
            <td>
              <button className="grey">2</button>
            </td>
            <td>
              <button className="grey">3</button>
            </td>
            <td>
              <button className="yellow">/</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="grey">4</button>
            </td>
            <td>
              <button className="grey">5</button>
            </td>
            <td>
              <button className="grey">6</button>
            </td>
            <td>
              <button className="yellow">+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="grey">7</button>
            </td>
            <td>
              <button className="grey">8</button>
            </td>
            <td>
              <button className="grey">9</button>
            </td>
            <td>
              <button className="yellow">-</button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button className="colspan2 grey">0</button>
            </td>
            <td>
              <button className="grey">.</button>
            </td>
            <td>
              <button className="yellow">=</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
