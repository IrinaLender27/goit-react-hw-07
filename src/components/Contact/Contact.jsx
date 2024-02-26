import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.contact}>
      <div className={css.contactData}>
        <p>
          <IoPerson className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContacts(id))}
        type="button"
      >
        Delate
      </button>
    </div>
  );
};
