$(document).ready(() => {
  $.ajax({
    type: "GET",
    url: "https://sga.unemi.edu.ec/api?a=apilistaarticulosdocente&cedula=0925115198",
    success: (data) => {
      console.log(data);
      data.forEach((element) => {
        articulos = element.articulos;
        nombres = element.apellidos;
        fecha = element.fecha;

        linea =
          "<tr><td>" +
          nombres +
          "</td><td>" +
          articulos +
          "</td><td>" +
          fecha +
          "</td></tr>";
        $(linea).appendTo("#artTable tbody");
      });

      $("#artTable").DataTable();
    },
  });
});
