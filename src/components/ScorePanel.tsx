interface IProps {
	playerResult: {
		name: string;
		score: number;
	};
}

export const ScorePanel = ({ playerResult }: IProps) => {
	return (
		<div className="bg-purple-400 mr-2 w-24 px-1 py-3 flex justify-center rounded  border-blue-950 border shadow shadow-blue-900">
			<div>
				<p className="font-bold">{playerResult.name}</p>
				<p>{playerResult.score}</p>
			</div>
		</div>
	);
};
