fetch("/usuario")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((usuario) => {
      // Select the <template> we created in index.html
      const cardTemplate = document.querySelector("template");

      // Clone a copy of the template we can insert in the DOM as a real visible node
      const card = cardTemplate.content.cloneNode(true);

      // Update the content of the cloned template with the employee data we queried from the backend
      card.querySelector("h2").innerText = usuario.nombre + ' ' + usuario.apellido;
    
      card.querySelector("p1").innerText = usuario.id;
      card.querySelector("p2").innerText = usuario.nombre;
      card.querySelector("p3").innerText = usuario.apellido;
      card.querySelector("p4").innerText = usuario.edad;
      card.querySelector("p5").innerText = usuario.descripcion;
      card.querySelector("p6").innerText = usuario.descripcion;
      // Append the card as a child with the employee data to the <body> element on our page
      document.body.appendChild(card);

      
    });
  });