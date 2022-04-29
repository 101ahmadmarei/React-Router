import React from "react";
import { NavLink } from "react-router-dom";
function Links() {
  return (
    <div>
      <NavLink to="/quotes">All Quotes</NavLink>
      <NavLink to="/quotes/:quoteId"> Quote Details</NavLink>
      <NavLink to="/new-quote">New Quote</NavLink>
    </div>
  );
}

export default Links;
