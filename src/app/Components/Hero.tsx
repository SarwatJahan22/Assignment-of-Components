import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.background}>
       
            <h1 className={styles.heading}>
                Welcome to my Website
            </h1>
            <p className= {styles.paragraph}> This is my first NextJs Project.
              Here We are learning basics of components.  </p>

        </div>
  );
};
export default Hero;