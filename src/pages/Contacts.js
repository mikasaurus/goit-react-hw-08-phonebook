import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { FilterContact } from '../components/FilterContact/FilterContact';
import { Loader } from '../components/Loader/Loader';
import { getError, getLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
          {error && <getError />}
        </div>
      </div>
    </div>
  );
};
export default Contacts;
