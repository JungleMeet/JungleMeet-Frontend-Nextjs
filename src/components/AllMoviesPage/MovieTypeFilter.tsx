import { Select } from "@chakra-ui/react";

export interface IMovieTypeFilterProps {
    filterByType: string;
    filterByTypeHandler: any;
}

const MovieTypeFilter = ({ filterByType, filterByTypeHandler }: IMovieTypeFilterProps) => {
    return (
        <Select
            placeholder="Movie Type"
            height="53px"
            width="176px"
            variant="outline"
            fontSize={"text2"}
            value={filterByType}
            onChange={(e) => filterByTypeHandler(e.target.value)}
        >
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Animation">Animation</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Documentary">Documentary</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Fantasy">Fantasy</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Music">Music</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="TV Movie">TV Movie</option>
            <option value="Thriller">Thriller</option>
            <option value="War">War</option>
            <option value="Western">Western</option>
        </Select>
    );
};

export default MovieTypeFilter;
