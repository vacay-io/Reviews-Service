import React from 'react';
import FontAwesome from 'react-fontawesome';

const Search = props => (
  <div className="search-container">
    <div className="review-length-container">

      <div className="">
        <span className="space-right">
          {props.reviews.length}
        </span>
        <span className="space-right">
          Reviews
        </span>
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
        <FontAwesome name="star" className="star" />
      </div>
    </div>

    <div className="bar-container">
      <form>
        <FontAwesome name="search" className="" />
        <input className="" type="text" placeholder="Search Reviews" />
      </form>
    </div>
  </div>
);

export default Search;