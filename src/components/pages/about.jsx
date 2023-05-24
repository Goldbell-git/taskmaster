import classes from './about.module.css';

const About = () => {
    return (
        <section className={classes.about}>
            <div className={classes.text}>
                <h1 className={classes.header}>ABOUT US</h1>
                <p className={classes.para}>
                Taskmaster is a maintenance / clean tech service provider.  
                It is out to improve lifestyle of  Nigerians. This model provides 
                experts that provide quality services, reduces wait time by automating 
                agent dispatch,create more options that promotes quality service and so much more!
                </p>
            </div>
        </section>
    )
}

export default About;