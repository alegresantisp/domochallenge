import styles from './layout.module.css'; 

interface LayoutProps {
  children: React.ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
};

export default Layout;