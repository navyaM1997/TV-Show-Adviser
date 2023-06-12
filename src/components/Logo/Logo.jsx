import style from "./style.module.css";

export const Logo = ({ title, subTitle, img }) => {
  return (
    <>
      <div className={style.container}>
        <img className={style.img} src={img} alt="logo" />
        <div className={style.title}>{title}</div>
      </div>
      <div className={style.subtitle}>{subTitle}</div>
    </>
  );
};
