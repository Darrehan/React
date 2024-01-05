// here i am importing the react images from the assets folder
import reactimg from './assets/react-core-concepts.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header()
{
  const result=reactDescriptions[genRandomInt(2)];
  return (
    <header>
        <img src={reactimg} alt="Stylized atom" />
        <h1>AgroTech</h1>
        <p>
          {result} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>

  );
}

function CoreConcepts(){
  return (
    // The JSX  javascript syntax extention code should have only one parent element
  <li> 
    {/* here li is parent element */}
    <img src="" alt="" />
    <h3>TITLE</h3>
    <p>DISCRIPTION</p>
  </li>
  );
}
function App() {
  return (
    <div>
      <Header></Header>
      <main>
      <section id="core-concepts">
      <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts></CoreConcepts>
          <CoreConcepts></CoreConcepts>
          <CoreConcepts></CoreConcepts>
        </ul>
      </section>
       
      </main>
    </div>
  );
}
export default App;
