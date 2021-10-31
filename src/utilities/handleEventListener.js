const handleEventListener = (() => {
  const listenerOnProjectFormBtn = (wrapperForm, ...args) => {
    args.forEach((btn) => {
      btn.addEventListener('click', () => {
        wrapperForm.classList.toggle('hidden');
      });
    });
  };

  return {
    listenerOnProjectFormBtn,
  };
})();

export default handleEventListener;
