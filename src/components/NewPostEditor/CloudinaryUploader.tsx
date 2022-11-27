import React from "react";
import { Box, Text, Flex, Image, useToast, Button } from "@chakra-ui/react";
import { ImageButtonWrapper, ImageInput, ImagePlus, ImageWrapper } from "./NewPostPage.style";
import UploadWidget from "./UploadWidget";
import { CloudinaryCallbackImage } from "./cloudinaryType";

interface ICloudinaryUploaderProps {
    setBgImg: (value: string) => void;
    bgImg: string | undefined;
}

const CloudinaryUploader = ({ setBgImg, bgImg }: ICloudinaryUploaderProps) => {
    const toast = useToast();

    const saveImage = (imageData: CloudinaryCallbackImage) => {
        setBgImg(imageData.url);
        toast({
            position: "top",
            title: "Image Upload Success!",
            status: "success",
            duration: 2000,
            isClosable: true,
        });
    };

    return (
        <Box background="gray.200" padding="32px" borderRadius="5px" marginBottom="50px">
            {!bgImg ? (
                <UploadWidget callback={saveImage}>
                    {({ open }) => (
                        <ImageButtonWrapper onClick={(e: any) => open(e)} bgImg={bgImg}>
                            <ImageWrapper>
                                <ImagePlus>
                                    <Image src="/upload_image.svg" position="relative" />
                                </ImagePlus>
                            </ImageWrapper>
                            <Flex flexDirection="column" justifyContent="space-between" textAlign="start">
                                <Text fontSize="text3" fontWeight="600" lineHeight="lh28">
                  SELECT YOUR COVER IMAGE
                                </Text>
                                <Text fontSize="text4" lineHeight="lh28">
                  Click here to upload your image.
                                </Text>
                            </Flex>
                            <ImageInput type="file" name="file" />
                        </ImageButtonWrapper>
                    )}
                </UploadWidget>
            ) : (
                <Flex flexDirection="column" alignItems="flex-end">
                    <Image src={bgImg} objectFit="cover" width="100%" />
                    <UploadWidget callback={saveImage}>
                        {({ open }) => (
                            <Button
                                mt="20px"
                                width="200px"
                                color="#fff"
                                backgroundColor="blue.500"
                                _hover={{
                                    background: "blue.800",
                                }}
                                onClick={(e: any) => open(e)}
                            >
                Change Cover Image
                            </Button>
                        )}
                    </UploadWidget>
                </Flex>
            )}
        </Box>
    );
};

export default CloudinaryUploader;
