/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let applicationsRouter = express.Router();
  let idCounter = 2;

  applicationsRouter.get('/gallery/', function(req, res) {
    let images = fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        res.send(response.json())
      })
  })


  applicationsRouter.get('/', function(req, res) {
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<===============get /=================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    res.send({
      data: [
        {
          id: 1,
          attributes:
          {
            name: "John Deo",
            age: "21",
            phone: 9204498551,
            email: "johndeo@email.com"
          },
          type: "applications"
        }
      ]
    });
    res.status(200).end();
  });

  applicationsRouter.post('/', function(req, res) {

    idCounter ++; 

    res.send({
      data: {
        id: idCounter,
        attributes:
        {
          name: req.body.data.attributes.name,
          age: req.body.data.attributes.age,
          phone: req.body.data.attributes.phone,
          email: req.body.data.attributes.email
        },
        type: "application"
      }
    })
    res.status(201).end();
  });

  applicationsRouter.get('/:id', function(req, res) {
   
    
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<===============get /:id=================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    console.log("id:>>>>>",id)
    console.log("req:>>>>>",req)

    res.send({
      data: {
        // id: req.body.data.id,
        // attributes:
        // {
        //   name: req.body.data.attributes.name,
        //   age: req.body.data.attributes.age,
        //   phone: req.body.data.attributes.phone,
        // },
        type: "applications"
      }
    });
    res.status(200).end();
  });

  applicationsRouter.patch('/:id', function(req, res) {
    console.log('PATCH')
    res.send({
      data: {
        id: req.body.data.id,
        attributes:
        {
          name: req.body.data.attributes.name,
          age: req.body.data.attributes.age,
          phone: req.body.data.attributes.phone,
          email: req.body.data.attributes.email
        },
        type: "application"
      }
    });
  });

  applicationsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/applications', require('body-parser').json({ type: 'application/*+json' }), applicationsRouter);

};
