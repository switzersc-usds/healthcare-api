# Healthcare API (demo)

This is a prototype API to demo a design-first approach to API development, using FHIR and the [OpenAPI Specification](https://www.openapis.org/). The OpenAPI definition in use for the API is `openapi.json`; however, the full FHIR Core OpenAPI definition is available in `openapi-full.json`.

The API itself is Express middleware generated with [OpenAPI Enforcer](https://github.com/byu-oit/openapi-enforcer). This middleware provides mock server generation and request validation (validating requests/responses comply with the OpenAPI definition).

This was originally made for a conference talk at [Lesbians Who Tech Debug 2020](https://lesbianswhotech.org/debug2020/). The slides from my presentation are available as PDF in this repo - `build-a-healthcare-api-in-30-min.pdf`

Different functionality is present in different branches of this repo:
* `main` - mock server from openapi definition
* `testing` - mock server with chai tests
* `controllers` - real server with postgres database (needs some work)

## Getting Started

0. Clone this repo.

1. Make sure you have NodeJS installed and accessible in the project directory.

2. Install dependencies

> npm install

3. If you want to run the server locally and detect changes to the `openapi.yml` file

> npm start

Your API is now available at `localhost:4000`.

If you make changes to the `openapi.yml` spec, the server will automatically restart. If you are accessing the data from a browser, you would need to refresh the page to see changes.

## Using the OAS document

If you don't want to use this Express server, or you want to take advantage the extensive tooling ecosystem around OpenAPI, you can simply plug and play `openapi.yml` with any of your favorite tools! This project's OAS doc is in OAS3, so you can use any tool compatible with this version.

Check out these lists of tools:

- [OpenAPI.tools](https://openapi.tools/)
- [OpenAPI 3.0 Implementations](https://github.com/OAI/OpenAPI-Specification/blob/master/IMPLEMENTATIONS.md)

## Viewing the docs

If you want to view the API documentation generated from the OAS document, you can do so easily with open source and free SAAS tools.

For example, check out the browsable docs from ReDoc by adding the link to the raw openapi.json file (https://raw.githubusercontent.com/switzersc-usds/healthcare-api/main/openapi.json) here: https://redocly.github.io/redoc/

Or paste the raw JSON file URL (hhttps://raw.githubusercontent.com/switzersc-usds/healthcare-api/main/openapi.json) in other UIs or editors of your choice, e.g. [Swagger UI](https://petstore.swagger.io/).
