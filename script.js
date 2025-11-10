let questions = [];
let current = 0;
let score = 0;
let selected = new Set();
let quizTitle = "";

function getAvailableTopics() {
  const topics = [];
  for (const key in window) {
    if (key.endsWith('QuizData')) {
      const topicName = key.replace('QuizData', '').toLowerCase();
      topics.push({
        value: topicName,
        label: window[key + 'Title'] || topicName.charAt(0).toUpperCase() + topicName.slice(1)
      });
    }
  }
  return topics;
}


function populateTopicSelect() {
  const select = document.getElementById('topicSelect');
  select.innerHTML = ''; // clear any hardcoded options

  const topics = getAvailableTopics();
  topics.forEach((topic, index) => {
    const opt = document.createElement('option');
    opt.value = topic.value;
    opt.textContent = topic.label;
    select.appendChild(opt);

    if (index === 0) updateNumQuestions(topic.value);
  });

  // update numQuestions when user changes topic
  select.addEventListener('change', (e) => {
    updateNumQuestions(e.target.value);
  });
}

function updateNumQuestions(topic) {
  const key = topic + 'QuizData';
  const numInput = document.getElementById('numQuestions');

  if (window[key]) {
    const totalQuestions = window[key].length;
    numInput.max = totalQuestions;
    numInput.value = totalQuestions; // default to all questions
  } else {
    numInput.max = 1;
    numInput.value = 1;
  }
}


function loadQuestions(topic) {
  const key = topic + 'QuizData'; // e.g., 'terraformQuizData'
  const titleKey = topic + 'Title';

  if (window[key]) {
    questions = window[key];
    quizTitle = window[titleKey] || topic.charAt(0).toUpperCase() + topic.slice(1);
  } else {
    questions = [];
    quizTitle = "";
  }
}

/* 
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
*/

function startQuiz() {
  const topic = document.getElementById('topicSelect').value;

  loadQuestions(topic); // only assign questions and title

  if (questions.length === 0) {
    alert("No questions available for this topic.");
    return;
  }

  // Shuffle and limit number of questions
  const num = parseInt(document.getElementById('numQuestions').value);
  questions = questions.sort(() => 0.5 - Math.random()).slice(0, num);

  // Reset state
  current = 0;
  score = 0;
  selected.clear();

  // Update title dynamically
  document.querySelector('.container h1').textContent = quizTitle + " Practice Quiz";

  // Show quiz
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

  if (q.type === 'fill-in') {
    // Render text input
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'fillInput';
    input.placeholder = 'Type your answer here...';
    Object.assign(input.style, {
      width: '100%',
      padding: '8px',
      fontSize: '1em',
      borderRadius: '6px',
      border: '1px solid #30363d',
      background: '#0d1117',
      color: '#e6edf3'
    });
    opts.appendChild(input);
    input.focus();
  } else {
    // Render multiple-choice
    q.options.forEach((opt, i) => {
      const div = document.createElement('div');
      div.classList.add('option');
      div.innerHTML = opt;
      div.onclick = () => toggleSelect(i, div);
      opts.appendChild(div);
    });
  }

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
  const optionsDiv = document.getElementById('options');

  // 🧠 Fill-in question logic
  if (q.type === 'fill-in') {
    const input = document.getElementById('fillInput');
    const userInput = input.value.trim();
    const correctAnswer = q.answer.trim();

    const feedback = document.createElement('p');
    feedback.style.marginTop = '10px';

    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
      feedback.innerHTML = `<span style="color: #3fb950;">✅ Correct!</span>`;
      score++;
    } else {
      feedback.innerHTML = `<span style="color: #f85149;">❌ Wrong.</span><br>Correct answer: <code>${correctAnswer}</code>`;
    }

    // Disable input after submission
    input.disabled = true;
    optionsDiv.appendChild(feedback);

  } else {
    // 🧠 Multiple-choice logic
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
  }

  // Switch buttons
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

// Keyboard support for setup screen and populate topic dropdown dynamically
window.addEventListener('load', () => {

  populateTopicSelect();

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


