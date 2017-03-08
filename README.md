#Kampala Hack-a-thon Information and Registration Web App

This is a simple registration web app put together so contestants can register
to attend a hack-a-thon.  This web app uses the following stack:

####Front end

* GUI [ReactJs](https://facebook.github.io/react/)
* Events [RXJs](http://reactivex.io/rxjs/)
* GUI [Material Design](https://getmdl.io/) 
* Packager [Webpack](https://webpack.github.io/)

####Back end

* Web framework [Spring Boot](http://projects.spring.io/spring-boot/)
* Language [Kotlin](https://kotlinlang.org/)
* Data store [MongoDb](https://www.mongodb.com/)
* Build tool [Gradle](https://gradle.org/)
* Runtime [JVM JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

####Building and running / Gradle Tasks

* `./gradlew :build` builds the app into a 'jar'
* `./gradlew :bootRun` builds and runs the app