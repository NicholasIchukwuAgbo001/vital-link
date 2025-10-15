import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import Button from "./ui/Button.tsx";

interface QRDisplayProps {
  certificateId: string;
}

const QRDisplay: React.FC<QRDisplayProps> = ({ certificateId }) => {
  const verificationUrl = `${window.location.origin}/#/verify/${certificateId}`;

  const downloadQRCode = () => {
    const canvas = document.getElementById(
      "qr-code-canvas"
    ) as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `${certificateId}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <QRCodeCanvas
        id="qr-code-canvas"
        value={verificationUrl}
        size={256}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"H"}
        includeMargin={true}
      />
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        Scan this QR code to verify the certificate.
      </p>
      <Button onClick={downloadQRCode} variant="secondary">
        Download QR Code
      </Button>
    </div>
  );
};

export default QRDisplay;
