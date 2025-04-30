// ---------------------------------------------menu bar toggemenu button------------------------------------------------------------
function toggleMenu() {
    const menuList = document.getElementById('menuList');
    menuList.classList.toggle('active');
}


// ---------------------------------------------Student Login------------------------------------------------------------

 // Demo OTP - in a real app this would come from your backend
 let demoOtp = '123456';
 let studentName = '';
 let studentPhone = '';

 // Get DOM elements
 const getOtpBtn = document.getElementById('get-otp-btn');
 const verifyBtn = document.getElementById('verify-btn');
 const resendOtpBtn = document.getElementById('resend-otp');
 const initialForm = document.getElementById('initial-form');
 const otpSection = document.getElementById('otp-section');
 const successMessage = document.getElementById('success-message');
 const displayPhone = document.getElementById('display-phone');
 const nameInput = document.getElementById('name');
 const phoneInput = document.getElementById('phone');

 // Generate a random 6-digit OTP
 function generateOTP() {
     return Math.floor(100000 + Math.random() * 900000).toString();
 }

 // Get OTP button click handler
 getOtpBtn.addEventListener('click', function () {
     studentName = nameInput.value.trim();
     studentPhone = phoneInput.value.trim();

     if (studentName && studentPhone) {
         // Generate new OTP
         demoOtp = generateOTP();
         console.log('Demo OTP:', demoOtp); // For testing purposes

         // Show OTP section
         initialForm.style.display = 'none';
         otpSection.style.display = 'block';
         displayPhone.textContent = studentPhone;

         // Auto-focus first OTP input
         const otpInputs = document.querySelectorAll('.otp-inputs input');
         otpInputs[0].focus();

         // Show verification button
         verifyBtn.style.display = 'block';
     } else {
         alert('Please enter both name and phone number');
     }
 });

 // Resend OTP button click handler
 resendOtpBtn.addEventListener('click', function () {
     demoOtp = generateOTP();
     console.log('New Demo OTP:', demoOtp); // For testing purposes
     alert('New OTP sent to your phone: ' + demoOtp);
 });

 // Verify OTP button click handler
 verifyBtn.addEventListener('click', function () {
     const otpInputs = document.querySelectorAll('.otp-inputs input');
     let enteredOtp = '';

     // Collect OTP digits
     otpInputs.forEach(input => {
         enteredOtp += input.value;
     });

     // Verify OTP
     if (enteredOtp === demoOtp) {
         // Show success message
         otpSection.style.display = 'none';
         successMessage.style.display = 'block';

         // In a real app, you would submit the form or redirect
         setTimeout(() => {
             alert(`Login successful!\nWelcome ${studentName}`);
             // Here you would typically redirect or submit the form
             // document.getElementById('login-form').submit();
         }, 1500);
     } else {
         alert('Invalid OTP. Please try again.');
         // Clear OTP inputs
         otpInputs.forEach(input => {
             input.value = '';
         });
         otpInputs[0].focus();
     }
 });

 // OTP input auto-tab behavior
 const otpInputs = document.querySelectorAll('.otp-inputs input');
 otpInputs.forEach((input, index) => {
     input.addEventListener('input', () => {
         if (input.value.length === 1 && index < otpInputs.length - 1) {
             otpInputs[index + 1].focus();
         }

         // Auto verify if all digits are entered
         if (index === otpInputs.length - 1 && input.value.length === 1) {
             let allFilled = true;
             otpInputs.forEach(i => {
                 if (!i.value) allFilled = false;
             });
             if (allFilled) {
                 verifyBtn.click();
             }
         }
     });

     input.addEventListener('keydown', (e) => {
         if (e.key === 'Backspace' && !input.value && index > 0) {
             otpInputs[index - 1].focus();
         }
     });
 });