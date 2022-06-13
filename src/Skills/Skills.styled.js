import styled from 'styled-components';

export const SkillsContainer = styled.section`
color:rgba(64,63,76,1);
background:rgb(216,198,80);
height:100%;
display:flex;
flex-direction:column;
align-items:center;
padding: 2em 0;
margin:0;


    .title {
        font-size:2em;
        position:relative;
        display:inline-flex;
        padding-inline-start:0em;
        z-index: 1;
    }
    .title:before {
        content: '';
        position:absolute;
        display:flex;
        bottom:0em;
        left: -0.75em;
        height:60%;
        width:0%;
        background:rgb(255,255,255);
        z-index:-1;
        transition: .4s;   
    }
    .title:hover:before {
        width: calc(75% + 2em);
    }
    hr {
        width:50%;
        border-top:1px solid rgb(255,255,255);
    }

    .languages {
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        padding:1em;
    }

    .languages__container {
        display:flex;
        flex-direction:column;
        justify-content:center;
        width:5.5em;
        height:5.5em;
        padding:0.75em;
    }

    .languages__container__title {
        text-align:center;
    }


`