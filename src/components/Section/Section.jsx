import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children}) => {
    return (
        <div className={s.container}>
            <h2>{title}</h2>
            {children}
        </div>
    )

}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;