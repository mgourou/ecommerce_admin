import styles from '@/styles/Home.module.css'
import { BsSearch } from 'react-icons/bs'
import Image from 'next/image';
import mcbook from "../public/assets/ASSET.png"
import { useEffect, useState } from 'react';
import Link from 'next/link'
// import connectToDatabase from './dbConfig';

export default function Home({ data }) {

    const [searchDisplay,setSearchDisplay] = useState(false);

    const test = () =>  {
        setSearchDisplay(true);
    }

    return (
        <div className={styles.main}>
            <nav className={styles.home_navbar}>
                <Link href={'./'}><span>Ecommerce</span></Link>
                <ul>
                    <Link href={'./'}><li>Home</li></Link>
                    <Link href={'./products'}><li>All Products</li></Link>
                    <Link href={'./categories'}><li>Categories</li></Link>
                    <Link href={'./account'}><li>Account</li></Link>
                    <Link href={'./cart'}><li>Cart</li></Link>
                </ul>
                <div className={styles.home_navbar_input}>
                    {searchDisplay ?(
                    <input type="text" placeholder='Search...' />
                    ) : null
                    }
                    <span onClick={test}><BsSearch/></span>
                </div>
            </nav>


            <main>
                <section className={styles.section1}>
                    <div className={styles.section1_big_div}>
                        <div className={styles.section1_div_text}>
                            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo, hic ab dolorum debitis eos magnam deleniti illo iure, dicta nostrum corporis cumque, possimus necessitatibus inventore. Sed ab asperiores quae.</p>
                        </div>
                        <div className={styles.section1_div_img}>
                            <Image src={mcbook} alt='top-element'></Image>
                        </div>
                    </div>
                </section>
            </main>


            {/* {data.map(item => (
                <div key={item._id}>{item.title}</div>
            ))} */}
        </div>
        );
}

// export async function getServerSideProps() {
//     const db = await connectToDatabase();
//     const collection = db.collection('souheib');
//     const data = await collection.find().toArray();
  
//     return {
//       props: {
//         data,
//       },
//     };
// }