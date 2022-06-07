import React from "react";
import { Style } from "./Footer.style";
import { NavLink, Outlet } from "react-router-dom";
import { API_ICON_ULR } from "../../API/API";

const Footer: React.FunctionComponent<any> = ({ data }) => {
  return (
    <Style.CardDayContainer>
      {data?.list
        ?.filter((item: any) => {
          return item.dt_txt.includes("21:00:00");
        })
        .map((i: any) => {
          return (
            <NavLink
              key={Math.random()}
              style={{ textDecoration: "none", color: "inherit" }}
              to={`${data?.city?.name}/${i.dt_txt.slice(9, 10)}`}
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
                  <div>
                    {Math.ceil((i.main.temp - 273.15) * 9) / 5 + 32 + "°F"}
                  </div>
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
