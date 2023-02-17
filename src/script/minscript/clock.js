const Clock = (() => {
  const currentTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    return `${hour}:${min}:${sec}`;
  };

  return { currentTime };
})();
export default Clock;
