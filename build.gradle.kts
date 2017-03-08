group 'com.willkamp.kampala.hackathon'
version '1.0-SNAPSHOT'

buildscript {
    val kotlinVersion = "1.0.6"
    val springBootVersion = "1.5.1.RELEASE"
    extra["kotlinVersion"] = kotlinVersion
    extra["springBootVersion"] = springBootVersion
    repositories {
        jcenter()
    }
    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")
        classpath("org.springframework.boot:spring-boot-gradle-plugin:$springBootVersion")
        classpath("org.jetbrains.kotlin:kotlin-noarg:$kotlinVersion")
        classpath("org.jetbrains.kotlin:kotlin-allopen:$kotlinVersion")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")
    }
}


apply {
    plugin("kotlin")
    plugin("kotlin-spring")
    plugin("org.springframework.boot")
}

repositories {
    jcenter()
}

val kotlinVersion = extra["kotlinVersion"] as String

dependencies {
    compile("org.jetbrains.kotlin:kotlin-stdlib:$kotlinVersion")
    compile("org.jetbrains.kotlin:kotlin-reflect:$kotlinVersion")
    compile("com.intellij:annotations:12.0")
    compile("org.springframework.boot:spring-boot-starter-web")
    compile("org.springframework.boot:spring-boot-starter-data-mongodb")
    //    compile("io.reactivex:rxkotlin:0.60.0")
    compile("com.fasterxml.jackson.module:jackson-module-kotlin:2.8.6")
    testCompile("org.springframework.boot:spring-boot-starter-test")
}


