import classes from  './landingPage.module.css';
import ellipse from '../../assets/Ellipse.jpg';
import phone from '../../assets/Phone.jpg';
import phone_1 from '../../assets/Phone_1.jpg';
import logo from '../../assets/logo.jpg';
// import polygon_2 from '../../assets/Polygon_2.jpg';

const LandingPage = () => {
    return (
        <section className={classes.header}>
            <div className={classes.background_image}>
                <div className={classes.navbar}>
                    <div>
                        <img src={logo} alt="" className={classes.logo} />
                    </div>
                    <div className={classes.nav}>
                        <ul className={classes.nav_list}>
                            <li className={classes.list_item}>
                                <a href="#" className={classes.list_link}>Benefit</a>
                            </li>
                            <li className={classes.list_item}>
                                <a href="#" className={classes.list_link}>About us</a>
                            </li>
                            <li className={classes.list_item}>
                                <a href="#" className={classes.list_link}>More info</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.ellipse}>
                    <div className={classes.text}>
                        <h3 className={classes.primary_text}>
                            Take a break; relax, <br></br> taskmaster is here
                        </h3>
                        <div className={classes.button}>
                            <button className={classes.btn}>DOWNLOAD NOW</button>
                        </div>
                    </div>
                    <div className={classes.image}>
                        <img src={ellipse} alt='' className={classes.circle} />
                        {/* <img src={polygon_2} alt='' className={classes.polygon_2} />
                        <img src={polygon_2} alt='' className={classes.polygon_3} /> */}
                        <img src={phone} alt="" className={classes.phone} />
                        <img src={phone_1} alt="" className={classes.phone_1} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage;