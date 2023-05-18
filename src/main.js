import Reagir, { useEffect, useState, createRoot } from '/Reagir';
const ChildTestColorGuy = (props) => {
  return (
    <div
      style={{
        color: props.color,
      }}
    >
      ColorGuy, color: {props.color}
    </div>
  );
};
export const UsingFragment = () => {
  const [whatToSay, setWhatToSay] = useState('Hello');
  const [numsList, setNumsList] = useState([1, 2, 3]);
  const [regularParagraphText, setRegularParagraphText] = useState(
    'This is a regular paragraph'
  );
  const [colorGuyColor, setColorGuyColor] = useState('blue');
  const [showFuckingGod, setShowFuckingGod] = useState(false);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const colors = ['pink', 'green', 'yellow', 'red', 'violet'];
    setColorGuyColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [inputValue]);
  useEffect(() => {
    if (showFuckingGod) {
      setInputValue('Mwahahahahah');
    }
  }, [showFuckingGod]);
  return (
    <div class="jeez" id={colorGuyColor}>
      <p>{regularParagraphText}</p>
      <div>
        <p id="test">This is a paragraph in a fragment</p>
        {showFuckingGod ? <div>fuckingGod</div> : <div>a</div>}
        <>
          <p id="whatToSay">{whatToSay}</p>
          {showFuckingGod ? <div>fuckingGod</div> : <div>a</div>}
        </>
        <ul>
          {numsList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <ChildTestColorGuy color={colorGuyColor} />
      <button
        onClick={() => {
          setWhatToSay('Uh Oh');
          setNumsList(['One', 'Two', 'Three', 'Four']);
          setRegularParagraphText('Uh oh paragraph text');
          setShowFuckingGod(true);
          setColorGuyColor('green');
        }}
      >
        Uh oh
      </button>
      <div>{inputValue}</div>
      <input
        value={inputValue}
        onInput={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};

// render();

// const domNode = document.getElementById('root');
// const root = createRoot(domNode);
// root.render(<UsingFragment />);
