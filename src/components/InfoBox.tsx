// import { AiTwotoneStar } from 'react-icons/ai';

interface IProps {
	title: string;
	body: string;
	stars: number;
}

export const InfoBox = ({ title, body, stars} : IProps) => {
	return (
		<section className="bg-orange-300 p-4 rounded mt-4 shadow-gray-500 shadow-lg">
			<h2 className="text-2xl mb-2 flex gap-2"><span>{title}</span> <div>{"*".repeat(stars)}</div></h2>
			<p>{body}</p>
		</section>
	);
};
