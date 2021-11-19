const FilterField: React.FC<{
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  optionClick: (option: any) => void;
  error: string | null;
  data: any[];
}> = ({ value, placeholder, onChange, onBlur, optionClick, error, data }) => (
  <div className="relative">
    <input onChange={onChange} value={value} placeholder={placeholder} />
    {error && (
      <div>
        <p className="text-red-600 text-left">
          <small>* {error}</small>
        </p>
      </div>
    )}
    {data.length !== 0 && (
      <div className="text-left border p-1 shadow-md rounded-lg absolute bg-white w-full">
        {data.map((item, index) => (
          <p className="option" key={index} onClick={() => optionClick(item)}>
            {item.name.common}
          </p>
        ))}
      </div>
    )}
  </div>
);

export default FilterField;
