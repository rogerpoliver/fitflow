# FitFlow

GymPass style app.

## RFs (Functional Requirements)

- [] Should be possible to authenticate;
- [] Should be possible to register;
- [] Should be possible to retrieve the profile of a logged-in user;
- [] Should be possible to retrieve the number of check-ins performed by the logged-in user;
- [] Should be possible for the user to retrieve their check-in history;
- [] Should be possible for the user to search for nearby gyms;
- [] Should be possible for the user to search for gyms by name;
- [] Should be possible for the user to check-in at a gym;
- [] Should be possible to validate a user's check-in;
- [] Should be possible to register a gym;-

## RNs (Business Rules)

- [] The user should not be able to register with a duplicate email;
- [] The user cannot perform 2 check-ins on the same day;
- [] The user cannot check-in if they are not near (100m) the gym;
- [] The check-in can only be validated up to 20 minutes after it is created;
- [] The check-in can only be validated by administrators;
- [] The gym can only be registered by administrators;-

## RNFs (Non-functional Requirements)

- [] The user's password needs to be encrypted;
- [] The application data needs to be persisted in a PostgreSQL database;
- [] All data lists need to be paginated with 20 items per page;
- [] The user should be identified via JWT (JSON web token);
