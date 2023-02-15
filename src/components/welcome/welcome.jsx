import PropTypes from 'prop-types';  // npm i prop-types
import style from './welcome.module.css';

const Welcome = ({ firstname, lastname }) => {
    //            ↑ L'objet "props" est destructuré en "firstname" et "lastname"

    return (
        <div>
            <p className={style.message}>
                Bienvenue <span className={style['full-name']}>{firstname} {lastname}</span> sur la demo !
            </p>
        </div>
    );
};

Welcome.defaultProps = {
    lastname: ''
};

Welcome.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string
};

export default Welcome;