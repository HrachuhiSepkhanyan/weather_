import React, { useContext } from "react";
import { Style } from "./Footer.style";
import { NavLink, Outlet } from "react-router-dom";
import { API_ICON_ULR } from "../../API/API";
import { getFormattedTemp } from "../../helpers";
import { UnitContext } from "../../context/unit";

const Footer: React.FC = ({ data, hour }) => {
  const { unit } = useContext(UnitContext);
  return (
    <Style.CardDayContainer>
      {data?.list
        ?.filter((item) => {
          return item.dt_txt.includes(hour);
        })
        .map((item) => {
          const temp = getFormattedTemp(unit, item.main.temp);
          return (
            <NavLink
              key={Math.random()}
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/weather/${data?.city?.name}/${item.dt_txt.slice(0, 10)}`}
            >
              <Style.CardDay>
                <div>{item.dt_txt.slice(5, 10)}</div>
                <div>
                  <div>
                    <img
                      alt=""
                      src={`${API_ICON_ULR}${item?.weather?.[0]?.icon}@2x.png`}
                    />
                  </div>
                  <div>{temp}</div>
                </div>
              </Style.CardDay>
            </NavLink>
          );
        })}
      <Outlet />
    </Style.CardDayContainer>
  );
};

export default Footer;
