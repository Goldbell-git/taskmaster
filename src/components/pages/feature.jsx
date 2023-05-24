import classes from './feature.module.css';
import Button from '../UI/button';
import { Fragment } from 'react';



const Features = () => {
    return (
        <Fragment>
            <section className={classes.features}>
            <div className={classes.all}>
                <div className={classes.polygon}></div>
                <div className={classes.text}>
                    <div className="">
                        <h1 className={classes.header}>DID YOU KNOW</h1>
                        <h5 className={classes.heading}>
                            When you use taskmaster, you will enjoy;
                        </h5>
                        <p className={classes.para}>
                            ● Access to professional and registered agents
                        </p>
                        <p className={classes.para}>
                            ● Discount on bookings
                        </p>
                        <p className={classes.para}>
                            ● Speed service
                        </p>
                        <p className={classes.para}>
                            ● Choose preferred agents
                        </p>
                    </div>
                    <div className={classes.button}>
                        <Button>DOWNLOAD NOW</Button>
                    </div>
                </div>
            </div>
            <div className={classes.image}></div>
            </section>

        <div className={classes.horizon}>
            <hr className={classes.hr} />
        </div>
        </Fragment>
    )
}

export default Features;