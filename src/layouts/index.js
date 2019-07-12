import styles from './index.css';
import Header from './Header';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Header location={props.location} />
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
