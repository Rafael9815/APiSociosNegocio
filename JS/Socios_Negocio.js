var UrlGetSocios_Negocio = 'http://localhost:80/G6_20/controller/socios_negocio.php?opciones=GETSocios_negocio';
var UrlPostSocios_Negocio = 'http://localhost:80/G6_20/controller/socios_negocio.php?opciones=InsertSocios_negocio';
var UrlGetUno = 'http://localhost:80/G6_20/controller/socios_negocio.php?opciones=GetUno';
var UrlPutSocios_Negocio = 'http://localhost:80/G6_20/controller/socios_negocio.php?opciones=ActualizarSocios_negocio';
var UrlDeleteSocios_Negocio = 'http://localhost:80/G6_20/controller/socios_negocio.php?opciones=EliminarSocios_negocio';

$(document).ready(function(){
    CargarSociosNegocio();
});

function CargarSociosNegocio(){
    $.ajax({
        url: UrlGetSocios_Negocio,
        type: 'GET',
        datatype: 'JSON',
        success: function(response){
            var MiItems = response;
            var valores='';
            
            for(i=0; i< MiItems.length; i++){
                valores += '<tr>'+
                '<td>'+MiItems[i].ID+'</td>'+
                '<td>'+MiItems[i].NOMBRE+'</td>'+
                '<td>'+MiItems[i].RAZON_SOCIAL+'</td>'+
                '<td>'+MiItems[i].DIRECCION+'</td>'+
                '<td>'+MiItems[i].TIPO_SOCIO+'</td>'+
                '<td>'+MiItems[i].CONTACTO+'</td>'+
                '<td>'+MiItems[i].EMAIL+'</td>'+
                '<td>'+MiItems[i].FECHA_CREADO+'</td>'+
                '<td>'+MiItems[i].ESTADO+'</td>'+
                '<td>'+MiItems[i].TELEFONO+'</td>'+
                '<td>'+
                '<button class="btn btn-outline-warning" onclick="CargarSocioNegocio('+MiItems[i].ID+')">Editar</button>'+
                '<button class="btn btn-outline-danger" onclick="EliminarSociosNegocio('+MiItems[i].ID+')">Eliminar</button>'+
                '</td>'+
            '</tr>';
            $('.SociosNegocio').html(valores);
            }
        }
    });
}

function AgregarSociosNegocio(){
   var datosSociosNegocio = {
    NOMBRE: $('#NOMBRE').val(),
    RAZON_SOCIAL: $('#RAZON_SOCIAL').val(),
    DIRECCION: $('#DIRECCION').val(),
    TIPO_SOCIO: $('#TIPO_SOCIO').val(),
    CONTACTO: $('#CONTACTO').val(),
    EMAIL: $('#EMAIL').val(),
    FECHA_CREADO: $('#FECHA_CREADO').val(),
    ESTADO: $('#ESTADO').val(),
    TELEFONO: $('#TELEFONO').val()
   };
   var DatosSocios_Negociojson = JSON.stringify(datosSociosNegocio);

   $.ajax({
   url : UrlPostSocios_Negocio,
   type: 'POST',
   data:DatosSocios_Negociojson,
   datatype: 'JSON',
   contentType: 'applicaction/json',
   success: function(response){
       console.log(response);
   }
   });
   alert("Socios De Negocio Agregado")
}

function CargarSocioNegocio(idSocioNegocio){
var datosSocioNegocio ={
    ID:idSocioNegocio
};
var datosSocio_negociojson=JSON.stringify(datosSocioNegocio)

$.ajax({
    url: UrlGetUno,
    type: 'POST',
    data:datosSocio_negociojson,
    datatype:'JSON',
    contentType: 'application/json',
    success:function(response){
        var MiItems = response;
        $('#NOMBRE').val(MiItems[0].NOMBRE);
        $('#RAZON_SOCIAL').val(MiItems[0].RAZON_SOCIAL);
        $('#DIRECCION').val(MiItems[0].DIRECCION);
        $('#TIPO_SOCIO').val(MiItems[0].TIPO_SOCIO);
        $('#CONTACTO').val(MiItems[0].CONTACTO);
        $('#EMAIL').val(MiItems[0].EMAIL);
        $('#FECHA_CREADO').val(MiItems[0].FECHA_CREADO);
        $('#ESTADO').val(MiItems[0].ESTADO);
        $('#TELEFONO').val(MiItems[0].TELEFONO);
        var btnActualizar = '<input type="submit" id="btn_actualizar" onclick="ActualizarSocioNegocio('+MiItems[0].ID+')"'+
        'value="Actualizar Socio De Negocio" class="btn btn-primary"></input>';
        $('.btnagregar').html(btnActualizar);
    }
});
}

function ActualizarSocioNegocio(idSocioNegocio){
    var datosSocioNegocio ={
        ID:idSocioNegocio,
        NOMBRE: $('#NOMBRE').val(),
        RAZON_SOCIAL: $('#RAZON_SOCIAL').val(),
        DIRECCION: $('#DIRECCION').val(),
        TIPO_SOCIO: $('#TIPO_SOCIO').val(),
        CONTACTO: $('#CONTACTO').val(),
        EMAIL: $('#EMAIL').val(),
        FECHA_CREADO: $('#FECHA_CREADO').val(),
        ESTADO: $('#ESTADO').val(),
        TELEFONO: $('#TELEFONO').val()
    };
    var datosSocio_negociojson=JSON.stringify(datosSocioNegocio);

    $.ajax({
        url: UrlPutSocios_Negocio,
        type: 'PUT',
        data: datosSocio_negociojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success:function(response){
            console.log(response);

        }
    });
    alert("Socio De Negocio Actualizado");
}

function EliminarSociosNegocio(idSocioNegocio){
    var datosSocioNegocio ={
        ID: idSocioNegocio
    };
    var datosSocio_negocioEliminarjson=JSON.stringify(datosSocioNegocio)
    $.ajax({
        url: UrlDeleteSocios_Negocio,
        type: 'DELETE',
        data: datosSocio_negocioEliminarjson,
        datatype: 'JSON',
        contentType: 'application/json',
        success:function(response){
            console.log(response);

        }
    });
    alert("Socio De Negocio Eliminado");
}