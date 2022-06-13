import styled from 'styled-components';

export const HeroContainer = styled.section`
display:flex;
flex-direction:row;
background:rgba(64,63,76,1);
color:rgb(255,255,255);
height:100%;
letter-spacing:.25em;
line-height:3em;
padding:12em 5em;

.about {
    width:40%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
}

.about__container {
    display:flex;
    flex-direction:column;
    justify-content:center;
    animation: logo-appear;
    animation-duration: 3s;
    animation-iteration-count: 1;

}

.about__container__name, .about__container__title {
    font-size:2.5em;
    position:relative;
    display:inline-flex;
    padding-inline-start:0em;
    z-index: 1;

}

@keyframes logo-appear {
    0% { 
        opacity:0;
    }
    25% {
        opacity:0.25;
    }
    50% {
        opacity:0.5;
    }
    75% {
        opacity:0.75;
    }
    100% {
        opacity:1.0;
    }
}

.about__container__name:before {
    content: '';
    position:absolute;
    display:flex;
    bottom:0em;
    left: -0.75em;
    height:60%;
    width:0%;
    background:rgb(80,166,216);
    z-index:-1;
    transition: .4s;
}

.about__container__title:before {
    content: '';
    position:absolute;
    display:flex;
    bottom:0em;
    left: -0.75em;
    height:80%;
    width:0%;
    background:rgb(80,166,216);
    z-index:-1;
    transition: .4s;
}

.about__container__name:hover:before {
    width: calc(65% + 2em);
}

.about__container__title:hover:before {
    width: calc(45% + 2em);
}

.hero {
    display:flex;
    justify-content:center;
    align-items:center;
    width:60%;
}

.hero__image {
    border:0.1em solid rgb(216,198,80);
    border-radius:50%;
    box-shadow: 0 0 0.2em 0.1em ;

}

img {
    width:60%;
}

@media only screen and (max-width:900px) {
    flex-direction:column-reverse;
    line-height:2em;
    padding:6em 2.5em;

    .about {
        width:100%;
    }

    .hero {
        width:100%;
        height:250px;
    }
}

`