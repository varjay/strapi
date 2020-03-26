import React from 'react';
import PropTypes from 'prop-types';

import InputModalStepper from './InputModalStepper';
import InputModalStepperProvider from '../InputModalStepperProvider';

const InputModal = ({ isOpen, onToggle, onInputMediaChange, multiple, selectedFiles, step }) => {
  return (
    <InputModalStepperProvider
      step={step}
      selectedFiles={selectedFiles}
      multiple={multiple}
      isOpen={isOpen}
    >
      <InputModalStepper
        isOpen={isOpen}
        onToggle={onToggle}
        onInputMediaChange={onInputMediaChange}
      />
    </InputModalStepperProvider>
  );
};

InputModal.defaultProps = {
  onInputMediaChange: () => {},
  onToggle: () => {},
  selectedFiles: null,
  step: 'list',
};

InputModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  multiple: PropTypes.bool.isRequired,
  onInputMediaChange: PropTypes.func,
  onToggle: PropTypes.func,
  selectedFiles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  step: PropTypes.string,
};

export default InputModal;
