import { useState } from "react";

interface IProps {
	playerResult: {
		name: string;
		score: number;
	},
	setFavorite: (favorite: string) => void
}

export const ScorePanel = ({ playerResult, setFavorite }: IProps) => {
	const [paid, setPaid] = useState(false);
	return (
		<div className="bg-purple-400 mr-2 w-24 px-1 py-3 justify-center rounded flex  border-blue-950 border shadow shadow-blue-900">
			<div>
				<p className="font-bold flex justify-center">
					{playerResult.name}
					{paid && <span>*</span>}
				</p>
				<p className="flex justify-center">{playerResult.score}</p>
				<div className="flex justify-center">
					<button onClick={() => setPaid(!paid)}>invited</button>
				</div>
				<div className="flex justify-center">
					<button onClick={() => setFavorite(playerResult.name)}>favorite</button>
				</div>
			</div>
		</div>
	);
};
