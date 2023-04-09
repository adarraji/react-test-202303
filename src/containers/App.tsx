import { Header } from '../features/header/Header';
import styles from "./app.module.scss";
import "../fontawesome/css/all.css"
import { Orders } from '../features/orders/Orders';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Orders />
      </div>
    </div>
  );
}

export default App;
