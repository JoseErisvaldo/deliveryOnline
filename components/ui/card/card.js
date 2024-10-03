export default function Card({ title, content, className }) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
