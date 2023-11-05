interface IProps {
	playerResult: {
		name: string;
		score: number;
	};
}

export const ScorePanel = ({ playerResult }: IProps) => {
	return (
		<div className="bg-purple-400 mb-2 mr-2 w-24 px-1 py-3 flex justify-center rounded mt-3 border-blue-950 border shadow shadow-blue-900">
			<div>
				<p className="font-bold">{playerResult.name}</p>
				<p>{playerResult.score}</p>
			</div>
		</div>
	);
};
