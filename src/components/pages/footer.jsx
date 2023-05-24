import classes from './footer.module.css';

const Footer = () => {
    return (
        <section className={classes.footer}>
            <div className={classes.social}>
                <div className={classes.fb}></div>
                <div className={classes.ig}></div>
                <div className={classes.linkedIn}></div>
            </div>
            <div className={classes.copyright}>
                <p className={classes.para}>
                    © PrimeTech inter-biz synergy- Copyright, 2022. LTD RC: 6868221
                </p>
            </div>
        </section>
    )
}

export default Footer;