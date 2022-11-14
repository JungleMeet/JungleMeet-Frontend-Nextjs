// eslint-disable no-unused-vars
// let cloudinary: {
//     applyUploadWidget: (
//         element: unknown,
//         options: CloudinaryWidgetOptions,
//         widgetCallback?: Function
//     ) => void;
//     createUploadWidget: (
//         options: CloudinaryWidgetOptions,
//         widgetCallback?: Function
//     ) => CloudinaryWidget;
//     openUploadWidget: (options: CloudinaryWidgetOptions, widgetCallback?: Function) => void;
// };

// interface CloudinaryWidgetOptions {
//     cloudName: string;
//     cropping: boolean;
//     uploadPreset: string;
// }
export interface CloudinaryWidget {
    close: (t?: unknown) => void;
    destroy: (t?: unknown) => void;
    hide: () => void;
    isDestroyed: () => void;
    isMinimized: () => void;
    isShowing: () => void;
    minimize: () => void;
    open: (t?: unknown, e?: unknown) => void;
    show: () => void;
    update: (t?: unknown) => void;
}

export interface CloudinaryWidget {
    cloudName: string;
    cropping: boolean;
    uploadPreset: string;
    sources: string[];
    googleApiKey: string;
    showAdvancedOptions: boolean;
    croppingAspectRatio: string;
    croppingDefaultSelectionRatio: string;
    croppingShowDimensions: boolean;
    croppingCoordinatesMode: string;
    multiple: boolean;
    defaultSource: string;
    styles: {};
}

export interface CloudinaryWidgetResult {
    data: {
        event: string;
        info: string;
    };
    event: string;
    info: CloudinaryCallbackImage;
    uw_event: boolean;
}

export interface CloudinaryCallbackImage {
    asset_id: string;
    batchId: string;
    bytes: number;
    created_at: Date;
    etag: string;
    format: string;
    height: number;
    id: string;
    original_filename: string;
    path: string;
    placeholder: boolean;
    public_id: string;
    resource_type: string;
    secure_url: string;
    signature: string;
    tags: Array<string>;
    thumbnail_url: string;
    type: string;
    url: string;
    version_id: string;
    version: number;
    width: number;
}
