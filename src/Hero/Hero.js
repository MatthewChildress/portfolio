import { HeroContainer } from './Hero.styled'
import profile from '../assets/matt.webp'

const Hero = (props) => {
    return(
        <HeroContainer id={props.id}>
            <div className="about">
                <div className="about__container">
                    <h1 className="about__container__name">Matt Childress</h1>
                    <h2 className="about__container__title">Frontend Developer</h2>
                    <h3 className="about__container__blurb">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?

                    </h3>
                </div>
            </div>
            <div className="hero">
                <img src={profile} className="hero__image" alt="logo"></img>
            </div>
        </HeroContainer>
    );
}

export default Hero;