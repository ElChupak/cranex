const modal = new GraphModal();


const positionTitle = document.querySelectorAll('.positions-item__title'),
      modalHeader = document.querySelector('.site-modal__position'),
      applyButton = document.querySelectorAll('.positions-item__link');


applyButton.forEach((el, id) => {
    el.addEventListener('click', () => {
        const applyHeader = positionTitle[id].textContent;

        modalHeader.textContent = `"${applyHeader}"`;
    });
});








