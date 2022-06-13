import styled from 'styled-components';

export const NavContainer = styled.nav`
display:flex;
background:linear-gradient(to bottom, rgba(80,166,216, 0.9), rgba(109,161,191, 0.9));
height:100%;
width:20%;
position:fixed;
z-index:1;
top:0;
left:0;
overflow-x:hidden;
margin:0;
letter-spacing:.5em;

hr {
    width:100%;
    border-top:1px solid rgb(216,198,80);
}


.navigation{
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    list-style:none;
    width:75%;
}

.navigation__link {
    font-size:1em;
    position:relative;
    display:inline-flex;
    padding-inline-start:0em;
    z-index: 1;
    color:rgb(255,255,255);
    text-decoration:none;
}

.navigation__link:before {
    content: '';
    position:absolute;
    display:flex;
    bottom:0em;
    left: -0.75em;
    height:60%;
    width:0%;
    background:rgba(64,63,76,1);
    z-index:-1;
    transition: .4s;
}

.navigation__link:hover:before {
    width: calc(100% + 1.5em);
}

@media only screen and (max-width: 900px) {
    letter-spacing:.1em;
    font-size:0.8em;
    position: relative;
    width:100%;
    
    .navigation{
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        align-items:center;
        width:100%;
        gap:1em;
        padding:1em;
        margin:0;
    }

    .navigation__item {
        display:flex;
        justify-content:space-between;
    }

    hr {
        display:none;
    }
}

@media only screen and (max-width:600px) {

}
`
