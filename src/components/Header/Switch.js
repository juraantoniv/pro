import css from "./Header.module.css"

const Switch = ({ isOn, handleToggle, onChange }) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={onChange}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
                style={{ background: isOn && "#06D6A0" }}
            >
                TEST
                <span className={`react-switch-button`} />
            </label>
        </>
    );
};
export {
    Switch
}