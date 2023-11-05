interface IProps {
	title: string;
	children: React.ReactNode;
}

export const Wrapper = ({title, children} : IProps) => {
	return (
		<fieldset className="border-2 mt-6 border-gray-200 rounded px-4 pt-2 pb-4">
			<legend className="text-gray-500">{title}</legend>
			<p>{children}</p>
		</fieldset>
	)
}