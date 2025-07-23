'use client'
export default function FormPage()
{
    return (
        <>
         <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
  <h1 className="text-3xl font-bold mb-4">Request a Callback</h1>
  <p className="mb-6 max-w-md">
    Book with ease — drop your number for a callback or call us now to book instantly.
  </p>
  <div className="flex flex-col sm:flex-row gap-2 items-center">
    <input
      type="number"
      placeholder="Enter your number"
      className="border border-gray-300 px-4 py-2 rounded w-64"
    />
    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
      Submit
    </button>
  </div>
</div>

        
        
        </>
    )}