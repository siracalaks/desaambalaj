import classes from './PageContent.module.css';

function PageContent({  image, title, description }) {
  return (
    <div className={classes.content}>
        <div className={classes.imageWithCaption}>
          <img className={classes.imageWithCaptionImg} src={image} alt={title} />
        </div>
        <div className={classes.caption}>
            <h2>{title}</h2>
            <p>{description}</p>  
        </div>
        {/* {children} */}
    </div>
  );
}

export default PageContent;
