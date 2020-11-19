'use strict'

module.exports = function (dbClient) {
    return {
        createSingle: async (req, res) => {
        // no need to validate the body because
        // the middleware has already validated the request
        const query = {
          text: 'INSERT INTO patients (active, given_name, family_name, gender) VALUES ($1, $2, $3) RETURNING *',
          values: [  ]
        }
        const { rows } = await dbClient.query(query)
  
        // the response will be validated and serialized by the middleware
        res.send(rows[0])
      },

      deleteSingle: async (req, res) => {
        const query = {
          text: 'DELETE FROM patients WHERE id = $1',
          values: [ req.params.rid ]
        }
        await dbClient.query(query)
  
        // the response will be validated and serialized by the middleware
        res.sendStatus(204)
      },
  
      getList: async (req, res) => {
        // no need to validate the body because
        // the middleware has already validated the request
        const query = {
          text: 'SELECT * FROM patients',
          values: [ ]
        }
        const { rows } = await dbClient.query(query)
  
        // the response will be validated and serialized by the middleware
        res.send(rows)
      },
  
      getSingle: async (req, res) => {
        // no need to validate the body because
        // the middleware has already validated the request
        const query = {
          text: 'SELECT * FROM patients WHERE id = $1',
          values: [ req.params.rid ]
        }
        const { rows } = await dbClient.query(query)
  
        // the response will be validated and serialized by the middleware
        res.send(rows[0])
      },
  
      updateSingle: async (req, res) => {
        const query = {
          text: 'UPDATE patients SET resourceType = $1, text = $2, identifier = $3, active = $4, name = $5, gender = $6, photo = $7, contact = $8, link = $9  WHERE id = $10 RETURNING *',
          values: [ req.body.resourceType, req.body.text, req.body.identifier, req.params.active, res.body.name, res.body.gender, res.body.photo,res.body.contact, res.body.managingOrganization, res.body.link, res.body.rid ]
        }
        const { rows } = await dbClient.query(query)
        res.send(rows[0])
      }
    }
}