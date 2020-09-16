import React from "react";

import Select from "react-select";
import { Multiselect } from "multiselect-react-dropdown";
import makeAnimated from "react-select/animated";
import { categoriesOptions } from "../data/data.js";

// npm install multiselect-react-dropdown

const animatedComponents = makeAnimated();

export default class CategoriesMultiselect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      categories: ["WTF", "Funny", "Animals", "Dogs", "Cats"],
      categoriesSelected: [],
    };
  }

  render() {
    return (
      <>
        <Multiselect
          id="multiCategory"
          options={categoriesOptions}
          selectionLimit="2"
          displayValue="value"
        />
      </>
    );
  }
}

// export default function CategoriesMultiselect() {
//   return (
//     <>
//       {/* <Select
//         closeMenuOnSelect={false}
//         components={animatedComponents}
//         defaultValue={[]}
//         isMulti
//         options={categoriesOptions}
//       /> */}

//       <Multiselect id= 'multiCategory'
//         options={categoriesOptions}
//         selectionLimit="2"
//         displayValue="value"

//       />

//     </>
//   );
// }
