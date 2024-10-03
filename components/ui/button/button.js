// Button.js
export default function Button({
  children,
  onClick,
  type = 'button',
  className,
  bgType,
}) {
  let bgClasses = '';

  switch (bgType) {
    case 'blue':
      bgClasses = 'bg-blue-600 hover:bg-blue-500 text-white';
      break;
    case 'red':
      bgClasses = 'bg-red-600 hover:bg-red-500 text-white';
      break;
    case 'yellow':
      bgClasses = 'bg-yellow-600 hover:bg-yellow-500 text-black';
      break;
    default:
      bgClasses = 'bg-gray-600 hover:bg-gray-500 text-white';
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 ${bgClasses} flex gap-2 items-center justify-center font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${className}`}
    >
      {children}
    </button>
  );
}
