let isPlaying = false;
let currentIndex = 0;
const sequence = ['A1', 'C45', 'D11', 'B15']; // Здесь может быть любая последовательность

const audioElements = {
    letters: {
        A: new Audio('audio/A.mp3'),
        B: new Audio('audio/B.mp3'),
        C: new Audio('audio/C.mp3'),
        D: new Audio('audio/D.mp3')
    },
    numbers: {}
};

// Функция для загрузки аудиофайлов чисел
async function loadNumberAudio(number) {
    if (!audioElements.numbers[number]) {
        audioElements.numbers[number] = new Audio(`audio/${number}.mp3`);
    }
}

// Воспроизведение точки (буква и число)
async function playPoint(letter, number) {
    return new Promise((resolve) => {
        audioElements.letters[letter].play();
        audioElements.letters[letter].onended = () => {
            setTimeout(() => {
                audioElements.numbers[number].play();
                audioElements.numbers[number].onended = resolve;
            }, 200); // Пауза между воспроизведением буквы и числа
        };
    });
}

// Циклическое воспроизведение
async function startLoop() {
    while (isPlaying && currentIndex < sequence.length) {
        const point = sequence[currentIndex];
        const letter = point.match(/[A-D]/)[0];
        const number = point.match(/\d+/)[0];

        document.getElementById('currentLetter').textContent = point;

        await loadNumberAudio(number);
        await playPoint(letter, number);

        currentIndex++;
        if (currentIndex >= sequence.length) {
            stopLoop();
        } else {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Пауза в 2 секунды между точками
        }
    }
}

// Остановка цикла
function stopLoop() {
    isPlaying = false;
    document.getElementById('playPauseButton').textContent = 'Play';
}

// Обработчик кнопки Play/Pause
document.getElementById('playPauseButton').addEventListener('click', async () => {
    if (isPlaying) {
        stopLoop();
        document.getElementById('currentLetter').textContent = 'Paused';
    } else {
        isPlaying = true;
        document.getElementById('playPauseButton').textContent = 'Pause';
        startLoop();
    }
});