# 03 JavaScript: Password Generator
for this homework assignment we where asked to set up a number of window prompts to determine a desired password based on the criteria.

user was asked to pick numbers between 8-128 characters, after user selects approved number of characters it will follow 4 prompts, user must select at least one prompt to
generate a random password generate with the desired number of characters.

user has option to include:
passwrod with all upper case
or
password with all lower case
or 
password with all numbers 
or
password with all special characters

user must have at least one criteria selected to generate password

user may also have all 4 criteria to generate a password.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
``

! [screenshot](Password-Generator-Homework\Assets\screenshot-password-gen.PNG)