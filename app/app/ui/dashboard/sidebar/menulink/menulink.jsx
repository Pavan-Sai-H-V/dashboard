'use client'
import { usePathname } from 'next/navigation';
import styles from './menulink.module.css'
const Menulink = ({item}) => {

    const pathname= usePathname()
    console.log(pathname)
  return (
    <a href={item.path} className={`${styles.container} ${pathname==item.path && styles.active}`}>
        {item.icon}
        {item.title}
    </a>
  );
};

export default Menulink;