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
    whois: "Call me Sayf!",
    cd: (directory) => `changed path to ${directory}`,
    banner: (
      <> 
        <p>  __   __       ___   ___      ___   ___ </p> 
        <p> (  \,/  )     ( @ \Y/ @ )    ((o)\,/(o))</p>
        <p>  \_ | _/       \__+|+__/      \__ | __/</p>
        <p>  "(_/ \_)        {_/ \_}        {_/ \_} "</p>
      </>
      ),
    this: "I said don't! "
  }

  return (
    <>
      <h1>ABOUT PAGE</h1>
      <div className='bg-gray-300 w-3/4 mx-auto'>

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