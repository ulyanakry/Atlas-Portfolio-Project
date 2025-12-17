// scripts/form-popup.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('FeedbackForm');
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closePopup');

  // Защита: если элементов нет — логируем и выходим
  if (!form) {
    console.warn('Cannot find a form with an id="FeedbackForm"');
  }
  if (!popup) {
    console.warn('Popup с id="popup" не найден');
  }
  if (!closeBtn) {
    console.warn('Кнопка закрытия с id="closePopup" не найдена');
  }

  // Открываем попап (пример) — скорее всего у тебя это в сабмите
  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset();
    if (popup) popup.style.display = 'flex';
    closeBtn?.focus();
  });

  // Надёжное закрытие по кнопке
  closeBtn?.addEventListener('click', function (e) {
    e.preventDefault(); // на всякий случай
    if (popup) popup.style.display = 'none';
  });

  // Закрытие при клике по темной области (overlay)
  popup?.addEventListener('click', function (e) {
    // если кликнули по самому overlay (а не по .popup-content), закрываем
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });

  // Закрытие по Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popup && popup.style.display === 'flex') {
      popup.style.display = 'none';
    }
  });
});


