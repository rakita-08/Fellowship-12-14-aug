import css from './prop.module.css';
const Versions=()=>{
    return (
        <div>
            <h3 className={css.text}>~~hope you're having a good time here~~</h3>
            <h3 className={css.style}>Current Version 10.23.1</h3>
            <h3 style={{color:'darkolivegreen', fontFamily:"monospace", textAlign:"center"}}>Avialable versions: 10.24.1 - 10.23.4.0</h3>
    </div>
    );
}
export default Versions;