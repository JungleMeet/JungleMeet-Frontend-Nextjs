import React from "react";
import { useState } from "react";
import { Box, Text, Flex, Image, Button, useToast, Progress } from "@chakra-ui/react";
import { ImageInput, ImageInputWrapper, ImagePlus, ImageWrapper } from "./NewPostPage.style";
import axios from "axios";

interface IImageUploaderProps {
    setBgImg: (value: string) => void;
}

const ImageUploader = ({ setBgImg }: IImageUploaderProps) => {
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();
    const [loading, setLoading] = useState(false);

    const toast = useToast();

    function handleOnChange(changeEvent: any) {
        const reader = new FileReader();

        reader.onload = function (onLoadEvent: any) {
            setImageSrc(onLoadEvent.target.result);
            setUploadData(undefined);
        };

        reader.readAsDataURL(changeEvent.target.files[0]);
    }

    async function handleOnSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log(event.currentTarget);

        setLoading(true);

        const formCollection = event.currentTarget;
        console.log(formCollection);

        const formArray = Array.from((formCollection as HTMLFormElement).elements);
        const fileInput = formArray.find((i: any) => i.name === "file") as HTMLFormElement;

        const formData = new FormData();

        for (const file of fileInput?.files) {
            formData.append("file", file);
        }

        formData.append("upload_preset", "uploads");

        const { data } = await axios.post(
            "https://api.cloudinary.com/v1_1/junglemeet/image/upload",
            formData
        );

        setImageSrc(data.secure_url);
        setUploadData(data);
        setBgImg(data.secure_url);
        toast({
            position: "top",
            title: "Image Upload Success!",
            status: "success",
            duration: 2000,
            isClosable: true,
        });

        setLoading(false);
    }

    return (
        <Box background="gray.200" padding="32px" borderRadius="5px" marginBottom="50px">
            <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
                <ImageInputWrapper>
                    <ImageWrapper>
                        <ImagePlus>
                            <Image src="/upload_image.svg" position="relative" />
                        </ImagePlus>
                    </ImageWrapper>
                    <Flex flexDirection="column" justifyContent="space-between">
                        <Text fontSize="text3" fontWeight="600" lineHeight="lh28">
              SELECT YOUR COVER IMAGE
                        </Text>
                        <Text fontSize="text4" lineHeight="lh28">
              Drop your image here or click to add
                        </Text>
                    </Flex>
                    <ImageInput type="file" name="file" />
                </ImageInputWrapper>
                <Image src={imageSrc} objectFit="cover" width="100%" />
                {loading && <Progress size="sm" isIndeterminate backgroundColor="inherit" />}
                {imageSrc && !uploadData && (
                    <Flex justifyContent="center">
                        <Button
                            type="submit"
                            backgroundColor="blue.500"
                            color="#fff"
                            _hover={{ background: "blue.800" }}
                            marginTop="25px"
                        >
              Upload Files
                        </Button>
                    </Flex>
                )}
            </form>
        </Box>
    );
};

export default ImageUploader;
