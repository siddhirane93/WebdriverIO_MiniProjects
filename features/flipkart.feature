Feature: Add Products on Flipkart

  Scenario Outline: As a user, I can go to the flipkart website, search a given product from json data and add it to the cart and increast the quantity by 5 using for loop, then remove all items.

   Given I go to Flipkart
   When I search for a product
   Then I should be able to add it 5 times
   Then I should be able to remove all items
   
   
   # Given I open my profile
   # When I am on my landing page
    
  #  When I login with <username> and <password>
   # Then I should be able to download resume

  #  Examples:
    # | product | 
    # | Chetan Bhagat 11 Rules For Life: Secrets To Level Up | 

     # | username | password             | 
     # | iowebdriver@gmail.com | webdriverio@123 | 
     # | foobar   | barfoo               | 