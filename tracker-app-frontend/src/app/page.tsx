import Link  from 'next/link';
const Home = () => {

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-blue-500 to-purple-700 dark:bg-gray-900 justify-center items-center">
      <div className="rounded-lg border bg-white dark:bg-card text-card-foreground shadow-sm w-full max-w-2xl mx-auto">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold tracking-tight text-3xl text-center text-primary">Welcome to Alpha Construction Co.</h3>
          <p className="text-sm text-muted-foreground text-center text-gray-500">
            Building the future, restoring the past.
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <img src="/placeholder.svg" alt="Construction Site Image" className="mx-auto rounded-lg h-32 w-32 object-cover" width="200" height="200" style={{ aspectRatio: "200 / 200", objectFit: "cover" }} />
              <h2 className="text-xl text-center mt-2 text-primary">About Us</h2>
              <p className="text-center text-gray-500">
                We are a leading construction company based in New York, specializing in commercial and residential projects.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl text-center mt-2 text-primary">Our Services</h2>
              <ul className="list-disc list-inside text-center text-gray-500">
                <li>Commercial Construction</li>
                <li>Residential Construction</li>
                <li>Interior Design</li>
                <li>Project Management</li>
                <li>Building Restoration</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6 flex flex-col items-center space-y-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-green-400 to-blue-500 text-white hover:bg-gradient-to-r from-green-500 to-blue-600 h-10 px-4 py-2 w-full">
            Contact Us
          </button>
          <a className="text-sm text-gray-500 hover:underline dark:text-gray-400" href="#">
            View Our Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
