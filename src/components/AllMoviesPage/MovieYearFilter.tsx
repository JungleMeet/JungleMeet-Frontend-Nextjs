import { Select } from "@chakra-ui/react";

export interface IMovieYearFilterProps {
	filterByYear: string;
	filterByYearHandler: any;
}

const MovieYearFilter = ({ filterByYear, filterByYearHandler }: IMovieYearFilterProps) => {
	const currentYear = (new Date()).getFullYear();
	const options = [];
	for (let i = currentYear; i >= 1920; i--) {
		options.push(<option value={i} key={i}>{i}</option>)
	}


	return (
		<Select
			placeholder="Year"
			height="53px"
			width="110px"
			variant="outline"
			fontSize={"text2"}
			value={filterByYear}
			onChange={(e) => filterByYearHandler(e.target.value)}
		>
			{options}
		</Select>
	);
};

export default MovieYearFilter;
