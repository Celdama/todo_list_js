const handleEventListener = (() => {
  const listenerToHideForm = (wrapperForm, ...args) => {
    args.forEach((btn) => {
      btn.addEventListener('click', () => {
        wrapperForm.classList.toggle('hidden');
      });
    });
  };

  return {
    listenerToHideForm,
  };
})();

export default handleEventListener;
