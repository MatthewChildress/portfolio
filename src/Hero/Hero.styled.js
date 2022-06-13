import styled from 'styled-components';

export const HeroContainer = styled.section`
display:flex;
flex-direction:row;
background:#403f4c;
color:rgb(255,255,255);
height:100%;
letter-spacing:.25em;
line-height:3em;
padding:3em;
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


}

.about__container__name {
    font-size:2.5em;
    position:relative;
    display:inline-flex;
    padding-inline-start:0em;
    z-index: 1;

}

.about__container__name:before {
    content: '';
    position:absolute;
    display:flex;
    bottom:0em;
    left: -0.75em;
    height:60%;
    width:0%;
    background:#50A6D8;
    z-index:-1;
    transition: .4s;
}

.about__container__name:hover:before {
    width: calc(50% + 2em);
}

.hero {
    width:60%;
}

@media only screen and (max-width:900px) {
    flex-direction:column-reverse;

    .about {
        width:100%;
    }

    .hero {
        width:100%;
        height:250px;
    }
}

`