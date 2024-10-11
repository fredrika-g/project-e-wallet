import styles from "./SettingsForm.module.css";

function SettingsForm({ currentTheme, themeOptions, handleInput, handleSave }) {
  return (
    <form className={styles.settingsForm}>
      <label htmlFor="theme">Choose a theme:</label>
      <select
        id="theme"
        defaultValue={currentTheme}
        onChange={(e) => handleInput(e.target.value)}
      >
        {themeOptions &&
          themeOptions.map((option, i) => (
            <option key={i} value={option}>
              {option} {option === currentTheme && "(current)"}
            </option>
          ))}
      </select>

      <button onClick={handleSave} type="button">
        Change theme
      </button>
    </form>
  );
}

export default SettingsForm;
