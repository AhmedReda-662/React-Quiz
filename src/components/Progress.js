function Progress({ index, numQuestion, points, maxPossiablePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + +(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>
      <p>
        <strong>
          {points}/{maxPossiablePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
