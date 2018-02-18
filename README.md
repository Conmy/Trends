# Trends
Tracking trends in daily life

## Installation

### Prerequisites

- You must have a [mysql server](https://dev.mysql.com/downloads/mysql/) running on localhost with corresponding details maintained in `src/main/util/db/mysqlConfig.js` and it should look like the following:

```
	module.exports = {
		connectionLimit: 10,
		host: "localhost",
		user: "<username>",
		password: "<user_password>",
		database: "<database_name>"
	}
```

- You must have [node.js](https://nodejs.org) installed

#### Steps
- cd to the project root folder
- run `npm install`
- run `npm start`
- navigate to the service in your browser at `http://localhost:8080`
