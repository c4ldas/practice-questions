let questions = [];
let current = 0;
let score = 0;
let selected = new Set();

function loadQuestions() {
  questions = window.quizData;
}

function startQuiz() {
  const num = parseInt(document.getElementById('numQuestions').value);
  const shuffled = questions.sort(() => 0.5 - Math.random()).slice(0, num);
  questions = shuffled;
  current = 0;
  score = 0;
  document.getElementById('setup').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  selected.clear();
  document.getElementById('question').innerHTML = `<h3>Q${current + 1}. ${q.question}</h3>`;

  const opts = document.getElementById('options');
  opts.innerHTML = '';
  q.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.classList.add('option');
    div.innerHTML = opt;
    div.onclick = () => toggleSelect(i, div);
    opts.appendChild(div);
  });

  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('submitBtn').style.display = 'inline-block';
}

function toggleSelect(i, el) {
  if (selected.has(i)) {
    selected.delete(i);
    el.style.border = 'none';
  } else {
    selected.add(i);
    el.style.border = '2px solid #58a6ff';
  }
}

function submitAnswer() {
  const q = questions[current];
  const opts = document.querySelectorAll('.option');
  const correctAnswers = Array.isArray(q.answers) ? q.answers : [q.answer];

  opts.forEach((o, idx) => {
    o.onclick = null;
    if (correctAnswers.includes(idx)) {
      o.classList.add('correct');
    } else if (selected.has(idx)) {
      o.classList.add('wrong');
    }
  });

  const correctSet = new Set(correctAnswers);
  const selectedSet = new Set(selected);
  if (setsEqual(correctSet, selectedSet)) {
    score++;
  }

  document.getElementById('submitBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'inline-block';
}

function setsEqual(a, b) {
  if (a.size !== b.size) return false;
  for (const x of a) if (!b.has(x)) return false;
  return true;
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    const total = questions.length;
    const percent = Math.round((score / total) * 100);
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `
      <h2>All questions completed 🎉</h2>
      <p>Your score: <strong>${score}</strong> / ${total} (${percent}%)</p>
      <button id="restartBtn">Restart Quiz</button><small style="color:#8b949e;">Or press Enter to restart</small>
    `;

    const restartBtn = document.getElementById('restartBtn');
    restartBtn.onclick = () => window.location.reload();

    // Enable Enter key to restart
    const handleRestart = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        window.location.reload();
      }
    };
    document.addEventListener('keydown', handleRestart, { once: true });
  }
}


document.getElementById('startBtn').onclick = startQuiz;
document.getElementById('nextBtn').onclick = nextQuestion;

// Submit button
const nextBtn = document.getElementById('nextBtn');
const controls = document.getElementById('controls');
const submitBtn = document.createElement('button');
submitBtn.id = 'submitBtn';
submitBtn.textContent = 'Submit Answer';
submitBtn.style.display = 'none';
submitBtn.onclick = submitAnswer;
controls.insertBefore(submitBtn, nextBtn);

loadQuestions();

// Keyboard controls
document.addEventListener('keydown', (event) => {
  const key = event.key;

  // Only handle keyboard during the quiz
  const quizVisible = document.getElementById('quiz').style.display === 'block';
  if (!quizVisible) return;

  const opts = document.querySelectorAll('.option');

  // 1–9 keys for selecting/deselecting options
  if (/^[1-9]$/.test(key)) {
    const idx = parseInt(key, 10) - 1;
    if (idx < opts.length) {
      toggleSelect(idx, opts[idx]);
    }
  }

  // ENTER = Submit answer
  if (key === 'Enter') {
    const submitBtn = document.getElementById('submitBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (submitBtn.style.display !== 'none') {
      submitAnswer();
    } else if (nextBtn.style.display !== 'none') {
      nextQuestion();
    }
  }
});

// Keyboard support for setup screen
window.addEventListener('load', () => {
  const numInput = document.getElementById('numQuestions');
  numInput.focus(); // Auto-focus input when page loads

  const handleEnterToStart = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation(); // prevents Enter from reaching quiz listener
      startQuiz();
    }
  };

  numInput.addEventListener('keydown', handleEnterToStart);
  document.getElementById('setup').addEventListener('keydown', handleEnterToStart);
});

