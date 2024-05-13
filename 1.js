function handleFileUpload(event) {
    const file = event.target.files[0];
    const fileSize = file.size / 1024 / 1024; // Convert to MB
    if (fileSize > 10) { // Limit file size to 10MB
        alert('File size exceeds the limit of 10MB.');
        return;
    }
    // Display selected file name
    document.getElementById('statusMessage').innerText = `Selected file: ${file.name}`;
}

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.github.com/repos/yourusername/yourusername.github.io/contents/uploads/' + file.name);
    xhr.setRequestHeader('Authorization', 'token yourAccessToken'); // Replace yourAccessToken with your GitHub access token
    xhr.onload = function() {
        if (xhr.status === 201) {
            alert('File uploaded successfully!');
        } else {
            alert('Failed to upload file.');
        }
    };
    xhr.send(formData);
}
