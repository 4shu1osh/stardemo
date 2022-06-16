const returnTimerValue = (time: any) => {
  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;
  return `${minutes}${':'}${
    seconds <= 9 && seconds >= 0 ? '0' + seconds : seconds
  }`;
};

export default returnTimerValue;
