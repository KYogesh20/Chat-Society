# Contribution Guidelines

## Introduction

Welcome to the Chat-Society project!. We appreciate your interest in this project, so before making a contribution, please read this.

## Reporting Issues
If you have found what you think is a bug, please file an [issue](https://github.com/KYogesh20/Chat-Society/issues). 

## Have any question?
Ask us on [discussion](https://github.com/KYogesh20/Chat-Society/discussions) page ✨

## Directory structure

### Frontend

```
public
│   └───images # Images for frontend
│       
└───src
    └───components
        ├───Channel # Chatroom
        ├───Contexts # Contexts
        ├───Home # Dashboard 
        ├───Index # Home page
        ├───Login # Login page
        ├───Modal # Modals
        ├───partials # Other components
        ├───Profile # Profile page
        ├───Server # Houses
        ├───Signup # Signup page
        └───Skeletons # Loading skeleton for different components
```

### Backend

```
├───controllers # main controller logic
├───prisma # Prisma client and schema
├───public
│   └───stylesheets
├───routes # API Routes
└───views
app.js # Main backend file
```

## Development

If you have been assigned to fix an issue or develop a new feature, please follow these steps to get started:

- Fork this repository
- Install dependencies by running `npm i` in both `frontend` and `backend` folders
- Start `client` server by running `npm start` and start backend server by running `nodemon app.js`
- Implement your changes
- Please use comment wherever applicable
- Submit PR for review. 


## Commit message conventions

Please follow these rules while writing commit message:

```
<tag>:(issue or pr reference if applicable) <Your message here>
Example:
feat:(#12)Implemented delete functionality for messages
```

Use following tags:
- `feat` for new feature or any major change
- `chore` for regular changes
- `fix` for bug fixes
- `style` for design related commits

