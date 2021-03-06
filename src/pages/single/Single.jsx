import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Editar</div>
            <h1 className="title">Información</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Juana Gómez</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">juanagomez@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Teléfono:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Dirección:</span>
                  <span className="itemValue">
                    Calle 479 entre 11 y 13, Mar del Plata
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">País:</span>
                  <span className="itemValue">Argentina</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title="Gastos del Usuario (Últimos 6 Meses)"
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Últimas Transacciones</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
