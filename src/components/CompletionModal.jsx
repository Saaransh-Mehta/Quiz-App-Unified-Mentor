import React from "react"

const CompletionModal = ({score,onClose}) => {
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-green-500 mb-4">Quiz Complete!</h2>
          <p className="text-gray-700">Your final score is: {score}</p>
          <button
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
    )
}

export default CompletionModal