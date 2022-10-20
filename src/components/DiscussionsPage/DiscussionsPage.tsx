import React, { useMemo } from "react";
import Discussion from "./Discussion";
import { discusstionsDate } from "./discussionsData";

const DiscussionsPage = () => {
    const discusstionnsDataMemo = useMemo(
        () => (
            <>
                {discusstionsDate.map(({ id, ...rest }) => (
                    <Discussion
                        gap="10px"
                        color="gray.400"
                        fontSize="text4"
                        lineHeight="lh24"
                        fontWeight="400"
                        imageSize="28px"
                        likesColor="gray.400"
                        key={id}
                        {...rest}
                    />
                ))}
            </>
        ),
        [discusstionsDate]
    );

    return <>{discusstionnsDataMemo}</>;
};

export default DiscussionsPage;
