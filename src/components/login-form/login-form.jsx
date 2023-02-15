import { useId, useState } from 'react';
import style from './login-form.module.css'

const LoginForm = () => {

    // Necessaire pour la sync du formulaire
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    // ↓ Génére un id unique pour le composant -> Avoir un id unique dans le rendu
    const id = useId();

    // Fonction pour géré la validation du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Tentative de login 🙀', email, pwd);
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <div>
                <label htmlFor={id+'email'}>Email</label>
                <input id={id+'email'} type='email' 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} />
            </div>
            <div>
                <label htmlFor={id+'pwd'}>Mot de passe</label>
                <input id={id+'pwd'} type='password'
                    onChange={(e) => setPwd(e.target.value)} 
                    value={pwd} />
            </div>
            <div>
                <button type='submit'>Connexion</button>
            </div>
        </form>
    );
};

export default LoginForm;