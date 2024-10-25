"use client"
import { FC } from 'react';

interface GlobalSolutionProps {
  onChange: (value: number | null) => void;
}

const GlobalSolution: FC<GlobalSolutionProps> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    onChange(isNaN(value) ? null : value);
  };

  return (
    <div>
      <label>Global Solution:</label>
      <input 
        type="number" 
        onChange={handleChange} 
        placeholder="Digite a nota da Global Solution" 
      />
    </div>
  );
};

export default GlobalSolution;