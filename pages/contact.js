import Button from '../components/atoms/Button';
import Title from '../components/atoms/Title';

const ContactPage = () => {
  const handleForm = (e) => {
    console.log(e);
  };
  const resetForm = (e) => {
    console.log(e);
  };

  return (
    <>
      <Title size='large' text='Contacto' />
      <form action=''>
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <Button primary onClick={handleForm} size='medium' label='send' />
        <Button
          primary={false}
          onClick={resetForm}
          size='small'
          label='reset'
        />
      </form>
    </>
  );
};

export default ContactPage;
