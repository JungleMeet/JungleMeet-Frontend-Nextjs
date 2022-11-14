import Head from "next/head";
import {
    CloudinaryCallbackImage,
    CloudinaryWidget,
    CloudinaryWidgetResult,
} from "./cloudinaryType";

interface ChildrenProps {
    open: (e: MouseEvent) => void;
}

interface CloudinaryUploadWidgetProps {
    children: (props: ChildrenProps) => React.ReactNode;
    callback: (image: CloudinaryCallbackImage) => void;
}

const UploadWidget = ({ callback, children }: CloudinaryUploadWidgetProps) => {
    function showWidget() {
        const widget: CloudinaryWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "junglemeet",
                uploadPreset: "uploads",
                sources: [
                    "local",
                    "url",
                    "camera",
                    "image_search",
                    "google_drive",
                    "facebook",
                    "dropbox",
                    "instagram",
                    "getty",
                ],
                googleApiKey: "<image_search_google_api_key>",
                showAdvancedOptions: false,
                cropping: true,
                croppingAspectRatio: "5.12",
                croppingDefaultSelectionRatio: "0.19",
                croppingShowDimensions: true,
                croppingCoordinatesMode: "custom",
                multiple: false,
                defaultSource: "local",
                styles: {
                    palette: {
                        window: "#111827",
                        sourceBg: "#111827",
                        windowBorder: "#FFFFFF",
                        tabIcon: "#BE123C",
                        inactiveTabIcon: "#FFFFFF",
                        menuIcons: "#BE123C",
                        link: "#BE123C",
                        action: "#0EA5E9",
                        inProgress: "#00BFFF",
                        complete: "#33ff00",
                        error: "#EA2727",
                        textDark: "#000000",
                        textLight: "#FFFFFF",
                    },
                    fonts: {
                        default: null,
                        "'Poppins', sans-serif": {
                            url: "https://fonts.googleapis.com/css?family=Poppins",
                            active: true,
                        },
                    },
                },
            },
            (error: unknown | undefined, result: CloudinaryWidgetResult) => {
                if (!error && result && result.event === "success") {
                    callback(result.info);
                }
            }
        );

        widget.open();
    }

    function open(e: MouseEvent) {
        e?.preventDefault();
        showWidget();
    }

    return (
        <>
            <Head>
                <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript" />
            </Head>
            {children({ open })}
        </>
    );
};

export default UploadWidget;
