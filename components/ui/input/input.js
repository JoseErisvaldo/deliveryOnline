export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
}) {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {label && <label className="font-semibold text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
    </div>
  );
}
