export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 shadow-lg">
        <button className="text-red-500" onClick={onClose}>
          Close
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
