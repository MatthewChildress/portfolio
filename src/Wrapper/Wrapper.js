import { WrapperContainer } from './Wrapper.styled'
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';


const Wrapper = () => {
    return(
        <WrapperContainer>
            <Hero />
            <Skills />
            <Projects />
            <Contact />


        </WrapperContainer>
    );
}

export default Wrapper;