
import css from './home.module.css';
const Home=()=>{
    return(
        <div>
            <h1 id={css.title}>WELCOME TO PIU~ WORLD!!</h1>
            <h1 style={{fontFamily:"monospace", textAlign:"center", color:"midnightblue"}}>T_T</h1>
            <h2 id={css.text}>~~Let's begin the journey of new adventure and fun~~</h2>
            <p className={css.para}>Now, you might wonder what this all is about so, let's dive deeper into the "piu world" i'm talking about.
      In very simple language "piu world" is simply a world where you can have fun and relax.</p>
        </div>
    )
}
export default Home;