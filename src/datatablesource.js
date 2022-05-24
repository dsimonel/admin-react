import { useTranslation } from "react-i18next";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Usuario",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Edad",
    width: 100,
  },
  {
    field: "status",
    headerName: "Estado",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Blanca",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "blanca@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Juan Pérez",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "juanperez@gmail.com",
    status: "pasivo",
    age: 42,
  },
  {
    id: 3,
    username: "Luis Gómez",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "luisgomez@gmail.com",
    status: "pendiente",
    age: 45,
  },
  {
    id: 4,
    username: "Estela Paredes",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "estelaparedes@gmail.com",
    status: "activo",
    age: 16,
  },
  {
    id: 5,
    username: "Teresa Planes",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "teresaplanes@gmail.com",
    status: "pasivo",
    age: 22,
  },
  {
    id: 6,
    username: "Melisa Lame",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "melisalame@gmail.com",
    status: "activo",
    age: 15,
  },
  {
    id: 7,
    username: "Clotilde Prosódica",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "cloti9@gmail.com",
    status: "pasivo",
    age: 44,
  },
  {
    id: 8,
    username: "Francisco Rodríguez",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "pancho@gmail.com",
    status: "activo",
    age: 36,
  },
  {
    id: 9,
    username: "Roxana Boletti",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "roxanaba@gmail.com",
    status: "pendiente",
    age: 65,
  },
  {
    id: 10,
    username: "Esteban Quito",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "esteban12@gmail.com",
    status: "activo",
    age: 65,
  },
];
