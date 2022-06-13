import { WrapperContainer } from './Wrapper.styled'
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';


const Wrapper = () => {
    return(
        <WrapperContainer>
            <Hero id='hero'/>
            <Skills id='skills' />
            <Projects id='projects' />
            <Contact id='contact' />


        </WrapperContainer>
    );
}

export default Wrapper;