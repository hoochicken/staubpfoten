
import abcjs from 'abcjs';
import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <header>
    <h1>ABCjs Music Studio</h1>
    <p>Write music using ABC notation.</p>
  </header>

  <main>
    <section class="editor">
      <h2>ABC Notation</h2>

      <textarea id="abc-editor" spellcheck="false">
X:1
T:My First Tune
C:My Music Studio
M:4/4
L:1/8
K:C
C D E F | G A B c |
c B A G | F E D C |
      </textarea>

      <div class="controls">
        <button id="render">Render Music</button>
        <button id="play">Play</button>
        <button id="stop">Stop</button>
      </div>
    </section>

    <section class="sheet">
      <h2>Sheet Music</h2>
      <div id="paper"></div>
    </section>
  </main>
`;

const editor = document.querySelector('#abc-editor');
const paper = document.querySelector('#paper');

let visualObj = null;
let synth = null;

function renderMusic() {
  stopMusic();

  visualObj = abcjs.renderAbc(
    paper,
    editor.value,
    {
      responsive: 'resize',
      staffwidth: 740,
      paddingtop: 15,
      paddingbottom: 15
    }
  )[0];
}

async function playMusic() {
  if (!visualObj) {
    renderMusic();
  }

  stopMusic();

  synth = new abcjs.synth.CreateSynth();

  try {
    await synth.init({
      visualObj: visualObj
    });

    await synth.prime();

    await synth.start();
  } catch (error) {
    console.error('Playback error:', error);
    alert('Could not play the music. Check the browser console.');
  }
}

function stopMusic() {
  if (synth) {
    synth.stop();
    synth = null;
  }
}

document.querySelector('#render')
  .addEventListener('click', renderMusic);

document.querySelector('#play')
  .addEventListener('click', playMusic);

document.querySelector('#stop')
  .addEventListener('click', stopMusic);

editor.addEventListener('input', renderMusic);

// Initial rendering
renderMusic();
