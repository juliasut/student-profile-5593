import './Input.css';

export default function Search({ placeholder, handleAddTags }) {
  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        onKeyUp={(e) => handleAddTags(e)}
      />
    </div>
  );
}
