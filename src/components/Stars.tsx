import { AiTwotoneStar } from 'react-icons/ai';

interface IProps {
	stars: number;
}

export const Stars = ({ stars } : IProps) => {
const starComponents = [];
for (let i = 0; i < stars; i++) {
	starComponents.push(<AiTwotoneStar className="text-blue-900"/>);
}

	return <div className='flex mt-[.4rem]'>{starComponents}</div>;
};
