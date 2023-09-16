import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div>
          <h1 className={styles.center}>About Us</h1>
          <p>
              We offer outstanding community yoga instruction in Hyde Park - Sydney as well
              as live stream classes to wherever you are. We have regular workshops and 
              teacher trainings designed to bring the practice of yoga to life blending 
              ancient wisdom and modern science.
          </p>
        </div>
      </div>
      <div className={styles.center}>
        <div>
          <h2 className={styles.center}>Our Vision</h2>
          <p>
          Weaving together ancient wisdom and modern science along with celebration and
          light-heartedness we have created centres that inspire and celebrate community 
          and the best of holistic living. 
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <h3>Upcoming Community Classes</h3>
        <a
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            
          </h2>
          <p>.</p>
        </a>        
      </div>
    </main>
  )
}
