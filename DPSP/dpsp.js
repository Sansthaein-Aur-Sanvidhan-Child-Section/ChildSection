document.addEventListener('DOMContentLoaded', () => {
    const principlesListItems = document.querySelectorAll('.principles-list li');
    const principleTitle = document.getElementById('principle-title');
    const principleDescription = document.getElementById('principle-description');
    const explanationSection = document.getElementById('explanation');
  
    // Principle explanations
    const principleDetails = {
      1: {
        title: 'Free and Compulsory Education',
        description: 'The government makes sure that every child in India gets to go to school without paying for it. This helps all children learn important things for their future.'
      },
      2: {
        title: 'Equal Pay for Equal Work',
        description: 'Boys and girls, men and women, should all be paid the same amount for the same work. This means no one should be treated unfairly.'
      },
      3: {
        title: 'Protecting the Environment',
        description: 'It’s important to take care of nature! The government encourages people to plant trees, protect forests, and stop pollution to keep our planet healthy.'
      },
      4: {
        title: 'Promoting Health and Nutrition',
        description: 'The government wants everyone to be healthy! This means making sure people have enough food to eat and access to doctors and hospitals when they are sick.'
      },
      5: {
        title: 'Helping People in Need',
        description: 'When people are in trouble or poor, the government helps them. This can be through giving food, money, or shelter to those who need it most.'
      },
      6: {
        title: 'Sharing the Country’s Wealth',
        description: 'The wealth of the country should be shared so that everyone benefits, not just a few people. This means making sure the rich don’t get too rich while others stay poor.'
      },
      7: {
        title: 'Promoting Peace',
        description: 'The government wants India to be friends with other countries and make sure that there is peace all over the world. Working together is important for everyone!'
      }
    };
  
    principlesListItems.forEach(item => {
      item.addEventListener('click', function() {
        const principleNumber = this.getAttribute('data-principle');
        const detail = principleDetails[principleNumber];
  
        // Update content
        principleTitle.textContent = detail.title;
        principleDescription.textContent = detail.description;
  
        // Show explanation with animation
        explanationSection.classList.add('show');
      });
    });
  });
  