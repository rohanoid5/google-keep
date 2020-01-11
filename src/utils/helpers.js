export const handleInputResize = e => {
  e.target.style.height = 'inherit';
  const computed = window.getComputedStyle(e.target);
  const height =
    parseInt(computed.getPropertyValue('border-top-width'), 10) +
    parseInt(computed.getPropertyValue('padding-top'), 10) +
    e.target.scrollHeight +
    parseInt(computed.getPropertyValue('padding-bottom'), 10) +
    parseInt(computed.getPropertyValue('border-bottom-width'), 10);
  e.target.style.height = `${height}px`;
};
