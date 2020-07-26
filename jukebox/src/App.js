import React from 'react';
import './App.css';
import $ from 'jquery';

const colors=['lightsalmon','darsalmon', 'salmon','lightcolar','lightyellow','lightgoldenrodyellow', 'papayawhip','moccasin', 'khaki',
  'greenyellow', 'lightgreen', 'palegreen','limegreen', 'lightcyan', 'paleturquoise', 'cadetblue', 'powderblue',
  'steelblue','skyblue', 'plum', 'mediumpurple', 'orchid', 'pink', 'ivory', 'azure', 'gainsboro', 'rosybrown',
  'goldenrod', 'chocolate', 'sandybrown', 'palevioletred', 'linen', 'gainsboro', 'cornsilk',
  'sienna', 'seagreen', 'springgreen', 'olive', 'darkseagreen', 'orange', 'peachpuff']

const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const description = [
  "Funky Fun",
  "Mixin' Music",
  "A wee bit lost..",
  "Golden Gold",
  "Chorus Hi-Ya",
  "Hey!",
  "Hat",
  "Bebop",
  "Scratch"
];
const audio = [
  "https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/Children/271[kb]this-is-fun.wav.mp3",
  "https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/Children/221[kb]are_you_done_mixing_yet.aif.mp3",
  "https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/Donald%20Trump%20Construction%20Kit/210[kb]trump-I-Dont-Know-what-I-said.wav.mp3",
  "https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/Donald%20Trump%20Construction%20Kit/174[kb]trump-Im-Really-Rich.wav.mp3",
  "https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/African%20Vocals%20Sung/225[kb]chorus-hi-ya-heh.wav.mp3",
  "https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/African%20Vocals%20Sung/160[kb]male-eehh-yah-man.wav.mp3",
  "https://dl.dropbox.com/s/xctkeh5mpqx5bog/Hat.mp3?dl=0",
  "https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/MALE%20SINGING/200[kb]bebop_lick.aif.mp3",
  "https://dl.dropbox.com/s/wsxn9ktn0ykrxoa/Scratch.mp3?dl=0"
];
class Drum extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.onClick);
  }
  onPress(e) {
    let indexClicked = keys.indexOf(e.code.substr(3, 1));
    if (indexClicked !== -1) {
      document.getElementById(e.code.substr(3, 1)).play();
      document.getElementById("display").innerHTML = this.props.id;
    }
  }
  onClick(e) {
    document.getElementById(this.props.presskey).play();
    document.getElementById("display").innerHTML = this.props.id;
  }

  render() {
    function getColor(){
      console.log(colors.length+ 'length')
      console.log(Math.floor(Math.random() * colors.length))
      return colors[Math.floor(Math.random() * colors.length)]
    }
    
    return (
      <div>
        <button
          className="drum-pad btn btn-primary btn-default"
          onClick={this.onClick} id={this.props.id} style={{"background-color": getColor()}}
        >
          {this.props.presskey}
          <audio
            src={this.props.audio}
            id={this.props.presskey}
            className="clip"
          ></audio>
        </button>
      </div>
    );
  }
}
const Display = (props) => <div id="display"></div>;

const App = () => {
  return (
    <div id="container">
  
        <div id="console">
          <div id="message">
            <Display />

            <div id="buttons">
              {keys.map((item, index) => (
                <Drum
                  key={keys[index]}
                  presskey={keys[index]}
                  audio={audio[index]}
                  id={description[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

  );
};



export default App;
const backColor = colors[Math.floor(Math.random()*colors.length)]
const backColor2=colors[Math.floor(Math.random()*colors.length)]
$("html").css("background-image", 'linear-gradient(to left top,' + backColor + ', ' + backColor2+ ')');
$('html').css('background-repeat', 'no-repeat');
$('html').css('background-size', '100% 100%');

//$('console').css('background-image', 'url(/jukebox.jpg)')