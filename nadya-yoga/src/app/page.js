import * as React from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Grid from '@mui/material/Grid';
import CustomCard from '@/components/CustomCard';

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

      <div>        
        <div>
          <h3 className={styles.center}>Upcoming Community Classes</h3>
          <p> Our Community classes are by donation
                  |   Minimum $10 Donation.</p>
          <p>     </p> 
          <Grid container spacing={2} my={2}>    
              <Grid item xs={12} md={4}> 
                  <CustomCard 
                    title="All About Balance" 
                    subheader="14/October/2023"
                    image="/balance.jpeg"
                    alt="small rock balacing" >                    
                    Whether you want to practice yoga because of a vestibular disorder
                      or to improve your balance, you're on the right track.
                       Yoga helps with balance, focus, movement, and coordination.
                        Rather than focusing on poses and being still, balance comes from movement, 
                        mastering transitions, and developing your strength                     
                  </CustomCard> 
              </Grid>
                <Grid item xs={12} md={4}> 
                <CustomCard 
                    title="All About Breath" 
                    subheader="18/November/2023"
                    image="/yoga-card-image.jpeg"
                    alt="woman doing yoga" >                    
                    Whether you want to practice yoga because of a vestibular disorder
                      or to improve your balance, you're on the right track.
                       Yoga helps with balance, focus, movement, and coordination.
                        Rather than focusing on poses and being still, balance comes from movement, 
                        mastering transitions, and developing your strength                     
                  </CustomCard> 
                </Grid>            
                <Grid item xs={12} md={4}> 
                <CustomCard 
                    title="Beginners Yoga" 
                    subheader="16/December/2023"
                    image="/balance.jpeg"
                    alt="small rock balacing" >                    
                    Whether you want to practice yoga because of a vestibular disorder
                      or to improve your balance, you're on the right track.
                       Yoga helps with balance, focus, movement, and coordination.
                        Rather than focusing on poses and being still, balance comes from movement, 
                        mastering transitions, and developing your strength                     
                  </CustomCard> 
                </Grid>
          </Grid>
        </div> 
      </div>
    </main>
  )
}