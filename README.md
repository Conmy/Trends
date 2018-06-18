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

##### Note:
You could install a docker mysql database using the following command:

``` 
docker run -d --name mysql1 -p 3306:3306 -v /home/david/dev/source/db/trends:/var/lib/mysql mysql --default-authentication-plugin=mysql_native_password
```
To reconnect to this image again in the future and keep the last current state use the following command:
```
docker run -d -p 3306:3306 -v /home/david/dev/db/trends:/var/lib/mysql --name mysql1 mysql
```

#### Steps
- cd to the project root folder
- run `npm install`
- run `npm start`
- navigate to the service in your browser at `http://localhost:8080`
