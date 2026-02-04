import React, { useState } from 'react';
import { SwitchContainer, SwitchLabel, SwitchInput, Slider } from './Switch.styles';

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle }) => {
  const [checked, setChecked] = useState(isOn);

  const handleChange = () => {
    setChecked(!checked);
    onToggle(!checked);
  };

  return (
    <SwitchContainer>
      <SwitchLabel>
        <SwitchInput
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <Slider />
      </SwitchLabel>
    </SwitchContainer>
  );
};

export default ToggleSwitch;