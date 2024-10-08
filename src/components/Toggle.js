export default function Toggle({isDarkTheme, toggleTheme}) {
 return (
    <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={isDarkTheme} />
        <span className="slider round"></span>
    </label>
)}