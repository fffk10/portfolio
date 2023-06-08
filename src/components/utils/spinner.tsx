import { FaSpinner } from 'react-icons/fa';

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center backdrop-filter backdrop-blur-sm bg-gray-300 bg-opacity-50 pointer-events-none">
      <FaSpinner size={50} className="animate-spin h-6 w-6 text-gray-700 pointer-events-none" />
    </div>
  )
}

export default Spinner