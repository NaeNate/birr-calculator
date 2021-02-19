import "./App.css";

const request = require("request");
const APIKey = "c69bbfff3ddc8542801b4f5744cadf1e";
let conversionRate;
const display = document.getElementById("display");

request(
  `http://api.currencylayer.com/live?access_key=${APIKey}&currencies=ETB`,
  (error, response, body) => {
    const parsedBody = JSON.parse(body);
    conversionRate = Math.round(parsedBody.quotes.USDETB * 1000) / 1000;
  }
);

function App() {
  const handleAddToDisplay = (e) => {
    if (e.target.name === "BirrToDollar") {
      document.getElementById("display").value += conversionRate;
    } else if (e.target.name === "times") {
      document.getElementById("display").value += "*";
    } else {
      document.getElementById("display").value += e.target.value;
    }
  };

  const handleClear = () => {
    document.getElementById("display").value = "";
  };

  const handleCalculate = (e) => {
    document.getElementById("display").value =
      Math.round(eval(document.getElementById("display").value) * 1000) / 1000;
  };

  return (
    <div className="calculator">
      <form>
        <table id="table">
          <tbody>
            <tr>
              <td colSpan="5">
                <input type="text" name="display" id="display" />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  className="button"
                  name="one"
                  value="1"
                  onClick={handleAddToDisplay}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  name="two"
                  value="2"
                  onClick={handleAddToDisplay}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  name="three"
                  value="3"
                  onClick={handleAddToDisplay}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  name="plus"
                  value="+"
                  onClick={handleAddToDisplay}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  id="clear"
                  name="clear"
                  value="C"
                  onClick={handleClear}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  className="button"
                  name="four"
                  value="4"
                  onClick={handleAddToDisplay}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  name="five"
                  value="5"
                  onClick={handleAddToDisplay}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  name="six"
                  value="6"
                  onClick={handleAddToDisplay}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  name="minus"
                  value="-"
                  onClick={handleAddToDisplay}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  className="button"
                  name="seven"
                  value="7"
                  onClick={handleAddToDisplay}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  name="eight"
                  value="8"
                  onClick={handleAddToDisplay}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  name="nine"
                  value="9"
                  onClick={handleAddToDisplay}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  name="times"
                  value="x"
                  onClick={handleAddToDisplay}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  name="BirrToDollar"
                  value="Br"
                  onClick={handleAddToDisplay}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  className="button"
                  name="decimal"
                  value="."
                  onClick={handleAddToDisplay}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  name="zero"
                  value="0"
                  onClick={handleAddToDisplay}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  name="doit"
                  value="="
                  onClick={handleCalculate}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="button"
                  name="div"
                  value="/"
                  onClick={handleAddToDisplay}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
