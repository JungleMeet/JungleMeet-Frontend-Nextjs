import { Progress } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ProgressBar = ({ duration }: { duration: number }) => {
    const [percentage, setPercentage] = useState(1);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setPercentage((percentage) => percentage + 1);
        }, duration / 100);

        return () => clearInterval(progressInterval);
    }, []);

    return <Progress colorScheme={"red"} size="32px" value={percentage}></Progress>;
};

export default ProgressBar;
