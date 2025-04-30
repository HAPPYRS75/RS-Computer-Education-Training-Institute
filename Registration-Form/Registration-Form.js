// ---------------------------------------------menu bar toggemenu button------------------------------------------------------------
function toggleMenu() {
    const menuList = document.getElementById('menuList');
    menuList.classList.toggle('active');
}

//----------------------------------------------Registration form------------------------------------------------------------
document.getElementById('photo').addEventListener('change', function (e) {
    const file = e.target.files[0];
    const fileName = file ? file.name : 'No file chosen';
    document.getElementById('photo-name').textContent = fileName;

    // Preview the photo
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('photoPreview').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

// File upload handling for Aadhar document
document.getElementById('aadharDoc').addEventListener('change', function (e) {
    const file = e.target.files[0];
    const fileName = file ? file.name : 'No file chosen';
    document.getElementById('aadharDoc-name').textContent = fileName;

    // Preview Aadhar document info
    if (file) {
        const fileSize = (file.size / (1024 * 1024)).toFixed(2); // in MB
        const aadharDocPreview = document.getElementById('aadharDocPreview');
        aadharDocPreview.innerHTML = '';

        const fileItem = document.createElement('div');
        fileItem.className = 'file-preview-item';

        let fileIcon;
        if (file.type.includes('image')) {
            fileIcon = '<i class="fas fa-image"></i>';
        } else if (file.type.includes('pdf')) {
            fileIcon = '<i class="fas fa-file-pdf"></i>';
        } else {
            fileIcon = '<i class="fas fa-file"></i>';
        }

        fileItem.innerHTML = `
            <div class="file-preview-icon">${fileIcon}</div>
            <div class="file-preview-info">
                <div class="file-preview-name">${file.name}</div>
                <div class="file-preview-size">${fileSize} MB</div>
            </div>
        `;

        aadharDocPreview.appendChild(fileItem);
    }
});

// File upload handling for qualification documents
document.getElementById('documents').addEventListener('change', function (e) {
    const files = e.target.files;
    let fileNames = '';

    if (files.length === 0) {
        fileNames = 'No files chosen';
    } else if (files.length === 1) {
        fileNames = files[0].name;
    } else {
        fileNames = `${files.length} files selected`;
    }

    document.getElementById('documents-name').textContent = fileNames;

    // Preview document names
    const documentsPreview = document.getElementById('documentsPreview');
    documentsPreview.innerHTML = '';

    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileSize = (file.size / (1024 * 1024)).toFixed(2); // in MB

            const fileItem = document.createElement('div');
            fileItem.className = 'file-preview-item';

            let fileIcon;
            if (file.type.includes('image')) {
                fileIcon = '<i class="fas fa-image"></i>';
            } else if (file.type.includes('pdf')) {
                fileIcon = '<i class="fas fa-file-pdf"></i>';
            } else if (file.type.includes('word')) {
                fileIcon = '<i class="fas fa-file-word"></i>';
            } else {
                fileIcon = '<i class="fas fa-file"></i>';
            }

            fileItem.innerHTML = `
                <div class="file-preview-icon">${fileIcon}</div>
                <div class="file-preview-info">
                    <div class="file-preview-name">${file.name}</div>
                    <div class="file-preview-size">${fileSize} MB</div>
                </div>
            `;

            documentsPreview.appendChild(fileItem);
        }
    }
});

// Form reset
document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('admissionForm').reset();
    document.getElementById('photo-name').textContent = 'No file chosen';
    document.getElementById('aadharDoc-name').textContent = 'No file chosen';
    document.getElementById('documents-name').textContent = 'No files chosen';
    document.getElementById('photoPreview').src = '';
    document.getElementById('aadharDocPreview').innerHTML = '';
    document.getElementById('documentsPreview').innerHTML = '';
});

// Modal functionality
const modal = document.getElementById('previewModal');
const previewBtn = document.getElementById('previewBtn');
const closeModal = document.getElementById('closeModal');
const editBtn = document.getElementById('editBtn');
const submitBtn = document.getElementById('submitBtn');
const submitSpinner = document.getElementById('submitSpinner');

previewBtn.addEventListener('click', function () {
    // Validate form first
    const form = document.getElementById('admissionForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Populate preview data
    document.getElementById('preview-fullName').textContent = document.getElementById('fullName').value;
    document.getElementById('preview-gender').textContent = document.querySelector('input[name="gender"]:checked').value;
    document.getElementById('preview-dob').textContent = document.getElementById('dob').value;
    document.getElementById('preview-aadhar').textContent = document.getElementById('aadhar').value;
    document.getElementById('preview-fatherName').textContent = document.getElementById('fatherName').value;
    document.getElementById('preview-motherName').textContent = document.getElementById('motherName').value;
    document.getElementById('preview-course').textContent = document.getElementById('course').value;
    document.getElementById('preview-qualification').textContent = document.getElementById('qualification').value;
    document.getElementById('preview-religion').textContent = document.getElementById('religion').value;
    document.getElementById('preview-category').textContent = document.getElementById('category').value;
    document.getElementById('preview-country').textContent = document.getElementById('country').value;
    document.getElementById('preview-state').textContent = document.getElementById('state').value;
    document.getElementById('preview-city').textContent = document.getElementById('city').value;
    document.getElementById('preview-pincode').textContent = document.getElementById('pincode').value;
    document.getElementById('preview-phone').textContent = document.getElementById('phone').value;
    document.getElementById('preview-email').textContent = document.getElementById('email').value;
    document.getElementById('preview-address').textContent = document.getElementById('address').value;

    // File names
    const photoFile = document.getElementById('photo').files[0];
    document.getElementById('preview-photo-name').textContent = photoFile ? photoFile.name : 'No file chosen';

    const aadharFile = document.getElementById('aadharDoc').files[0];

    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', function () {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

editBtn.addEventListener('click', function () {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

submitBtn.addEventListener('click', function () {
    // Show loading spinner
    submitSpinner.style.display = 'block';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual AJAX call)
    setTimeout(function () {
        submitSpinner.style.display = 'none';
        submitBtn.disabled = false;


        alert('Form submitted successfully!');
        document.getElementById('admissionForm').reset();
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';

        // In a real application, you would use something like:
        // const formData = new FormData(document.getElementById('admissionForm'));
        // fetch('/submit', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     submitSpinner.style.display = 'none';
        //     submitBtn.disabled = false;
        //     if (data.success) {
        //         alert('Form submitted successfully!');
        //         document.getElementById('admissionForm').reset();
        //         modal.classList.remove('show');
        //         document.body.style.overflow = 'auto';
        //     } else {
        //         alert('Error: ' + data.message);
        //     }
        // })
        // .catch(error => {
        //     submitSpinner.style.display = 'none';
        //     submitBtn.disabled = false;
        //     alert('Error submitting form');
        // });
    }, 1500);
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});