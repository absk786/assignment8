function generateHTML (card) {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
</head>
<body id="bodyTag">
    <nav class="navbar navbar-expand-lg navbar-light bg-danger ">
        <div class="container-md justify-content-center">
          <a class="navbar-brand text-white" href="#">My team</a>
        </div>
      </nav>

      <div class="container">
      <div class="row  mt-5">
      ${card}

      </div>
      </div>
</body>
</html>
    `
}

module.exports = generateHTML;