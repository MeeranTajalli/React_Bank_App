import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden'/> in a few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Whether you're seeking rewards, low interest rates, or tailored benefits, we've got you covered. With our in-depth analysis and personalized approach, we ensure that you make informed decisions about your credit card choices.

      </p>
      <Button/>
    </div>
    <div className={layout.sectionImg}>
      <img src ={card} alt="card" className='w-[100%] h-[100%]' />
    </div>
    </section>
  )
}

export default CardDeal