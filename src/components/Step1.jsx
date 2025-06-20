const Step1 = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-900">Personal info</h2>
      <p className="text-gray-500 mt-2 mb-6">
        Please provide your name, email address, and phone number.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm text-blue-900 mb-1">Name</label>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-blue-900 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-blue-900 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="e.g. +1 234 567 890"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="button"
          className="mt-4 bg-blue-900 text-white py-2 px-5 rounded-md hover:bg-blue-800"
        >
          Next Step
        </button>
      </form>
    </div>
  );
};

export default Step1;
