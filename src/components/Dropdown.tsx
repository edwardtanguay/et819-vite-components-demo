interface IProps {
	choices: string[];
}

export const Dropdown = ({ choices }: IProps) => {
	return (
		<select className="bg-slate-400 mr-2 rounded p-1">
			{choices.map((choice) => (
				<option value={choice.toLowerCase()}>{choice}</option>
			))}
		</select>
	);
};
