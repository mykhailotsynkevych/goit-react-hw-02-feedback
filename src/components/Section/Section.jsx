import s from './Section.module.css';

const Section = ({ title, children }) => {
    return (
        <div className={s.container}>
            {title && <h1>{title}</h1>}
            {children}
        </div>
    )

}

export default Section;