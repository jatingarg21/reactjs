import { React, Component } from "react";

import classes from "./BlogCard.module.css";
// import { Component } from 'react';

class BlogCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classes.BlogCard}>
        <h3 className={classes.heading}>Title</h3>
        <p>Description</p>
        <hr></hr>
      </div>
    );
  }
}
// const BlogCard = (props) => {
//       return(
//             <div className={classes.BlogCard}>
//                   <h3 className={classes.heading}>{props.title}</h3>
//                   <p>{props.description}</p>
//                   <hr></hr>
//             </div>
//       )
// }

export default BlogCard;
