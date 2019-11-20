// @flow
import React from "react";
import { Link } from "react-router-dom";

const Header = (props: {
  showSearch?: boolean,
  handleSearchTermChange?: Function,
  searchTerm?: string
}) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        value={props.searchTerm}
        type="text"
        placeholder="Search"
        onChange={props.handleSearchTermChange}
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">svedio</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop() {},
  searchTerm: ""
};

export default Header;

// class Header extends React.Component {
//   render() {
//     let utilSpace;
//     if (this.props.showSearch) {
//       utilSpace = (
//         <input
//           value={this.props.searchTerm}
//           type="text"
//           placeholder="Search"
//           onChange={this.props.handleSearchTermChange}
//         />
//       );
//     } else {
//       utilSpace = (
//         <h2>
//           <Link to="/search">Back</Link>
//         </h2>
//       );
//     }
//     return (
//       <header>
//         <h1>
//           <Link to="/">svedio</Link>
//         </h1>
//         {utilSpace}
//       </header>
//     );
//   }
// }

// Header.defaultProps = {
//   showSearch: false,
//   handleSearchTermChange: function noop() {},
//   searchTerm: ""
// };

// export default Header;
