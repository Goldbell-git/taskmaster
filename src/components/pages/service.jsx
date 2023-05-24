import classes from './service.module.css';
import unsplash_1 from '../../assets/unsplash_1.jpg';
import unsplash_2 from '../../assets/unsplash_2.jpg';
import unsplash_3 from '../../assets/unsplash_3.jpg';

const Service = () => {
    return (
        <section className={classes.service}>
            <div className={classes.img}>
                <div className={classes.first}>
                    <img src={unsplash_1} alt='' className={classes.first_image} />
                    <img src={unsplash_2} alt='' className={classes.second_image} />
                    <img src={unsplash_3} alt='' className={classes.third_image} />
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.polygon}></div>
                <div className={classes.text}>
                    <h1 className={classes.header}>OUR SERVICES</h1>
                    <p className={classes.para}>
                        We offer professional cleaning and maintenance services eg laundry.cleaning,plumbing, carpentry, mechanic and electronics.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Service;