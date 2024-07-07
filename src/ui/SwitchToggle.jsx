function SwitchToggle() {
  return (
    <div className="mt-2">
      <div className="switch-toggle">
        <input type="checkbox" id="toggle-switch" className="hidden" />
        <label htmlFor="toggle-switch" className="slider"></label>
      </div>
    </div>
  );
}

export default SwitchToggle;
