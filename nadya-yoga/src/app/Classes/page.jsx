'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation'
import Grid from '@mui/material/Grid';
import CustomCard from '@/components/CustomCard';




export default function Classes() {
  const router = useRouter()
  return (
    
        <div>
          
        <h2>Classes</h2>
        <button onClick={() => router.push('/Timetable')}>
      Timetable 
    </button>
   
          <Grid container spacing={2} my={2}>    
              <Grid item xs={12} md={6}> 
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
                <Grid item xs={12} md={6}> 
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
          </Grid>
       
   
        <Grid container spacing={2} my={2}>    
            <Grid item xs={12} md={6}> 
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
              <Grid item xs={12} md={6}> 
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
        </Grid>
      </div> 
      
   
  )
}