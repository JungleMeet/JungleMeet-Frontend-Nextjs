import { setVideoAddAndOpenModal } from "@/app/reducer/modalSlice";
import { getYoutubeLinkById } from "@/utils/axiosMovieApi";
import { Button, Image } from "@chakra-ui/react";
import { isEmpty } from "lodash";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface IWatchVideoButtonProps {
    movieId: number;
    src?: string;
}

const WatchVideoButton = ({ movieId, src }: IWatchVideoButtonProps) => {
    const { t } = useTranslation("home");
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [disableButton, setDisableButton] = useState(false)

    const getVideoLinkThenOpenModal = () => {
        if (src) dispatch(setVideoAddAndOpenModal(src));

        if (!src) {
            setLoading(true);
            getYoutubeLinkById(movieId).then(({ data }) => {
                setLoading(false);
                if (isEmpty(data)) return setDisableButton(true)
                dispatch(setVideoAddAndOpenModal(data));
            });
        }
    };

    return (
        <Button
            bg="rgba(229, 231, 235, 0.5)"
            color="#FFF"
            fontSize="12px"
            fontWeight="700"
            lineHeight="24px"
            fontFamily="secondary"
            width="168px"
            height="32px"
            backdropFilter="blur(5px)"
            borderRadius="5px"
            _hover={{
                backgroundColor: "gray.600",
            }}
            disabled={disableButton}
            isLoading={loading}
            onClick={getVideoLinkThenOpenModal}
        >
            <Image src="/watchtrailors.svg" marginRight="8.84px"></Image>
            {t("home:watchTrailer")}
        </Button>
    );
};

export default WatchVideoButton;
