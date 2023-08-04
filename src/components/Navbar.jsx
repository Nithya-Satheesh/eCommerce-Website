import React from "react";

function Navbar(props) {
  const navbarStyle = {
    color: props.primaryColor,
    backgroundColor: props.backgroundColor,
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
        <a
          className="navbar-brand"
          href="#"
          style={{ fontFamily: "Urbanist", fontWeight: "bolder" }}
        >
          SNAPDEAL
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <div className="container" style={{ width: "500px" }}>
              <div className="input-group search-input">
                <input
                  style={{ borderRadius: "40px" }}
                  className="form-control py-2 rounded-pill mr-1 pr-5"
                  type="search"
                  value={props.searchValue}
                  onChange={props.onSearchChange}
                  id="example-search-input"
                />
                <span className="search-icon">
                  <i
                    className="fa fa-search"
                    aria-hidden="true"
                    style={{ color: props.backgroundColor }}
                  ></i>
                </span>
              </div>
            </div>
          </ul>

          <button
            className="btn btn-outline-light mx-2 my-2 my-sm-0"
            type="submit"
          >
            Register
          </button>
          <button
            className="btn btn-outline-light mx-2 my-2 my-sm-0"
            type="submit"
          >
            Login
          </button>
          <i className="fa-solid fa-cart-plus" aria-hidden="true" style={{fontSize:"25px",paddingLeft:"10px"}}></i>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
