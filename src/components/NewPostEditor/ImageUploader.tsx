import React from "react";
import { useState } from "react";
// import Head from "next/head";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import {
    ImageInput,
    ImageInputWrapper,
    ImagePlus,
    ImageWrapper,
} from "./NewPostPage.style";

const ImageUploader = () => {
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();

    function handleOnChange(changeEvent) {
        const reader = new FileReader();

        reader.onload = function (onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
            setUploadData(undefined);
        };

        reader.readAsDataURL(changeEvent.target.files[0]);
    }

    async function handleOnSubmit(event) {
        event.preventDefault();

        const form = event.currentTarget;
        const fileInput = Array.from(form.elements).find(({ name }) => name === "file");

        const formData = new FormData();

        for (const file of fileInput.files) {
            formData.append("file", file);
        }

        formData.append("upload_preset", "my-uploads");

        const data = await fetch(
            "https://api.cloudinary.com/v1_1/[Your Cloudinary Cloud Name]/image/upload",
            {
                method: "POST",
                body: formData,
            }
        ).then((r) => r.json());

        setImageSrc(data.secure_url);
        setUploadData(data);
    }

    return (
        <div>
            {/* <Head>
      <title>Image Uploader</title>
      <meta name="description" content="Upload your image to Cloudinary!" />
      <link rel="icon" href="/favicon.ico" />
    </Head> */}
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

                    <Image src={imageSrc} marginTop="25px" objectFit="cover" width="100%" />

                    {imageSrc && !uploadData && (
                        <Flex justifyContent="center">
                            <Button
                                marginTop="25px"
                                backgroundColor="blue.500"
                                color="#fff"
                                _hover={{ background: "blue.800" }}
                            >
                Upload Files
                            </Button>
                        </Flex>
                    )}

                    {uploadData && (
                        <code>
                            <pre>{JSON.stringify(uploadData, null, 2)}</pre>
                        </code>
                    )}
                </form>
            </Box>
        </div>
    );
};

export default ImageUploader;
