
const notificationButton = document.querySelector('.notification-btn');
const notificationMenu = document.querySelector('.notification-menu');

notificationButton.addEventListener('click', () => {
    notificationMenu.classList.toggle('hidden');
});
