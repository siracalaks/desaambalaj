import React from 'react'

import classes from './PageTitle.module.css';

function PageTitle({ title }) {
    return (
      <div className={classes.content}>
        <h1 className={classes.title}>{title}</h1>
          {/* {children} */}
      </div>
    );
  }
export default PageTitle