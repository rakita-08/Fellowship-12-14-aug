import css from './state.module.css';
import React,{useState} from 'react';
function Login(){
    const [birthyear, setBirthyear]= useState(2000);
    const [name, setName]= useState('');
    return (
        <div className={css.login}>
            <p className={css.year}>Select year:{birthyear}</p>
            <button onClick={()=> setBirthyear(birthyear+1)}>Increase</button>
            <button onClick={()=> setBirthyear(birthyear-1)}>Decrease</button>
            <button onClick={()=> setBirthyear(2000)}>Reset</button>
            <b/>
            <p className={css.name}>Select the defined name:{name}</p>
            <button onClick={()=>setName('yin')}>Yin</button>
            <button onClick={()=>setName('yang')}>Yang</button>
            <button onClick={()=>setName('john')}>John</button>
            <button onClick={()=>setName('roe')}>Roe</button>
            <button onClick={()=> setName('')}>resetname</button>
        </div>
    );
}
export default Login;