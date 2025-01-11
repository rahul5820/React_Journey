import { useState } from "react";

function Checkbox() {
  const [Country, setCountry] = useState([
    { Name: "india", Checked: false },
    { Name: "USA", Checked: false },
    { Name: "UK", Checked: false },
  ]);

  function checkClickHandler(index) {
    // Country[index].Checked = !Country[index].Checked;
    Country[index].Checked = !Country[index].Checked;
    setCountry([...Country]);
  }
  let Deleteshit = (index) => {
    Country.splice(index, 1);
    setCountry([...Country]);
  };
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {Country.map((Country, index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              <input
                type="checkbox"
                checked={Country.Checked}
                onClick={() => checkClickHandler(index)}
              />
              <li key={index}>
                {Country.Name}
                {Country.Checked ? (
                  <span onClick={() => Deleteshit(index)}> &#x2715;</span>
                ) : (
                  ""
                )}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Checkbox;
