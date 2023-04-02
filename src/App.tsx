import './App.css';
import { Header } from './components/header/Header';
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  );
}

export default App;
