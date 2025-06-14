"use client"
import {MdNotifications, MdOutlineChat,MdPublic,MdSearch} from 'react-icons/md'
import styles from './navbar.module.css'
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
  console.log(pathname)
    return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch/>
          <input type="text" placeholder='Search...' className={styles.input} />
          </div>
        <div className={styles.icons}>
          <MdOutlineChat />
          <MdNotifications/>
          <MdPublic/>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 