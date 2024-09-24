document.addEventListener('DOMContentLoaded', () => {
    const dutyListItems = document.querySelectorAll('.duty-list li');
  
    // Remove any previously opened description box
    function removePreviousDescription() {
      const previousDescription = document.querySelector('.duty-description');
      if (previousDescription) {
        previousDescription.remove();
      }
    }
  
    // Function to create the description box
    function createDescriptionBox(dutyText) {
      const descriptionBox = document.createElement('div');
      descriptionBox.classList.add('duty-description', 'show');
      
      const descriptionContent = document.createElement('p');
      descriptionContent.textContent = dutyText;
      descriptionBox.appendChild(descriptionContent);
  
      return descriptionBox;
    }
  
    dutyListItems.forEach(item => {
      item.addEventListener('click', function() {
        const dutyText = this.getAttribute('data-duty');
        
        // Remove any previously opened description box
        removePreviousDescription();
  
        // Create a new description box
        const descriptionBox = createDescriptionBox(dutyText);
  
        // Insert the description box right after the clicked item
        this.after(descriptionBox);
      });
    });
  });
  