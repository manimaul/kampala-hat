package com.willkamp

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TheRestController {

    @RequestMapping("/")
    fun mainRoute(): Response {
        return Response(message = "ok")
    }
}