import React from 'react';

function SignIn() {
  const primaryColor = '#E90052'; // Define the primary color

  return (
    <div className="bg-gray-50 font-sans">

      <div className="container mx-auto py-12 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Sign In Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sign In</h2>
              <div className="flex-grow"></div>
              <button style={{backgroundColor: primaryColor}} className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-auto">
                Register
              </button>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-50"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10 bg-gray-50"
                />
                <button className="absolute inset-y-0 right-0 px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                  Show
                </button>
              </div>
            </div>

            <a href="#" className="inline-block align-baseline font-bold text-sm" style={{color: primaryColor}}>
              Forgot login details?
            </a>

            <button style={{backgroundColor: primaryColor}} className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4">
              Sign In
            </button>

            <div className="my-4 border-b text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 bg-white">
                or login with
              </div>
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2">
              <i className="fab fa-facebook-f mr-2"></i>
              Login with Facebook
            </button>

            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              <i className="fab fa-twitter mr-2"></i>
              Login with X
            </button>
          </div>

          {/* Don't have an account Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Don't have a Premier League account?</h2>
            <p className="text-gray-600 mb-4">In that case, you are missing out on:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Fantasy Premier League football game</li>
              <li>Exclusive fan services</li>
              <li>Customised site content</li>
              <li>Favourite Club information and notifications</li>
            </ul>
            <button style={{backgroundColor: primaryColor}} className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignIn;
