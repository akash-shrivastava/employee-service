Feature: Add/Remove Employee

    Scenario Outline: Post employee name
        Given url <Endpoint> available
        And acceptable response is of type <Accept>
        And content type given as <ContentType>
        And request body is <RequestBody>
        When method is <Method>
        Then response status is <Status>

        Examples:
            | Description                               | RequestBody         | Endpoint    | Method | Accept             | ContentType        | Status |
            | valid Request                             | '{"name": "Akash"}' | '/employee' | 'POST' | 'application/json' | 'application/json' | 200    |
            | Invalid Request - invalid endpint         | '{"name": "Akash"}' | '/employss' | 'POST' | 'application/json' | 'application/json' | 404    |
            | Invalid Request - invalid accept type     | '{"name": "Akash"}' | '/employee' | 'POST' | 'application/xml'  | 'application/json' | 406    | 
            | Invalid Request - invalid content type    | '{"name": "Akash"}' | '/employee' | 'POST' | 'application/json' | 'application/xml'  | 400    | 
            | Invalid Request - invalid method          | '{"name": "Akash"}' | '/employee' | 'PUT'  | 'application/json' | 'application/xml'  | 404    | 

    Scenario Outline: Delete employee name
        Given url <Endpoint> available
        When method is <Method>
        Then response status is <Status>

        Examples:
            | Description                               | Endpoint    | Method     | Status |
            | valid Request                             | '/employee' | 'DELETE'   | 200    |
            | Invalid Request - invalid endpint         | '/employss' | 'DELETE'   | 404    |