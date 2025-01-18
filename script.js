document.addEventListener('DOMContentLoaded', () => {
    // Кэшируем элементы DOM для оптимизации
    const vipModal = document.getElementById("vipModal");
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById("closeModalBtn");
    const themeToggleButton = document.getElementById('themeToggleButton');


    // Функция для открытия и закрытия попапа
    function toggleVIPPopup() {
        if (vipModal.style.display === "block") {
            vipModal.style.display = "none";
        } else {
            vipModal.style.display = "block";
        }
    }

    // Закрытие попапа при клике вне его области
    document.addEventListener('click', (event) => {
        if (vipModal && vipModal.style.display === "block" && event.target === vipModal) {
            vipModal.style.display = "none";
        }
    });

    // Открытие попапа (если кнопка существует)
    if (openModalBtn) {
        openModalBtn.onclick = toggleVIPPopup;
    }

    // Закрытие попапа при нажатии на кнопку "Закрыть"
    if (closeModalBtn) {
        closeModalBtn.onclick = () => {
            vipModal.style.display = "none";
        };
    } else {
        console.error('Кнопка "Закрыть" не найдена!');
    }

    // Убедитесь, что попап скрыт при загрузке страницы
    if (vipModal) {
        vipModal.style.display = "none";
    }
});

// Переменная для хранения последнего действия
let lastAction = '';


// Функция для отображения уведомлений
function toggleNotifications() {
    if (notifications) {
        notifications.classList.toggle('active');
    }
}

// Функция для обновления состояния кнопки отката
function setUndoButtonState(isVisible, isDisabled) {
    if (undoButton) {
        undoButton.style.display = isVisible ? 'block' : 'none';
        undoButton.disabled = isDisabled;
    }
}

// Функция для свайпа (дизлайк или лайк)
function swipe(direction) {
    if (direction === 'left') {
        lastAction = 'dislike';
        setUndoButtonState(true, false); // Показываем и активируем кнопку
        alert('Дизлайк');
    } else if (direction === 'right') {
        lastAction = 'like';
        setUndoButtonState(true, false); // Показываем и активируем кнопку
        alert('Лайк');
    }
}

// Функция для листания фото
function nextPhoto() {
    alert('Перелистывание фото');
}

// Функция для отправки подарка
function sendGift() {
    alert('Подарок отправлен');
}

// Функция для отката действия
function undoAction() {
    if (lastAction === 'dislike') {
        alert('Операция откатана: Дизлайк отменен');
    } else if (lastAction === 'like') {
        alert('Операция откатана: Лайк отменен');
    }
    lastAction = ''; // Очищаем переменную с действием
    setUndoButtonState(false, true); // Скрываем и деактивируем кнопку
}

// Функция для переключения меню
function toggleMenu() {
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

// Обработчик событий клавиатуры
document.addEventListener('keydown', (event) => {
    const activeElement = document.activeElement;
    if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
        return; // Не выполняем действия, если фокус в поле ввода
    }

    switch (event.key) {
        case 'ArrowRight': // Лайк
            swipe('right');
            break;
        case 'ArrowLeft': // Дизлайк
            swipe('left');
            break;
        case 'Backspace': // Откат
            undoAction();
            break;
        case ' ': // Пробел для листания фото
            event.preventDefault(); // Чтобы страница не прокручивалась
            nextPhoto();
            break;
        case 'Enter': // Подарок
            sendGift();
            break;
        default:
            break;
    }
});

// Получаем кнопку для переключения темы
const themeToggleButton = document.querySelector('.theme-toggle');

// Функция для переключения темы
themeToggleButton.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        document.body.setAttribute('data-theme', 'dark'); // Переключаем на темную тему
    } else {
        document.body.setAttribute('data-theme', 'light'); // Переключаем на светлую тему
    }
});