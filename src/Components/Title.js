import '../Css/title.css';

function Title(props) {
    const { title } = props;
  return (
    <>
        <h1 className="heading">{title}</h1>
        <div className="underline"></div>
    </>
  );
}

export default Title;
