const uploadBox = document.getElementById('upload-box');
const fileInput = document.getElementById('file-input');

uploadBox.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    if (file.size > 5 * 1024 * 1024) { // Check if the file exceeds 5MB
      alert('File size exceeds 5 MB. Please upload a smaller file.');
      return;
    }
    alert(`File uploaded: ${file.name}`);
  }
});

uploadBox.addEventListener('dragover', (event) => {
  event.preventDefault();
  uploadBox.style.backgroundColor = '#e6f0ff';
});

uploadBox.addEventListener('dragleave', () => {
  uploadBox.style.backgroundColor = 'white';
});

uploadBox.addEventListener('drop', (event) => {
  event.preventDefault();
  uploadBox.style.backgroundColor = 'white';
  const file = event.dataTransfer.files[0];
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      alert('File size exceeds 5 MB. Please upload a smaller file.');
      return;
    }
    alert(`File uploaded: ${file.name}`);
  }
});
