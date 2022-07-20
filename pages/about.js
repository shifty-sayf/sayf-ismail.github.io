import Link from 'next/link';
import { ReactTerminal } from 'react-terminal';


const About = () => {

  // let keywordsList = [
  //   "`WHOIS` - about me...",
  //   "[`SOCIALS` - lets connect!...]",
  //   "[`PROJECTS` - come explore...]",
  //   "[`WHOIS` - about me :)...]",
  //   "[`WHOIS` - about me :)...]",
  // ];

  const commands = {
    help: (
      <span>
        <strong>clear</strong> - clears the console. <br/>
        <strong>socials</strong> - links to connect. <br/>
        <strong>projects</strong> - list of projects. <br/>
        <strong>secret</strong> - don't type this! <br/>
      </span>
      ),
    whois: "Hello! I'm a Software Developer / former Mechanical Engineer / Project Manager / Scrum Master and I love to code!",
    cd: (directory) => `changed path to ${directory}`,
    projects:       
      <>
        <strong>"Here are my...PROJECTS!"</strong> <br />
        1. This project:
        https://www.google.com <br />
        2. This project:
        https://www.google.com <br />
        3. This project:
        https://www.google.com <br />
      </>,
    this: "I said don't! "
  }

  return (
    <>
      <h1>ABOUT PAGE</h1>
      <div className='bg-gray-300 w-3/4 mx-auto h-20'>

        <p>Type 'help' to get started ;)</p>
        
        <div>
          <ReactTerminal 
            theme="dracula"
            commands={commands} 
          />
        </div>

        <Link href="/">Back to Home</Link>
      </div>
    </>
  )
};

export default About;