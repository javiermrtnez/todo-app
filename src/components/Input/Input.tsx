import SCInput from './Input.style';

const Input = ({ label, ...inputProps }) => {
  return (
    <SCInput>
      {Boolean(label) && <label htmlFor={label}>{label}</label>}
      <input id={label ?? undefined} {...inputProps} />
    </SCInput>
  );
};

export default Input;
