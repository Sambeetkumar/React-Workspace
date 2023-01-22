import "./App.css";
import Card from "./componens/Card";
import contacts from "./contacts";
import Avatar from "./componens/Avatar";
function createcard(contacts) {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" />
      {contacts.map(createcard)}
    </div>
  );
}

export default App;
