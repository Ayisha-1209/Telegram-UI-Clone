export default function ToggleSwitch ({checked, onChange}) {
    return (
      <label className="relative inline-block w-10 h-6 bg-gray-200 rounded-full cursor-pointer">
        <input
          type="checkbox"
          className="absolute appearance-none cursor-pointer w-full h-full rounded-full bg-gray-400 border-2 border-gray-200 outline-none checked:bg-Primary checked:border-transparent checked:right-0 transition-all duration-300"
          checked={checked}
          onChange={onChange}
        />
        <span
          className={`absolute inline-block w-4 h-4 bg-white rounded-full border-2 border-gray-200 transform duration-300 ${checked ? 'translate-x-4' : ''}`}
        />
      </label>
    );
  };