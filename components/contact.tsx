import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

  const Contact = () => {
    return (
      <section id="contact" className="p-8 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-6">
          Feel free to reach out to me through any of the following platforms. I&apos;d love to connect with you!
        </p>
        <div className="flex justify-center space-x-6">
          <a  href="https://github.com/Ediwise" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaGithub className="text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/editech/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="mailto:caforji@gmail.com" className="hover:text-blue-500">
            <FaEnvelope className="text-3xl" />
          </a>
        </div>
      </section>
    );
  };
  
  export default Contact;
  
  