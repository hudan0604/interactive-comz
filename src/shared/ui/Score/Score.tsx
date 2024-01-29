import React, { FC } from 'react';
import './Score.scss';

interface ScoreProps {}

const Score: FC<ScoreProps> = () => (
  <div className="Score" data-testid="Score">
    Score Component
  </div>
);

export default Score;
