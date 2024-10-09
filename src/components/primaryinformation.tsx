/* eslint-disable @next/next/no-img-element */
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Primaryinfo = () => {
  return (
    <div className=" rounded-lg overflow-hidden shadow-lg justify-start bg-white p-6 border border-gray-300">
      <div className="flex items-center mb-4">
        <img
          src="https://media.licdn.com/dms/image/v2/C5603AQFkS0V-trgDFA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1636903836229?e=1733961600&v=beta&t=7pTK7RYYnLHKwZ9fA3q08KJydfNt8EE92rOjHLiE0A0" // Use 'src' instead of 'source'
          alt="Profile"
          className="w-16 h-16 rounded-full border-2 border-blue-600"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-blue-700">
            Jofer Fernandez
          </h2>
          <h3 className="text-md text-gray-600">Fullstack Web Developer</h3>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        As a seasoned Fullstack Web Developer, I possess a strong foundation in
        frontend and backend technologies, including Angular, React, Vue.js,
        Java, Spring Boot, Python, and C++. My expertise extends to state
        management tools like NGRX and RXJS, DevOps practices, and database
        technologies like SQL, PostgreSQL, and Oracle PL/SQL. I am passionate
        about staying up-to-date with the latest web development trends and am
        committed to delivering high-quality, scalable web applications.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com/el.bakod"
          className="text-blue-500 hover:text-blue-700">
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/jofer-fernandez-851931140/"
          className="text-blue-500 hover:text-blue-700">
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/kuzunito"
          className="text-blue-500 hover:text-blue-700">
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};

export default Primaryinfo;
