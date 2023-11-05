// import { AiTwotoneStar } from 'react-icons/ai';

interface IProps {
	title: string;
	body: string;
	stars: number;
	highlight?: boolean;
}

export const InfoBox = ({ title, body, stars, highlight = false} : IProps) => {
	const sectionStyle = highlight ? "bg-yellow-300 border-4 border-red-500 p-4 rounded mt-4 shadow-gray-500 shadow-lg" : "bg-orange-300 p-4 rounded mt-4 shadow-gray-500 shadow-lg";
	return (
		<section className={sectionStyle}>
			<h2 className="text-2xl mb-2 flex gap-2"><span>{title}</span> <div>{"*".repeat(stars)}</div></h2>
			<p>{body}</p>
		</section>
	);
};
