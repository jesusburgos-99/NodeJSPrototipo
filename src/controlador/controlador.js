const Controlador = {};


Controlador.Index = (requiere, respuesta) => {
respuesta.render('index');         

};



Controlador.Listar = (requiere, respuesta) => {

    requiere.getConnection((error, conexion) => {
        conexion.query('SELECT * FROM persona', (error, personas) => {
            if (error) {
                respuesta.json(error);
            }
            console.log(personas);
            respuesta.render('personas', { // plantilla personas.ejs
                dato: personas
            });
        });
    });

};

Controlador.Registrar = (requiere, respuesta) => {
    respuesta.render('registrar');         
    
    };

Controlador.Guardar = (requiere, respuesta) => {

    const datos = requiere.body;
    console.log(requiere.body)
    requiere.getConnection((error, conexion) => {
        const query = conexion.query('INSERT INTO persona set ?', datos, (error, personas) => {
            console.log(personas)
            respuesta.redirect('/listar');
        })
    })

};

Controlador.Eliminar = (requiere, respuesta) => {
    const { id } = requiere.params;
    requiere.getConnection((error, conexion) => {
        conexion.query('DELETE FROM persona WHERE idpersona = ?', [id], (error, rows) => {
            respuesta.redirect('/listar');
        });
    });

};

Controlador.Editar = (requiere, respuesta) => {
    const { id } = requiere.params;
    requiere.getConnection((error, conexion) => {
        conexion.query("SELECT * FROM persona WHERE idpersona = ?", [id], (error, datos) => {
            respuesta.render('editar',  { // llama la plantilla
                dato: datos[0]
            })
        });
    });


};


Controlador.Actualizar = (requiere, respuesta) => {
    const { id } = requiere.params;
    const nuevapersona = requiere.body;
    requiere.getConnection((error, conexion) => {
    conexion.query('UPDATE persona set ? where idpersona = ?', [nuevapersona, id], (error, datos) => {
    respuesta.redirect('/listar');
    });
    });
  };
  

module.exports = Controlador;