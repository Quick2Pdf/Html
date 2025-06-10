function convertToPDF() {
    const input = document.getElementById('imageInput');
    const files = input.files;
    if (files.length === 0) {
        alert("Please select images.");
        return;
    }
    alert("Conversion simulated (real PDF logic can be added via jsPDF or similar).");
}

function clearImages() {
    document.getElementById('imageInput').value = "";
    document.getElementById('output').innerHTML = "";
}
