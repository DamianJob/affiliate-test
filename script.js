document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const messageBox = document.getElementById('messageBox');
  
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
  
      const formData = {
        fullName: form.fullName.value.trim(),
        age: form.age.value,
        sex: form.sex.value,
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        password: form.password.value
      };
  
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
  
        const result = await response.json();
  
        if (response.ok) {
          messageBox.textContent = result.message;
          messageBox.style.color = 'green';
          form.reset();
        } else {
          messageBox.textContent = result.message || 'Registration failed.';
          messageBox.style.color = 'red';
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        messageBox.textContent = 'An error occurred. Please try again.';
        messageBox.style.color = 'red';
      }
    });
  });
  