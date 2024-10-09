import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="flex justify-center items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">
        <Link href="/"></Link>
        <ul className="flex space-x-8">
          <li>
            <Link href="/">Welcome To My Page</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
