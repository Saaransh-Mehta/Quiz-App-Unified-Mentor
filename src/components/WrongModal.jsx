import React from 'react'

const WrongModal = ({message,onClose}) => {
  return (
  <>
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-500 mb-4">{message}</h2>
        <p className="text-gray-700">Better luck next time. Try again!</p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  </>
  )
}

export default WrongModal