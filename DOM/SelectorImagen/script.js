document.getElementById('fileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    var fileInput = event.target;
    var previewImage = document.getElementById('previewImage');

    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        };

        reader.readAsDataURL(file);
    }
}