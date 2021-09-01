import ContactCard from "./ContactCard"
import styles from '../../styles/ContactList.module.css'


const ContactsList = ({ contacts=[] }) => {
    return (
        <div className={styles.container}>
            {contacts.map((contact) =>
            <ContactCard 
            key={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            phoneNumber={contact.phoneNumber}
            profilePic={contact.profilePic}
            
            />
            )}

        </div>
    )
}

export default ContactsList;    