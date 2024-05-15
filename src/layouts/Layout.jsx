import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>Mehrad Rouhani | React.js</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Mehrad</p>
      </footer>
    </>
  );
}

export default Layout;
