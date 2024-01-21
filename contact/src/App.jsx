import './App.css'
import contacts from './user/contact'
import Card from './components/Card';
import Avatar from './components/Avatar';
function createCard(contact)
{
return (
<Card
  Key={contact.Key}
  name={contact.name}
  img={contact.imgURL}
  phone={contact.phone}
  email={contact.email}
/>
);
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" />
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}
export default App;
