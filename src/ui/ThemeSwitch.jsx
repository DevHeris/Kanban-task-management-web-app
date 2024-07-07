import SwitchToggle from './SwitchToggle';

function ThemeSwitch() {
  return (
    <div className="bg-light-blue flex items-center flex-row py-1 gap-7 justify-center mx-2 rounded-lg">
      <div>
        <img src="/assets/icon-light-theme.svg" alt="sun icon" />
      </div>
      <SwitchToggle />
      <div>
        <img src="/assets/icon-dark-theme.svg" alt="moon icon" />
      </div>
    </div>
  );
}

export default ThemeSwitch;
