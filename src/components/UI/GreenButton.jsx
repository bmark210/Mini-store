import classes from "./button.module.scss";
const GreenButtom = ({ ...props }) => {
  return (
    <>
      <button {...props} className={classes.greenBtn}>
        {props.children}
      </button>
    </>
  );
};
export default GreenButtom;
