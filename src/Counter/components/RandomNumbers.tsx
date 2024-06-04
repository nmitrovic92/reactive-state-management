const RandomNumbers = () => {
  const numbers = Array.from({ length: 10000 }, () => Math.random());

  return (
    <div>
      {numbers.map((num, index) => (
        <div key={index}>{num}</div>
      ))}
    </div>
  );
};

export default RandomNumbers;
