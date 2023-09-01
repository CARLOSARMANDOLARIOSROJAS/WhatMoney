import { useEffect, useState } from "react";
import clienteAxios from "../config/axios";

export const PruebaPage = () => {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const { data } = await clienteAxios.get("/usuarios");
        setUsuarios(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerUsuarios();
  }, []);

  return (
    <div>
      <select id="usuarios">
        <option value="">
          Seleccionar Usuario
        </option>
          {usuarios.map((user) => (
            <option key={user.id} color="white">
              {user.Nombre}
            </option>
          ))}

      </select>
    </div>
  );
};
