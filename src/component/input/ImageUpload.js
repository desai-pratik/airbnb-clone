import React, { useCallback, useEffect, useState } from "react";
import { CldUploadWidget } from "cloudinary-react";
import { TbPhotoPlus } from "react-icons/tb";

const uploadPreset = "kxtwb9aq";
const cloudName = "dfuqp3pga";

const ImageUpload = ({ onChange, value }) => {
  const [isCloudinaryReady, setIsCloudinaryReady] = useState(false);

  // Dynamically load Cloudinary script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;
    script.onload = () => {
      setIsCloudinaryReady(true);
    };
    document.body.appendChild(script);
  }, []);

  const handleUpload = useCallback(
    (result) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  const showWidget = () => {
    if (isCloudinaryReady) {
      window.cloudinary.openUploadWidget(
        {
          cloudName: cloudName,
          uploadPreset: uploadPreset,
          sources: ["local"],
          maxFiles: 1,
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            handleUpload(result);
          }
        }
      );
    } else {
      console.error("Cloudinary widget is not ready");
    }
  };

  return (
    <div
      onClick={showWidget}
      className="relative flex flex-col items-center justify-center gap-4 p-20 transition border-2 border-dashed cursor-pointer hover:opacity-70 border-neutral-300 text-neutral-600"
    >
      <TbPhotoPlus size={50} />
      <div className="text-lg font-semibold">Click to upload</div>
      {value && (
        <div className="absolute inset-0 w-full h-full">
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={value}
            alt="Uploaded"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
