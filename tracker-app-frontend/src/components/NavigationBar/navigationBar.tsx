import Link from 'next/link';

const NavigationBar = () => (
  <nav className="bg-gray-800 p-4">
    <ul className="flex space-x-4 justify-center">
      <li>
        <Link href="/login">
          <h6 className="text-white hover:underline">Login</h6>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <h6 className="text-white hover:underline">Signup</h6>
        </Link>
      </li>
      <li>
        <Link href="/markAttendance">
          <h6 className="text-white hover:underline">Mark Attendance</h6>
        </Link>
      </li>
      <li>
        <Link href="/recordData">
          <h6 className="text-white hover:underline">Records Data</h6>
        </Link>
      </li>
      <li>
        <Link href="/createSite">
          <h6 className="text-white hover:underline">Create Sites</h6>
        </Link>
      </li>
      <li>
        <Link href="/registrations">
          <h6 className="text-white hover:underline">Registrations</h6>
        </Link>
      </li>
      <li>
        <Link href="/allWorkers">
          <h6 className="text-white hover:underline">All Workers</h6>
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavigationBar;
