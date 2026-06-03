import React, { useState, useEffect } from "react";

import { Table, Spinner, Button, Image } from "react-bootstrap";

import "bootstrap-icons/font/bootstrap-icons.css";

const TablaProductos = ({
  productos,
  abrirModalEdicion,
  abrirModalEliminar,
  generarPDFProducto
}) => {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (productos) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [productos]);

  return (

    <>

      {loading ? (

        <div className="text-center">
          
          <h4>
            Cargando productos...
          </h4>

          <Spinner
            animation="border"
            variant="success"
            role="status"
          />

        </div>

      ) : (

        <Table
          striped
          borderless
          hover
          responsive
          size="sm"
        >

          <thead>

            <tr>

              <th>#</th>

              <th>Imagen</th>

              <th>Nombre</th>

              <th className="d-none d-md-table-cell">
                Descripción
              </th>

              <th>Categoría</th>

              <th>Precio</th>

              <th className="text-center">
                Acciones
              </th>

            </tr>

          </thead>

          <tbody>

            {productos.map((producto) => (

              <tr key={producto.id_producto}>

                <td>
                  {producto.id_producto}
                </td>

                {/* IMAGEN */}

                <td>

                  <Image
                    src={producto.url_imagen}
                    alt="Producto"
                    rounded
                    width="50"
                    height="50"
                    style={{
                      objectFit: "cover"
                    }}
                  />

                </td>

                {/* NOMBRE */}

                <td>
                  {producto.nombre_producto}
                </td>

                {/* DESCRIPCION */}

                <td className="d-none d-md-table-cell">

                  {producto.descripcion_producto}

                </td>

                {/* CATEGORIA */}

                <td>

                  {
                    producto.categorias
                      ?.nombre_categoria
                  }

                </td>

                {/* PRECIO */}

                <td>

                  C$
                  {parseFloat(
                    producto.precio_venta
                  ).toFixed(2)}

                </td>

                {/* BOTONES */}

                <td className="text-center">

                  {/* EDITAR */}

                  <Button
                    variant="outline-warning"
                    size="sm"
                    className="m-1"
                    onClick={() =>
                      abrirModalEdicion(
                        producto
                      )
                    }
                  >

                    <i className="bi bi-pencil"></i>

                  </Button>

                  {/* ELIMINAR */}

                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="m-1"
                    onClick={() =>
                      abrirModalEliminar(
                        producto
                      )
                    }
                  >

                    <i className="bi bi-trash"></i>

                  </Button>

                  {/* PDF */}

                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="m-1"
                    onClick={() =>
                      generarPDFProducto(
                        producto
                      )
                    }
                  >
                    <i className="bi bi-file-earmark-pdf"></i>
                  </Button>
                </td>
              </tr>
            ))}

          </tbody>
        </Table>
      )}

    </>
  );
};

export default TablaProductos;