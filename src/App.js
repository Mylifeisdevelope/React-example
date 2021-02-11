import React from "react";
import Items from "./Components/items";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsArr: [
        {
          name: "Honda",
          title: "SuperCar",
          year: 2014,
          value: "Honda"
        },
        {
          name: "Yamaha",
          title: "SuperBike",
          year: 2017,
          value: "Yamaha"
        },
        {
          name: "Suzuki",
          title: "SuperBike",
          year: 2011,
          value: "Suzuki"
        },
        {
          name: "Kawasaki",
          title: "SuperBike",
          year: 2021,
          value: "Kawasaki"
        }
      ]
    };
    this.hendler = this.hendler.bind(this);
  }
  hendler(name, value) {
    this.setState((prev) => ({
      ...prev,
      itemsArr: prev.itemsArr.map((i) => {
        if (i.name === name) {
          return {
            ...i,
            value: value
          };
        }
        return i;
      })
    }));
  }
  render() {
    return (
      <div className="App">
        <Items list={this.state.itemsArr} hendler={this.hendler} />
      </div>
    );
  }
}
export default App;
