import { useState } from 'react';
import s from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/phonebook/selector';
import { addContact } from '../../redux/phonebook/operations';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const comparableContact = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase(),
    );
    if (comparableContact) {
      return alert(`Contact ${name} has already been added to the list`);
    }
    dispatch(addContact({ name, phone }));
    resetForm();
  };

  const handleAgreeChange = e => {
    setAgree(e.target.checked);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setAgree(false);
  };

  return (
    <div
      className={`${s.section__form} ${s.animate__animated} ${s.animate__backInUp}`}
    >
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.inputName}
            value={name}
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Number
          <input
            className={s.inputName}
            type="tel"
            value={phone}
            name="phone"
            placeholder="Enter number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
          />
        </label>
        <label className={s.label__agree}>
          <input
            className={s.checkbox}
            value={agree}
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={handleAgreeChange}
          />
          agree
        </label>

        <button className={s.btn} disabled={!agree}>
          Add contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
