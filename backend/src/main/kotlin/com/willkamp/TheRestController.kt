package com.willkamp

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

private const val VERSION = "/v1"
private const val ENDPOINT = VERSION + "/api"

@RestController
class TheRestController {

    @PostMapping(ENDPOINT)
    fun mainRoute(): Response {
        return Response(message = "ok")
    }
}