document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('FeedbackForm');
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closePopup');

  if (!form) {
    console.warn('Cannot find a form with an id="FeedbackForm"');
  }
  if (!popup) {
    console.warn('Popup with id="popup" was not found');
  }
  if (!closeBtn) {
    console.warn('Close button with id="closePopup" was not found');
  }

  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset();
    if (popup) popup.style.display = 'flex';
    closeBtn?.focus();
  });

  closeBtn?.addEventListener('click', function (e) {
    e.preventDefault(); // на всякий случай
    if (popup) popup.style.display = 'none';
  });

  popup?.addEventListener('click', function (e) {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popup && popup.style.display === 'flex') {
      popup.style.display = 'none';
    }
  });
});


