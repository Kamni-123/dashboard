import React from 'react';
import { useState } from "react";
import { Menu, MenuItem  } from "react-pro-sidebar";
import { ProSidebar } from 'react-pro-sidebar';

import "react-pro-sidebar/dist/css/styles.css";
// import { Sidebar } from 'react-pro-sidebar';

import {Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import { tokens } from '../../Theme';


import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";



const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};


const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Box
    sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",
      },
      "& .pro-menu-item.active": {
        color: "#6870fa !important",
      },
    }}
  >

      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <div
                className="flex justify-between items-center ml-2"
              >
                
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </div>
            )}
          </MenuItem>
          {!isCollapsed && (
            <div className="mb-5 ">
              <div className="flex justify-center items-center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVEhIYGBgYHBoYGBoSGBgYGhIaGBgZGRgaGhgcIS4lHB4rHxgYJjgmLC8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQkJCQ0NDQ0NDE0NDQ0NDE0NDQ0MTQ0NDQ0NDQ0NDExNDQ0NDQ0MTQ0MTQ0NDQ0NDQ0NDE0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAACAQIEAwYDBQYFBAMAAAABAgADEQQSITEFQVEGImFxgZETMqEHQlKCsRRyksHh8CMzYrLRU8LS8RYXov/EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIE/8QAHxEBAQACAgMBAQEAAAAAAAAAAAECEQMhEjFBUWEi/9oADAMBAAIRAxEAPwD06IiZOiIiAiIgIiICIiAiIgIiIEREWg2iJMiEIiICIiBTERAREQIMSZEBERAuxJiFRJiICIiAiIgJEmIERBnn/arj2eqaSFsqLoCCAzciQDrfl0A5XlHbVeIUk+aog9RNDxXtjSp3FJc56swVB6i7H2HnOVpFyoLuqX2vYk6crm5239JTZQflzn8VS/0W/wBJBj8V7TY2tc52ROS0syX/ADA3PqZoaPF69NsyO483c+pvedZRoK5uyqfM3HlyImNjsFT3LZDtqAAPoJ1Kaayn2x4gSLVzYbArT28SUufWdr2X7cJW/wAPEhadUcxotTxsdVPuPKcRW4SxGYMCDzVhr/MTGdKifczW/EC1rdOY846pp7nE4TsL2oZyMNW+YDuE3vYfdN9SLbHfS07uRCIiQIiIFMREBERAREQLsREKRJiAkSYgIiIERJkQOd7XcbFBAitZ3G/4E2J8zsPU8p5/UQOwbW7asx17o63Peb964m27Zq1TGso+RFTMQf8AQTbXn3rf+zM/gvBVYZmXTSw8BtFulnda/A4Vnt8NSi/iNyz3Phb/AI6CbL/46z6vUI6WJv73/SdDSoBe6oAH+mXh0mWWVejHGRzLdmdO7WcHzv8ArNLjOz2JGiVFYcgbqfdSJ3jEcyPpLL7XP1nMysW4yvM63DMSpuaYuOfzfXeYVf44/wAxTb10/WeoVKYM57iqDXTwlnJS8eNaTssgfFUmY5SrEgn729l9Z7DPG6tO2q6G9xaeodneImvh0dvn+V/3l399/WbS7ebPHxrZxJiHKIiICUyqIFMGSZEBERAuyYiFIiICIiAiIgIiUsdD5Qrzh3FbE1X5FzYa/dNhrt008PCdVglIABHp085zPDlCtexuNbNuOn8zadPhnut+s5yq4ztlH+7ylTMd6wA1cDzP99ZZfHIo1ZbeLDWZ6eidMyrT0Exyp0/vfSQnE0sASNemol1aqvqp08D4f37yaNsOom9v5+3jOe4o297/AFnSYh1AFyNR4abmaDibBtrnnuRy2k07ljm/id4azquw2OyVXw7bOM6eajUeq6/lnI41MrXmRw3EEYjDOp1Dp/usw9QWHrNsHn5Y9hiInTBESZEBERCkplUQKYlUQLkREKREmAiIgRJiICYnEqpSmxUXJ0HPfS9veZcwuJVCAum5PuBoPcyZdR1hN5SOMxfB3telUOvJtg3Jtr9NPCc9j+D44spasXC3GVHYD+C9jbSehmt38hXZd+XQD9faYDnvnYi/TYW+kz87J038Jb2874JQRC/x6QqVA7IPiDMqZQtzlPzEk/QeM3GMwdd0D08JSC67qgbw7qroPO58puMPQQYiqjaFyKyX+8CiI4XqVZASP9Y6zeOHCAKoOnpLcu9kx604ZuGOmXMi94A3pA0mUnlmQrrtpL44ti8K/wABKZxAZBUCvpUpjMVILKO8LjcgnXedMuGIu9R1VUGZrbAAEkknYATH7P4UVHqYtxY1bJSzaFaKXym3LO128rSzLq2lnqRweL4/Xq1Cj0zRsLsLljYdAcoG/My6cTSUDNiKmY7LZTyvyXbbYneXe0VFDxAZhcMMrea6jz0b6ToFwtIqCEW62tYdNr66y+WOp058crvTjcVWflUzDo6kW8Qb+fK4mT2e4wtPE0VqUzf4iAZSGBzsF8DuR7S3xan/AIpYCwOpAH1sOc6vsb2YpPXFaogcUkpuAdhWqWqA+JVFQ/nHQTrGyuOTp6VIkxDFEREBIkxCoiTIgIiIFyIkwpERAREQEREBMXHpdLj7pB+sypDKCCDsdD6xZuLjdWVoG7qsSD0v120mtcaknnv5aa/p7zZY18qZTysDfmQ39CZhFLnfl7TzZPZP1dXA06ygVFzC9xexykcwdwfETDxXC3QWpYysvgzBwP4wZnirkQk8rn/mYtDDPWOaocqbhR8zDqddAem8st0WT3WHheDu9vjYhqyKR3NkYjUBgujcpvNb2ta2lhpbwAl80Vy5ACo27ndIv0mrxmK/Zktmd+hcgt5EgC/na8t7c7nxx3afh5bEjKbMSCDzRl2MrTG1qf8Am4dXH4qZZR/CFa012P4q1atmAtqLX3E6cVrpdt7ay3qaqybcfjseHY5KYXXXMxPrt/xPVuyVILhKTbtURarn8TuAx8gNAByAA5TyTiBzVGPMg7T23AUslNEsBkRFsuy5VAsPDSaY3p5+WdsiLyInTFN4kRCpkREBERAREQLsSBJhSIiAiIgIiICIkwNXx/EUqdJnqAC4yA2F7nbXppf0mjwtTUdDt7Sr7TKbNgKzJ8yZXHgL5XP8LNNVg65UKbXFh48hOOTHqNuG+3RGnfQ7f1vaY7CoGugUi2uYkfUXmQrhluDfn9Iwzb259Zk2WDiqg3ot+VlP85hY3iGQE1KTnTbKW38h4TbPXK7DymsxuJexzD339pdxZr8cFjuIUi5IABJ2OhHoZsqOILKLXy2YEnbQX/lMPipDP3rf1l3HY0LSVRoSNeWm3pF79J6R2Y4SMTicjE5AC725qGHd9Tpeev3nM9h+DfAo53H+JWs56om6L563Pibcp0pm2M1Hkzy3UymLxK5JVKYgVRKYgVREQEREC5JkRCpiIgIiW6+IRBeo6oOrsF/WBcic7xHtrgaO+IDnpRBf6ju/WclxT7VeWFw/5q7f9if+U6mNqzG16fNdjeOYekwR6ql2IVaaEM7MxAAyjbcamwnifFe22Nr3DVyin7tIZBbzGp9TMPs5jfhYmhUY6LVQsTyBYByT+6WnUwdTF73xHCirSqU2Fw6OhB27ykTgeyVQvRCv86Mab36ocp9Z6Os4hcOMPjq9PZaxFdOl27rjzut/WZ8k3F4b3Yums1MleXLbSbDAY0MLc+ktY2jmAI3H1mpxKsNVFiOhtMW7qDUG50mh7QYkWy31O2vSavE8TxGXvAAdbbzUVMU5Odu8dfm6eHSPEl0wuI1QBfcnQeM11ZndWN/lU3J1tYaD1tMfiuMYuFHznYfhEp4rU+DRCA95h3j1Lbn++k34+P7WXJyfjoey32mVaSini1NZBYB1sHUdDya3ofOd7gO3WAq7YgIelUFLep0+s+fUl1ZrcJWUkr6YoY+k+tOqj/uOrfoZkXnzCo585s8FxzE0f8rEVE8Fdre17TnwPF9GXi88X4d9o+MS3xClUc865W/iW36Gdlwv7R8LU0qq9I+Izr7rr7gTm42HjXcXi8xcFjadZA9GorqeaEEf0MyAZHKqVSkGIFUSmIF6ImHxfiSYak9ap8qDYbsx0VR4kyOmW7hQSxAA3JNgPMzjeOfaJhqN1og1nGl1OVAf39SfQW8Z5rx7tRicWx+JUIS5tTTRFHK4+8fEzRMZpjh+u5j+up4v2+xle4Wp8JD92jddPF/mPuJyteqznM7Mx6uSx9zrKVkss0kkdaQskp0kLK5VW5cVbi3L+kgiVCB9BdnMWa2GoVDu9NC372UBvqDNJ28olWw9dd1Y0yegcXH1Ue5lX2a4nPgEHNHqIf48w+jCaniHaUYnHPgahRMMuZCzWDNWUjK4YnSz2AXnY78s8sfLcjDHLxybnCYoOo685JS55eRmsw4ZCUb5lOVh4jmPA7+s3NFltfl1nks09f8AWt4+iBQPpOP4/UFFABqzfp0nWtQ+LVzM2gJsL9JzXFXQYj9oqJnyG9CkdA5X5alTmqBtbbsQNhvphjbdOc744rfBeyL06RxeLBDsLoh3W+1/G2s4ftBXz1SOn6n+xN8naHEu2JetWZkK3YHREbMoQIuyaZhpuAb33nIu5Zix3JvPXJrp5e7dppJLoEILSoQ1k6U2lQEqCytRC6U5YtLlpRUNhA3HZTjj4SstUElL2dAdHXn6jcT3rCYlKiK9NgyOAykcwRcT5uXRZ6X9lfHD3sJUOhBelflbV0/7h5GZ54/XOWPT00SRKQZMzZpiIgXp5X9qnGs7phkOlPvvbnUI7o/KpP8AFPQ+P8TXDYd6zfdHdB+850Qe5E+f8XiGd2d2JdiWJP3iTcmdYTvbXCfVipoQ3I6GRUELqCpkI9113Gh9Js7UiVCRbSSpgRaVWk2giFLSBK7SkQPSfskx1hiKROgy1R4bo/6JOX4fwxsVVqM+YK7s+ZPmXM5a6+NiR6zE7L8R+DiBdsq1Vag7fgSrZS3mpAPpPa6PCKaInwlAyAWtzG1ol08/JP8AW3MccTJURr3DooJP32QAEnxKlJCYoBdSbdB4TpcfgBUCg5cmtww5m1rH7pFjNDjOBumtM5lG/Vf5EfWebPHvcbcWc1Mat1+ILQpZ1F3YEKNxe3zN4Dfx+s4vFoxVma7Frs5O5A116CdLxLUJSG/zMTuAxFh9L+0xe0Ip4amgqbv3mHPIljl9WyD1M24sZJL+suTK3Kx57xF8lP4f3nfO/gq3VB7lz+aa1Fl7EVTUYu25+g5CSiTSrjjpTK1WLay6iyNIjLJUSaklRClpYqm7WmSJjU9SWPK/9/QQlTU1YL03mXwvHPRqpVpmxRgy+Ntx5EXHrMRENr8219JWWCwj6NwGKWrTSoh7rqGHkRt58pkzzz7LONq9NsM799CXQHmjfMB1s2v5p6EJ57NVlZqpiIhHn/2s8SstPDKd/wDEf0uqD/cfQTzBtdDv1E3HajjH7ViXq/dJyoDyRdF9ba+ZM0rCbYzUb4zU0X110PI9ZQNHI/EL+olRF9DLZNrX3U+4nS1cSQu9pI3h97wJkmRJhUiUyoSk7wIcT2v7POM/tGGCu13p9xuptsfUW954vOn+z7i/wMUqse5VsjeDa5D+o9RJfTjPHce0PS3HX/iYHEXWjTLudthzcm4Cj2+k2LtoPH+k5rtdhamIU4eiwV2W2dr2TNudOZGmm0k7edqeFYNqj53GhNzyHKwHhawHlPOu2vGP2nEuVPcQ5E6ELe59ST9J2dZKvDOFslVx8eq7ogVs3ww2hIbnZQW8yJ5fl1/v0nbvDH6hFmQFsJCLKnMjbShBrLoEoQS4IWLLby4JbPzS4TAGYyDugfiP0l+odDLdHl4AD31P8oSpqHly5+PhKAl9T7S7l6wRCr/Csc2HrJWp6FGDacxzHqLifROHqh0V1N1YBgeoYXE+bmNvOe0fZrxP42DVCbtRJpn935k//JA/LM859ZZR1sREzcPnFhKCOh95LKeUgGeh6VBbrD6jxkk9ZS/WEVKdAZU8tUjcH3l4bQIBlUoWVwqRKW3lSyloFSwCQbg2INwRyI2IhYOsD3TslxkYujTfQMoyuBydbX9CLH1mRh1LuX6nQdNdJ5N2J7RjCVWFQn4dQZWP/Tb7r29bH06TsO13apcNQyYeoDVqr3GQgimhFi4I57geOvKTTz5YXy05D7SeNDEYrIjXp0Aaa22LA98+4t+WcmiyFSXFErXGaVgSht5WJSBDpKiVCQJJhVpD3jKmMop85Ud4RTiT3TFNbC0t4lv1l5DpCfVUoaVGU3hUBDOy+zHiJpYr4ZPdrKVI/wBSAsh/3D1nHE6SvBYl6bpUQ2ZGDKehBuJLNxzZ0+j7xOF/+yqH/Sb6RMvGs/F5WwtKXF5UH5GUNp5fpNm1QfGWm6SXNj4GUloCgbNbwmSkxFbvA+kylhMQCVCUkSoQqq8gxF4VJMgGRJECl1lthsAJcgiEUAaSsSDJAgS0WkEwYEiS20gSloFFOBvAMKYGNim1A8ZlINJhs4z3OwmaTDnH3UFpIkAmCIdJIlLCBJMCLnrIlVjJhEMJIPIwGvofQym9jYwu1vwlu8qc6yhjvDmrZfUW6zPBmsom7TYobiExu1clZECGiuQYEGAEGBIJgBELJhESYiFQZMSICUmSZBMItsYJ0lJOspqNpDliVNTNjSNwPKYAXXWbFYTD3UgRmkkSmxh2i8gkSbdTIdb7QGfxkSPhxAmrv6xViIFlt5bbnESuas0NzM9NoiRzguxyiIaqhtERACREQJEREIkQIiFDKTEQKG3lJiIRQZaqxEOb6WJn0thEQmK5LNflEQ7Y0u0N5MQ5ZMREK//Z`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </div>
              <div className="text-center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  className="m-2"
                >
                  Bill Gates
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </div>
            </div>
          )}

<div className={`pl-${isCollapsed ? '0' : '10'} ${isCollapsed ? 'hidden' : ''}`}>
            <Typography variant="h6" color={colors.grey[300]} className="m-5">
              Filters
            </Typography>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="End Year"
              to="/end-year"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Topics"
              to="/topics"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sector"
              to="/sector"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Region"
              to="/region"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="PEST"
              to="/pest"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Source"
              to="/source"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="SWOT"
              to="/swot"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </Menu>
      </ProSidebar>
    
    </Box>
  );
};

export default SideBar;
