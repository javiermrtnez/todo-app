import SCSeparator from './Separator.style';

const Separator = ({ text }) => {
  return (
    <SCSeparator>
      <div className='separator' />

      {Boolean(text) && (
        <>
          {text}
          <div className='separator' />
        </>
      )}
    </SCSeparator>
  );
};

export default Separator;
