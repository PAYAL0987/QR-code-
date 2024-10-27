function generateQRCode() {
    const qrCodeContainer = document.getElementById("qrcode");
    const textInput = document.getElementById("text-input").value;
    const size = parseInt(document.getElementById("size-select").value);

    // Clear any existing QR code
    qrCodeContainer.innerHTML = "";

    if (textInput.trim() !== "") {
        new QRCode(qrCodeContainer, {
            text: textInput,
            width: size,
            height: size,
        });
    } else {
        alert("Please enter some text or URL.");
    }
}

function downloadQRCode() {
    const qrCodeImage = document.querySelector("#qrcode img");
    if (qrCodeImage) {
        const link = document.createElement("a");
        link.href = qrCodeImage.src;
        link.download = "qr_code.png";
        link.click();
    } else {
        alert("Please generate a QR code first.");
    }
}