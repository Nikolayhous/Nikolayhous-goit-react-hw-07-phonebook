import s from './App.module.css';
import Container from '../Container';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import Footer from '../Footer';

function App() {
  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
      <Footer />
    </Container>
  );
}

export default App;
