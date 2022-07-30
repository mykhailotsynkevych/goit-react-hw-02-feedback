import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => {
    return (
        <div className={s.container}>
            <h1>{title}</h1>
            {children[0].props.total > 0 ? children[0] : children[1]}
        </div>
    )

}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;