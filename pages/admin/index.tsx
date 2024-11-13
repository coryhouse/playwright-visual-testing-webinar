import { useContext } from 'react';
import { AdminContext } from '../../E-Commerce/context/admin-context';
import styles from './index.module.css';

const AdminPage = () => {
  const { showIcon, toggleIcon } = useContext(AdminContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Applitools Sandbox Admin</h1>
      <label className={styles.label}>
        <input 
          className={styles.input}
          type="checkbox" 
          checked={showIcon} 
          onChange={toggleIcon} 
        />
        Show search icon
      </label>
    </div>
  );
};

export default AdminPage;
