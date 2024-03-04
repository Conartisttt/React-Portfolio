import { useState, useEffect } from "react";

const MatrixCode = () => {
  const [matrixCode, setMatrixCode] = useState([]);

  useEffect(() => {
    const generateMatrixCode = () => {
      const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const codeLength = 100;
      const code = [];

      for (let i = 0; i < codeLength; i++) {
        code.push(characters[Math.floor(Math.random() * characters.length)]);
      }

      setMatrixCode(code);
    };

    generateMatrixCode();

    const interval = setInterval(generateMatrixCode, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="matrix-code">
      {matrixCode.map((character, index) => (
        <span key={index} className="matrix-character">
          {character}
        </span>
      ))}
    </div>
  );
};

export default MatrixCode;