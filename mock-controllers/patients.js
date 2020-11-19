const store = []
let index = 0

exports.getList = function (req, res) {
  // the response will be validated and serialized by the middleware
  res.send(store)
}

exports.createSingle = function (req, res) {
  // no need to validate the body because
  // the middleware has already validated the request

  const body = req.body
  const patient = {
    id: index++,
    given_name: body.given_name,
    family_name: body.family_name
  }
  store.push(patient)

  // the response will be validated and serialized by the middleware
  res.send(patient)
}

exports.deleteSingle = function (req, res) {
  // no need to validate the body because
  // the middleware has already validated the request
  const index = store.findIndex(patient => patient.id === req.params.id)
  if (index !== -1) store.splice(index, 1)

  // the response will be validated and serialized by the middleware
  res.sendStatus(204)
}

exports.getSingle = function (req, res) {
  // no need to validate the body because
  // the middleware has already validated the request

  const patient = findTask(req.params.rid)

  // the response will be validated and serialized by the middleware
  if (patient) {
    res.send(patient)
  } else {
    res.sendStatus(404)
  }
}

exports.updateSingle = function (req, res) {
  // no need to validate the body because
  // the middleware has already validated the request

  const patient = findTask(req.params.id)

  // the response will be validated and serialized by the middleware
  if (patient) {
    const body = req.body
    patient.given_name = body.given_name
    patient.family_name = body.family_name
    res.send(patient)
  } else {
    res.sendStatus(404)
  }
}
