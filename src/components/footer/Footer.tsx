import React, { useContext } from "react";
import { Style } from "./Footer.style";
import { NavLink, Outlet } from "react-router-dom";
import { API_ICON_ULR } from "../../API/API";
import { getFormattedTemp } from "../../helpers";
import { UnitContext } from "../../context/unit";

const Footer: React.FunctionComponent<any> = ({ data }) => {
  const { unit } = useContext(UnitContext);

  return (
    <Style.CardDayContainer>
      {data?.list
        ?.filter((item: any) => {
          return item.dt_txt.includes("21:00:00");
        })
        .map((i: any) => {
          const temp = getFormattedTemp(unit, i.main.temp);
          return (
            <NavLink
              key={Math.random()}
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/weather/${data?.city?.name}/${i.dt_txt.slice(0, 10)}`}
            >
              <Style.CardDay>
                <div>{i.dt_txt.slice(5, 10)}</div>
                <div>
                  <div>
                    <img
                      alt=""
                      src={`${API_ICON_ULR}${i?.weather?.[0]?.icon}@2x.png`}
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
