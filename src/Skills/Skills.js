import { SkillsContainer } from "./Skills.styled";

const Skills = (props) => {
	return (
		<SkillsContainer id={props.id}>
			<div className='title'>Languages</div>
			<hr></hr>
			<div className='languages'>
				<div className='languages__container'>
					<div className='languages__container__icon'>
						<img
							alt='html-logo'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
						/>
					</div>
					<div className='languages__container__title'>HTML5</div>
				</div>
				<div className='languages__container'>
					<div className='languages__container__icon'>
						<img
							alt='css-logo'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'
						/>
					</div>
					<div className='languages__container__title'>CSS3</div>
				</div>
				<div className='languages__container'>
					<div className='languages__container__icon'>
						<img
							alt='javascript-logo'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
						/>
					</div>
					<div className='languages__container__title'>JavaScript</div>
				</div>
				<div className='languages__container'>
					<div className='languages__container__icon'>
						<img
                            alt="typescipt-logo"
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' />
					</div>
					<div className='languages__container__title'>TypeScript</div>
				</div>
				<div className='languages__container'>
					<div className='languages__container__icon'>
                        <img
                        alt="node-logo"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                    </div>
					<div className='languages__container__title'>Node.js</div>
				</div>
                <div className='languages__container'>
					<div className='languages__container__icon'>
                        <img
                            alt="php-logo"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                    </div>
					<div className='languages__container__title'>PHP</div>
				</div>
                <div className='languages__container'>
					<div className='languages__container__icon'>
                        <img
                            alt="mongo-logo"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                    </div>
					<div className='languages__container__title'>MongoDB</div>
				</div>
                
			</div>
            <div className="title">Technologies</div>
            <hr></hr>
            <div className="languages">
                <div className='languages__container'>
                    <div className='languages__container__icon'>
                        <img
                        alt="react-logo"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    </div>
                    <div className='languages__container__title'>React.js</div>
                </div>
                <div className='languages__container'>
                    <div className='languages__container__icon'>
                        <img
                        alt="vue-logo"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                    </div>
                    <div className='languages__container__title'>Vue.js</div>
                </div>
                <div className='languages__container'>
                    <div className='languages__container__icon'>
                        <img
                            alt="next-logo"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                    </div>
                    <div className='languages__container__title'>Next.js</div>
                </div>
                <div className='languages__container'>
                    <div className='languages__container__icon'>
                        <img
                        alt="laravel-logo"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" />
                    </div>
                    <div className='languages__container__title'>Laravel</div>
                </div>
                <div className='languages__container'>
                    <div className='languages__container__icon'>
                        <img
                            alt="express-logo"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                    </div>
                    <div className='languages__container__title'>Express.js</div>
                </div>
                <div className='languages__container'>
                    <div className='languages__container__icon'>
                        <img
                        alt="tailwind-logo"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                    </div>
                    <div className='languages__container__title'>TailwindCSS</div>
                </div>
                <div className='languages__container'>
                    <div className='languages__container__icon'>
                        <img
                            alt="bootstrap-logo"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                    </div>
                    <div className='languages__container__title'>Bootstrap</div>
                </div>
            </div>
            <div className="title">Tools</div>
            <hr></hr>
            <div className="languages">
                <div className="languages__container">
                    <div className="languages__container__icon">
                        <img
                            alt="vs-code-logo"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                    </div>
                    <div className="languages__container__title">VS Code</div>
                </div>
                <div className="languages__container">
                    <div className="languages__container__icon">
                        <img
                            alt="linux-logo"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                    </div>
                    <div className="languages__container__title">Linux</div>
                </div>
                <div className="languages__container">
                    <div className="languages__container__icon">
                        <img
                            alt="storybook-logo"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" />
                    </div>
                    <div className="languages__container__title">Storybook</div>
                </div>
                <div className="languages__container">
                    <div className="languages__container__icon">
                        <img
                            alt="figma-logo"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                    </div>
                    <div className="languages__container__title">Figma</div>
                </div>
                <div className="languages__container">
                    <div className="languages__container__icon">
                        <img
                            alt="jest-logo"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                    </div>
                    <div className="languages__container__title">Jest</div>
                </div>
                <div className="languages__container">
                    <div className="languages__container__icon">
                        <img
                            alt="illustrator-logo"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" />
                    </div>
                    <div className="languages__container__title">Adobe</div>
                </div>
                <div className='languages__container'>
					<div className='languages__container__icon'>
                        <img
                        alt="git-logo"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                    </div>
					<div className='languages__container__title'>Git</div>
				</div>
            </div>
		</SkillsContainer>
	);
};

export default Skills;

<div className="languages__container">
                    <div className="languages__container__icon">


                    </div>
                    <div className="languages__container__title"></div>
                </div>
