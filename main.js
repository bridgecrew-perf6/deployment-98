app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './client/main.js'))
  })

  app.use('/js', express.static(path.join(__dirname, 'client/main.js')))