const SecondsCounter = ({
  seconds,
  handleStop,
  handleResume,
  handleReset,
  handleCountDown,
}) => {
  return (
    <>
      <h1 className="mb-5">Counter</h1>
      <div className="mb-5">{seconds}</div>
      <button className="btn btn-danger me-2" onClick={handleStop}>
        Parar
      </button>
      <button className="btn btn-success me-2" onClick={handleResume}>
        Reanudar
      </button>
      <button className="btn btn-warning me-2" onClick={handleReset}>
        Reiniciar
      </button>
      <button className="btn btn-primary me-2" onClick={handleCountDown}>
        Cuenta regresiva (10s)
      </button>
      <button className="btn btn-secondary me-2">Contador Normal</button>
    </>
  );
};

export default SecondsCounter;
