import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { FilterContact } from '../components/FilterContact/FilterContact';
import { Loader } from '../components/Loader/Loader';
import { getError, getLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <div>
        <div>
          <h1>Phonebook</h1>
        </div>
        <div>
          <ContactForm />
          <FilterContact />
        </div>
        <div>
          {isLoading ? <Loader /> : <ContactList />}
          {error}
        </div>
      </div>
    </div>
  );
};
export default Contacts;
